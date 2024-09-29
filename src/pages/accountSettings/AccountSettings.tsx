import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';
import { useDeleteUserMutation } from '../../features/auth/authApi';
import { IUser } from '../../hooks/user.interface';
import { useState } from 'react';
import UpdateUserModal from '../../components/accountSettings/UpdateUserModal';
import ConfirmationModal from '../../components/accountSettings/ConfirmationModal';
import { useLocation } from 'react-router-dom';

const AccountSettings = () => {
    const user = useSelector((state: RootState) => state.auth.user) as IUser;
    const { name, email, username, profileImage } = user;
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
        useState(false);
    const location = useLocation();

    const [deleteUser] = useDeleteUserMutation();

    const handleDelete = async () => {
        try {
            if (user?._id) {
                await deleteUser(user._id).unwrap();
                toast.success('Account deleted successfully');
                setIsConfirmationModalOpen(false);
            } else {
                toast.error('User ID is missing');
            }
        } catch (error) {
            toast.error('Failed to delete account');
            console.error('Error deleting user:', error);
        }
    };

    const handleUpdateClick = () => {
        setIsUpdateModalOpen(true);
    };

    const openConfirmationModal = () => {
        setIsConfirmationModalOpen(true);
    };

    return (
        <>
            <div className="flex justify-center items-center h-dvh w-full p-4">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md -mt-10">
                    <div className="flex flex-col items-center">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-24 h-24 rounded-full shadow-md mb-4 bg-cover"
                        />
                        <h2 className="text-xl font-semibold text-gray-800">
                            {name?.firstName} {name?.lastName}
                        </h2>
                        <p className="text-gray-500">@{username}</p>
                        <p className="text-gray-500">{email}</p>
                    </div>

                    <div className="my-6 border-t border-gray-200"></div>

                    <div className="flex gap-4 justify-center">
                        <button
                            className="flex gap-x-2 items-center rounded bg-green-100 px-4 py-2 text-sm font-medium text-green-600"
                            onClick={handleUpdateClick}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                            Update
                        </button>
                        {location.pathname !== '/dashboard/update-info' && (
                            <button
                                className="flex gap-x-2 items-center rounded bg-red-100 px-4 py-2 text-sm font-medium text-red-600"
                                onClick={openConfirmationModal}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {isUpdateModalOpen && (
                <UpdateUserModal
                    user={user}
                    setIsModalOpen={setIsUpdateModalOpen}
                />
            )}

            {isConfirmationModalOpen && (
                <ConfirmationModal
                    isOpen={isConfirmationModalOpen}
                    onClose={() => setIsConfirmationModalOpen(false)}
                    onConfirm={handleDelete}
                />
            )}

            <Toaster position="bottom-right" />
        </>
    );
};

export default AccountSettings;
