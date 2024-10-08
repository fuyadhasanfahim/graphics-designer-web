import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ReactNode } from 'react'

interface Order {
    userId: string
    status: ReactNode
    _id: string
    createdAt: string
    serviceName: string
    fileFormat: string
    background: string
    path: string
    driveLink: string
}

interface OrderState {
    orders: Order[]
    loading: boolean
    error: string | null
    noOrdersFound: boolean
}

const initialState: OrderState = {
    orders: [],
    loading: false,
    error: null,
    noOrdersFound: false,
}

export const fetchUserOrders = createAsyncThunk(
    'orders/fetchUserOrders',
    async (userId: string) => {
        const response = await axios.get(
            `http://localhost:5000/api/v1/orders/my-orders/${userId}`,
        )
        return response.data.orders
    },
)

export const updateOrderStatus = createAsyncThunk(
    'orders/updateOrderStatus',
    async ({ userId, status }: { userId: string; status: string }) => {
        const response = await axios.patch(
            `http://localhost:5000/api/v1/orders/update-my-order/${userId}`,
            { status },
        )
        return response.data
    },
)

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUserOrders.pending, state => {
                state.loading = true
                state.error = null
                state.noOrdersFound = false
            })
            .addCase(fetchUserOrders.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload.length === 0) {
                    state.noOrdersFound = true
                } else {
                    state.orders = action.payload
                    state.noOrdersFound = false
                }
            })
            .addCase(fetchUserOrders.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to fetch orders'
                state.noOrdersFound = false
            })
            .addCase(updateOrderStatus.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(updateOrderStatus.fulfilled, (state, action) => {
                state.loading = false
                const index = state.orders.findIndex(
                    order => order._id === action.payload._id,
                )
                if (index !== -1) {
                    state.orders[index] = {
                        ...state.orders[index],
                        status: action.payload.status,
                    }
                }
            })
            .addCase(updateOrderStatus.rejected, (state, action) => {
                state.loading = false
                state.error =
                    action.error.message || 'Failed to update order status'
            })
    },
})

export default orderSlice.reducer
