import { apiSlice } from '../api/apiSlice'
import { getAllUsers, userLoggedIn, userLoggedOut } from './authSlice'
import Cookies from 'js-cookie'

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: data => ({
                url: '/users/register',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled

                    Cookies.set('accessToken', result.data.accessToken, {
                        expires: 7,
                    })

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    )
                } catch (error) {
                    console.log(error)
                }
            },
        }),
        login: builder.mutation({
            query: data => ({
                url: '/users/login',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled

                    Cookies.set('accessToken', result?.data?.accessToken, {
                        expires: 7,
                    })

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    )
                } catch (error) {
                    console.log(error)
                }
            },
        }),
        fetchCurrentUser: builder.query({
            query: () => ({
                url: '/users/me',
                method: 'GET',
                credentials: 'include',
            }),
            async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled

                    dispatch(
                        userLoggedIn({
                            accessToken: Cookies.get('accessToken'),
                            user: data.user,
                        }),
                    )
                } catch (error) {
                    console.error('Error fetching user:', error)
                }
            },
        }),
        deleteUser: builder.mutation({
            query: (userId: string) => ({
                url: `/users/delete/${userId}`,
                method: 'DELETE',
                credentials: 'include',
            }),
            async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled

                    if (data.message === 'Cannot delete a SuperAdmin user') {
                        throw new Error('SuperAdmin users cannot be deleted!')
                    } else {
                        Cookies.remove('accessToken')
                        dispatch(userLoggedOut())
                    }
                } catch (error) {
                    console.error('Error deleting user:', error)
                }
            },
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: '/users/all-users',
                method: 'GET',
                credentials: 'include',
            }),
            async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled

                    dispatch(getAllUsers(data.users))
                } catch (error) {
                    console.error('Error fetching users:', error)
                }
            },
        }),
    }),
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useFetchCurrentUserQuery,
    useDeleteUserMutation,
    useGetAllUsersQuery,
} = authApi
