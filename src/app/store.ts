import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import authSliceReducer from '../features/auth/authSlice'
import orderReducer from '../features/order/orderApi'
import messagesReducer from '../features/message/messageApi'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        order: orderReducer,
        messages: messagesReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddlewares =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
