import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { IUser } from '../../hooks/user.interface';
import { fetchUserOrders } from '../../features/order/orderApi';
import { Link } from 'react-router-dom';

export default function CurrentOrders() {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.auth?.user) as IUser;
    const { _id } = user;

    const { orders } = useSelector((state: RootState) => state.order);

    useEffect(() => {
        if (_id) {
            dispatch(fetchUserOrders(_id));
        }
    }, [_id, dispatch]);

    return (
        <>
            <div className="h-dvh w-full max-w-7xl mx-auto my-20 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="overflow-x-auto">
                    {Array.isArray(orders) && orders.length > 0 ? (
                        <table className="min-w-full bg-white text-sm">
                            <thead className="ltr:text-left rtl:text-right">
                                <tr>
                                    <th className="whitespace-nowrap border border-black text-center px-4 py-2 font-medium text-gray-900">
                                        Date
                                    </th>
                                    <th className="whitespace-nowrap border border-black text-center px-4 py-2 font-medium text-gray-900">
                                        Service Name
                                    </th>
                                    <th className="whitespace-nowrap border border-black text-center px-4 py-2 font-medium text-gray-900">
                                        File Format
                                    </th>
                                    <th className="whitespace-nowrap border border-black text-center px-4 py-2 font-medium text-gray-900">
                                        Background
                                    </th>
                                    <th className="whitespace-nowrap border border-black text-center px-4 py-2 font-medium text-gray-900">
                                        Path
                                    </th>
                                    <th className="whitespace-nowrap border border-black text-center px-4 py-2 font-medium text-gray-900">
                                        Drive Link
                                    </th>
                                    <th className="whitespace-nowrap border border-black text-center px-4 py-2 font-medium text-gray-900">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black">
                                {orders.map((order) => (
                                    <tr key={order._id}>
                                        <td className="whitespace-nowrap border border-black text-center px-4 py-2 text-gray-700">
                                            {new Date(
                                                order.createdAt,
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="whitespace-nowrap border border-black text-center px-4 py-2 font-medium text-gray-900">
                                            {order.serviceName}
                                        </td>
                                        <td className="whitespace-nowrap border border-black text-center px-4 py-2 text-gray-700">
                                            {order.fileFormat}
                                        </td>
                                        <td className="whitespace-nowrap border border-black text-center px-4 py-2 text-gray-700">
                                            {order.background}
                                        </td>
                                        <td className="whitespace-nowrap border border-black text-center px-4 py-2 text-gray-700">
                                            {order.path}
                                        </td>
                                        <td className="whitespace-nowrap border border-black text-center px-4 py-2 text-gray-700">
                                            <Link
                                                to={order.driveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 underline"
                                            >
                                                {order.driveLink}
                                            </Link>
                                        </td>
                                        <td className="whitespace-nowrap border border-black text-center px-4 py-2 text-gray-700">
                                            {order.status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div>
                            <h1 className="text-4xl font-semibold text-center px-4 py-2 text-gray-700">
                                No order found!
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
