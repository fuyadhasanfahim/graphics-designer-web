import { useEffect, useState } from 'react';
import { IUser } from '../../hooks/user.interface';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import IOrder from '../../hooks/order.interface';
import { Link } from 'react-router-dom';

export default function DashUser() {
    const user = useSelector((state: RootState) => state.auth.user) as IUser;
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/v1/orders/my-orders/${user._id}`,
                );
                setOrders(response.data.orders);
            } catch (error) {
                console.log(error);
            }
        };

        fetchOrder();
    }, [user._id]);

    const formatDateAndTime = (createdAt: Date) => {
        const date = new Date(createdAt);

        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
        };
        const dateString = date.toLocaleDateString('en-US', options);

        const timeOptions: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };
        const timeString = date.toLocaleTimeString('en-US', timeOptions);

        return `${dateString}, ${timeString}`;
    };

    return (
        <div className="overflow-x-auto w-full max-w-7xl mx-auto my-10 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <table className="min-w-full border border-black bg-white text-sm shadow-md">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                            Date
                        </th>
                        <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                            Service Name
                        </th>
                        <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                            File Format
                        </th>
                        <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                            Background
                        </th>
                        <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                            Path
                        </th>
                        <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                            Drive Link
                        </th>
                        <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                            Status
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {orders.length > 0 &&
                        orders.map((order: IOrder) => {
                            const {
                                _id,
                                createdAt,
                                serviceName,
                                driveLink,
                                status,
                                fileFormat,
                                background,
                                path,
                            } = order;

                            return (
                                <tr key={_id}>
                                    <td className="whitespace-nowrap text-center border border-black px-4 py-2 font-medium text-gray-900">
                                        {formatDateAndTime(createdAt)}
                                    </td>
                                    <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                        {serviceName}
                                    </td>
                                    <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                        {fileFormat}
                                    </td>
                                    <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                        {background}
                                    </td>
                                    <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                        {path}
                                    </td>
                                    <td className="whitespace-nowrap border border-black px-4 py-2 text-blue-500">
                                        <Link to={`https://www.${driveLink}`}>
                                            {driveLink}
                                        </Link>
                                    </td>
                                    <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                        {status}
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}
