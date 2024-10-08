import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import IMessage from '../../hooks/message.Interface'

interface MessagesState {
    messages: IMessage[]
    loading: boolean
    error: string | null
}

const initialState: MessagesState = {
    messages: [],
    loading: false,
    error: null,
}

export const setMessages = createAsyncThunk(
    'messages/setMessages',
    async (data: {
        sender: {
            userId: string
            name: { firstName: string; lastName: string }
            email: string
            profileImage: string
        }
        message: string
    }) => {
        const response = await axios.post(
            `http://localhost:5000/api/v1/messages/set-message`,
            data,
        )
        return response.data.data || response.data.messages
    },
)

export const getMessages = createAsyncThunk(
    'messages/getMessages',
    async (conversationId: string) => {
        const response = await axios.get(
            `http://localhost:5000/api/v1/messages/get-message/${conversationId}`,
        )
        return response?.data?.messages
    },
)

export const getAllMessages = createAsyncThunk(
    'messages/getAllMessages',
    async () => {
        const response = await axios.get(
            `http://localhost:5000/api/v1/messages/get-all-messages`,
        )
        return response?.data?.messages
    },
)

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(setMessages.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(setMessages.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload) {
                    state.messages.push(action.payload)
                }
            })
            .addCase(setMessages.rejected, (state, action) => {
                state.loading = false
                state.error =
                    action.error.message || 'Failed to send the message'
            })
            .addCase(getMessages.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(getMessages.fulfilled, (state, action) => {
                state.loading = false
                state.messages = action.payload
            })
            .addCase(getMessages.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to fetch messages'
            })
            .addCase(getAllMessages.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(getAllMessages.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload) {
                    state.messages = action.payload
                }
            })
            .addCase(getAllMessages.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to fetch messages'
            })
    },
})

export const { addMessage, setLoading } = messagesSlice.actions
export default messagesSlice.reducer
