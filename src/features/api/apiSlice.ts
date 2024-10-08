/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../../app/store'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/v1/',
        prepareHeaders: async (headers, { getState }) => {
            const state = getState() as RootState
            const token = state.auth?.accessToken

            if (token) {
                headers.set('Authorization', `Bearer  ${token}`)
            }

            return headers
        },
    }),

    endpoints: _builder => ({}),
})
