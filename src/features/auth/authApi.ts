import { apiSlice } from '../api/apiSlice';
import { userLoggedIn, userLoggedOut } from './authSlice';
import Cookies from 'js-cookie';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/users/register',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    Cookies.set('accessToken', result.data.accessToken, {
                        expires: 7,
                    });

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    );
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/users/login',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    Cookies.set('accessToken', result?.data?.accessToken, {
                        expires: 7,
                    });

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    );
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        fetchCurrentUser: builder.query({
            query: () => ({
                url: '/users/me',
                method: 'GET',
                credentials: 'include',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        userLoggedIn({
                            accessToken: Cookies.get('accessToken'),
                            user: data.user,
                        }),
                    );
                } catch (error) {
                    console.error('Error fetching user:', error);
                }
            },
        }),
        deleteUser: builder.mutation({
            query: (userId: string) => ({
                url: `/users/delete/${userId}`,
                method: 'DELETE',
                credentials: 'include',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;

                    Cookies.remove('accessToken');
                    dispatch(userLoggedOut());
                } catch (error) {
                    console.error('Error deleting user:', error);
                }
            },
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useFetchCurrentUserQuery,
    useDeleteUserMutation,
} = authApi;
