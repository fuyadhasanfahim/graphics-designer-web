import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
// import axios from 'axios';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

export default function UpdateProfile() {
    const [showPassword, setShowPassword] = useState(false);
    const [
        name,
    ] = useState({ firstName: '', lastName: '' });

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profileImage, setProfileImage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleNameChange = (field, value) => {
        // setName((prevName) => ({
        //     ...prevName,
        //     [field]: value,
        // }));
    };

    return (
        <div className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-lg">
                <form
                    className="mb-0 mt-6 space-y-4 p-4 sm:p-6 lg:p-8 bg-white ring-1 ring-gray-200 rounded-md shadow-md"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label htmlFor="firstName" className="sr-only">
                            First Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-transparent"
                                placeholder="Enter first name"
                                value={name.firstName}
                                onChange={(e) =>
                                    handleNameChange(
                                        'firstName',
                                        e.target.value,
                                    )
                                }
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="lastName" className="sr-only">
                            Last Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-transparent"
                                placeholder="Enter last name"
                                value={name.lastName}
                                onChange={(e) =>
                                    handleNameChange('lastName', e.target.value)
                                }
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="username" className="sr-only">
                            Username
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="sr-only">
                            Phone
                        </label>
                        <div className="relative">
                            {/* <PhoneInput
                                country={'bd'}
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: false,
                                }}
                                inputClass="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                            /> */}
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="p-4 text-sm text-center font-light text-red-500"
                        >
                            (if you want to change the password just put in
                            bellow.)
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                                placeholder="Change password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FontAwesomeIcon icon={faEye} />
                                ) : (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                )}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="profileImage" className="sr-only">
                            Profile Image URL
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="profileImage"
                                name="profileImage"
                                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-transparent"
                                placeholder="Profile Image URL"
                                value={profileImage}
                                onChange={(e) =>
                                    setProfileImage(e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
