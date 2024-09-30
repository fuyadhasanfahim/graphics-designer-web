import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import {
    fetchUserOrders,
    updateOrderStatus,
} from '../../features/order/orderApi';
import { Link } from 'react-router-dom';
import { IUser } from '../../hooks/user.interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import EditStatusModal from './EditStatusModal';

interface UserInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: IUser;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({
    isOpen,
    onClose,
    user,
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { _id } = user;

    const { orders } = useSelector((state: RootState) => state.order);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [currentOrderId, setCurrentOrderId] = useState('');
    const [currentStatus, setCurrentStatus] = useState('');

    useEffect(() => {
        if (_id) {
            dispatch(fetchUserOrders(_id));
        }
    }, [_id, dispatch]);

    const handleEditClick = (orderId: string, status: string) => {
        setCurrentOrderId(orderId);
        setCurrentStatus(status);
        setEditModalOpen(true);
    };

    const handleStatusUpdate = (userId: string, newStatus: string) => {
        dispatch(updateOrderStatus({ userId, status: newStatus }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4">
                <div className="flex justify-between items-center border-b p-4">
                    <h2 className="text-xl font-semibold">User Orders</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="h-auto w-full px-4 py-8">
                    <div className="overflow-x-auto w-full">
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
                                                <button
                                                    onClick={() =>
                                                        handleEditClick(
                                                            order._id,
                                                            order.status as string,
                                                        )
                                                    }
                                                    className="text-blue-500 underline"
                                                >
                                                    Edit{' '}
                                                    <FontAwesomeIcon
                                                        icon={faEdit}
                                                    />
                                                </button>
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
            </div>

            <EditStatusModal
                isOpen={isEditModalOpen}
                onClose={() => setEditModalOpen(false)}
                orderId={currentOrderId}
                currentStatus={currentStatus}
                onUpdate={handleStatusUpdate}
            />
        </div>
    );
};

export default UserInfoModal;
