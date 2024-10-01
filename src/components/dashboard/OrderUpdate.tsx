import React, { useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import IOrder from '../../hooks/order.interface';
import { IUser } from '../../hooks/user.interface';

interface OrderUpdateProps {
    isOpen: boolean;
    order: IOrder;
    onClose: () => void;
    userId: string;
}

const OrderUpdate: React.FC<OrderUpdateProps> = ({
    isOpen,
    order,
    onClose,
    userId,
}) => {
    const [userInfo, setUserInfo] = React.useState<IUser | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);
    const [status, setStatus] = React.useState<string>(order.status as string);

    useEffect(() => {
        const getUserInfo = async (userId: string) => {
            try {
                const response = await axios.get<IUser>(
                    `http://localhost:5000/api/v1/users/get-user/${userId}`,
                );

                setUserInfo(response.data.user as unknown as IUser);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch user information.');
                setLoading(false);
            }
        };

        if (userId) {
            getUserInfo(userId);
        }
    }, [userId]);

    const handleStatusChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setStatus(event.target.value);
    };

    const handleStatusUpdate = async () => {
        console.log(order._id);
        try {
            const response = await axios.patch(
                `http://localhost:5000/api/v1/orders/update-my-order/${order._id}`,
                { status },
            );
            console.log(status);

            if (response.data) {
                toast.success('Order updated successfully. Closing...');

                setTimeout(() => {
                    onClose();

                    window.location.reload();
                }, 2000);
            } else {
                toast.error('Failed to update order.');
            }
        } catch (error) {
            toast.error('Failed to update order status.');
            console.error('Error updating order:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                role="dialog"
                aria-modal="true"
            >
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                    <h2 className="text-xl font-semibold mb-4">Update Order</h2>
                    <div className="mb-4">
                        <p>
                            <strong>Date:</strong>{' '}
                            {new Date(order.createdAt).toLocaleString()}
                        </p>
                        <p>
                            <strong>Service Name:</strong> {order.serviceName}
                        </p>
                        <p>
                            <strong>Drive Link:</strong>
                            <a
                                href={order.driveLink}
                                className="text-blue-500 hover:underline"
                            >
                                {order.driveLink}
                            </a>
                        </p>
                        <p>
                            <strong>Status:</strong>
                            <select
                                value={status}
                                onChange={handleStatusChange}
                                className="ml-2 border bg-white border-gray-300 shadow-sm focus:outline-none"
                            >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </p>
                    </div>

                    {loading ? (
                        <div className="p-4 max-w-sm w-full mx-auto">
                            <div className="animate-pulse flex space-x-4">
                                <div className="flex-1 space-y-6 py-1">
                                    <div className="h-2 bg-slate-700 rounded"></div>
                                    <div className="space-y-3">
                                        <div className="space-y-2">
                                            <p className="bg-slate-700 rounded h-2"></p>
                                            <p className="bg-slate-700 rounded h-2"></p>
                                            <p className="bg-slate-700 rounded h-2"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {error && <p className="text-red-500">{error}</p>}
                            {userInfo && (
                                <div>
                                    <h3 className="font-semibold mt-4">
                                        User Information
                                    </h3>
                                    <p>
                                        <strong>Name:</strong>{' '}
                                        {userInfo.name.firstName}{' '}
                                        {userInfo.name.lastName}
                                    </p>
                                    <p>
                                        <strong>Username:</strong>{' '}
                                        {userInfo.username}
                                    </p>
                                    <p>
                                        <strong>Email:</strong> {userInfo.email}
                                    </p>
                                </div>
                            )}
                        </>
                    )}

                    <div className="mt-4 flex gap-x-3">
                        <button
                            className="bg-green-100 text-green-500 px-4 py-2 rounded"
                            onClick={handleStatusUpdate}
                        >
                            Update
                        </button>
                        <button
                            className="bg-red-100 text-red-500 px-4 py-2 rounded"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>

            <Toaster position="bottom-right" reverseOrder={false} />
        </>
    );
};

export default OrderUpdate;
