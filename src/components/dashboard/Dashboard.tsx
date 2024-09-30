import { useSelector } from 'react-redux';
import { IUser } from '../../hooks/user.interface';
import { AppDispatch, RootState } from '../../app/store';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserOrders } from '../../features/order/orderApi';
import { useEffect } from 'react';
import { useGetAllUsersQuery } from '../../features/auth/authApi';

export default function Dashboard() {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.auth?.user) as IUser;
    const { _id } = user;

    const { orders } = useSelector((state: RootState) => state.order);
    const { data: usersData } = useGetAllUsersQuery({});

    const users = usersData?.data || [];

    useEffect(() => {
        if (_id) {
            dispatch(fetchUserOrders(_id));
        }
    }, [_id, dispatch]);

    return (
        <div className="h-dvh w-full max-w-7xl mx-auto my-20">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <dl className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    {user?.role === 'User' ? (
                        <Link to={`/dashboard/orders/current-order/${_id}`}>
                            <div className="relative flex flex-col rounded-lg bg-green-100 px-4 py-8 text-center hover:scale-105 duration-300">
                                <dt className="absolute -top-3 -right-3 order-last text-lg font-medium text-white">
                                    <div className="h-6 w-6 bg-red-500 rounded-full">
                                        {orders?.length > 0 ? (
                                            <span>{orders?.length}</span>
                                        ) : (
                                            <span>0</span>
                                        )}
                                    </div>
                                </dt>

                                <dd className="text-xl md:text-2xl lg:text-3xl xl:text-4xl  font-extrabold text-green-600">
                                    Your Current Orders
                                </dd>
                            </div>
                        </Link>
                    ) : (
                        <Link to={`/dashboard/users`}>
                            <div className="relative flex flex-col rounded-lg bg-green-100 px-4 py-8 text-center hover:scale-105 duration-300">
                                <dt className="absolute -top-3 -right-3 order-last text-lg font-medium text-white">
                                    <div className="h-6 w-6 bg-red-500 rounded-full">
                                        {users.length > 0 ? (
                                            <span>{users?.length}</span>
                                        ) : (
                                            <span>0</span>
                                        )}
                                    </div>
                                </dt>

                                <dd className="text-xl md:text-2xl lg:text-3xl xl:text-4xl  font-extrabold text-green-600">
                                    Users
                                </dd>
                            </div>
                        </Link>
                    )}
                </dl>
            </div>
        </div>
    );
}
