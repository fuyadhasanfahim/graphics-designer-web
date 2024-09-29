import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ReactNode } from 'react';

interface Order {
    status: ReactNode;
    _id: string;
    createdAt: string;
    serviceName: string;
    fileFormat: string;
    background: string;
    path: string;
    driveLink: string;
}

interface OrderState {
    orders: Order[];
    loading: boolean;
    error: string | null;
    noOrdersFound: boolean;
}

const initialState: OrderState = {
    orders: [],
    loading: false,
    error: null,
    noOrdersFound: false,
};

export const fetchUserOrders = createAsyncThunk(
    'orders/fetchUserOrders',
    async (userId: string) => {
        const response = await axios.get(
            `http://localhost:5000/api/v1/orders/my-orders/${userId}`,
        );
        return response.data.orders;
    },
);

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.noOrdersFound = false;
            })
            .addCase(fetchUserOrders.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.length === 0) {
                    state.noOrdersFound = true;
                } else {
                    state.orders = action.payload;
                    state.noOrdersFound = false;
                }
            })
            .addCase(fetchUserOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch orders';
                state.noOrdersFound = false;
            });
    },
});

export default orderSlice.reducer;
