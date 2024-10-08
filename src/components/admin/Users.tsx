import { useGetAllUsersQuery } from '../../features/auth/authApi'
import { IUser } from '../../hooks/user.interface'
import { useState } from 'react'
import UserInfoModal from './UserInfoModal'

export default function Users() {
    const { data: usersData } = useGetAllUsersQuery({})
    const users = usersData?.data || []

    const [isModalOpen, setModalOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState({})

    const handleViewClick = (user: IUser) => {
        setSelectedUser(user)
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
        setSelectedUser({})
    }

    return (
        <div className="h-dvh w-full max-w-7xl mx-auto my-20 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                                Created Date
                            </th>
                            <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                                Name
                            </th>
                            <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                                Email
                            </th>
                            <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                                Role
                            </th>
                            <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                                Current Orders
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {users.map((user: IUser) => {
                            const {
                                _id,
                                name,
                                username,
                                email,
                                role,
                                createdAt,
                            } = user

                            return (
                                <tr key={_id}>
                                    <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                        {new Date(
                                            createdAt,
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                                        {name.firstName} {name.lastName},{' '}
                                        <span className="text-sm">
                                            ({username})
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                        {email}
                                    </td>
                                    <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                        {role}
                                    </td>
                                    <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700 text-center">
                                        <button
                                            className="underline"
                                            onClick={() =>
                                                handleViewClick(user)
                                            }
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <UserInfoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                user={selectedUser}
            />
        </div>
    )
}
