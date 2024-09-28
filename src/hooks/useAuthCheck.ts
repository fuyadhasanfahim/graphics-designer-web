import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFetchCurrentUserQuery } from '../features/auth/authApi';
import Cookies from 'js-cookie';
import { userLoggedIn } from '../features/auth/authSlice';

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);
    const token = Cookies.get('accessToken');

    const { data, isLoading } = useFetchCurrentUserQuery(undefined, {
        skip: !token,
    });

    useEffect(() => {
        if (data?.user && token) {
            dispatch(
                userLoggedIn({
                    accessToken: token,
                    user: data.user,
                }),
            );
        }
        setAuthChecked(!isLoading);
    }, [data, token, dispatch, isLoading]);

    return authChecked;
}
