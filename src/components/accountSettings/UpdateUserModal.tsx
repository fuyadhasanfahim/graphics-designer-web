import { useState } from 'react'
import axios from 'axios' // Import Axios
import { IUser } from '../../hooks/user.interface'
import toast from 'react-hot-toast'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

interface UpdateUserModalProps {
    user: IUser
    setIsModalOpen: (isOpen: boolean) => void
}

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({
    user,
    setIsModalOpen,
}) => {
    const [firstName, setFirstName] = useState(user.name.firstName)
    const [lastName, setLastName] = useState(user.name.lastName)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [password, setPassword] = useState('')
    const [profileImage, setProfileImage] = useState(user.profileImage)
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const updatedUser = {
            name: { firstName, lastName },
            username,
            email,
            phone,
            profileImage,
        } as IUser

        if (password.trim()) {
            updatedUser.password = password
        }

        try {
            if (user._id) {
                await axios.patch(
                    `http://localhost:5000/api/v1/users/update/${user._id}`,
                    updatedUser,
                )
                toast.success('User updated successfully')
                setIsModalOpen(false)

                window.location.reload()
            }
        } catch (error) {
            toast.error((error as Error).message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <form
                className="space-y-4 rounded-lg p-6 shadow-lg bg-white w-full max-w-xl"
                onSubmit={handleSubmit}
            >
                <p className="text-center text-lg font-medium">
                    Update Profile
                </p>

                <div>
                    <label htmlFor="firstName" className="sr-only">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="sr-only">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="username" className="sr-only">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                        placeholder="Enter username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="sr-only">
                        Phone
                    </label>
                    <PhoneInput
                        country={'bd'}
                        value={phone}
                        onChange={phone => setPhone(phone)}
                        inputProps={{
                            id: 'phone',
                            name: 'phone',
                        }}
                        inputClass="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                            placeholder="Enter password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 grid place-content-center px-4"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <FontAwesomeIcon
                                icon={showPassword ? faEye : faEyeSlash}
                            />
                        </button>
                    </div>
                </div>

                <div>
                    <label htmlFor="profileImage" className="sr-only">
                        Profile Image
                    </label>
                    <input
                        type="url"
                        id="profileImage"
                        name="profileImage"
                        className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                        placeholder="Enter profile image URL"
                        value={profileImage}
                        onChange={e => setProfileImage(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="submit"
                        className="flex gap-x-2 items-center rounded bg-green-100 px-4 py-2 text-sm font-medium text-green-600"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Saving...' : 'Save'}
                    </button>
                    <button
                        type="button"
                        className="flex gap-x-2 items-center rounded bg-red-100 px-4 py-2 text-sm font-medium text-red-600"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateUserModal
