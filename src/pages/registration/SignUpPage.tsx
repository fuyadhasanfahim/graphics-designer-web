import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PhoneInput from 'react-phone-input-2';
import { useRegisterMutation } from '../../features/auth/authApi';
import toast, { Toaster } from 'react-hot-toast';

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [register, { data, isLoading, error }] = useRegisterMutation();

    useEffect(() => {
        if (data?.user && data?.accessToken) {
            toast.success('Registration successful!');

            setTimeout(() => {
                navigate('/');
            }, 2000);
        } else if (error) {
            toast.error((error as Error).message);
        }
    }, [data, error, navigate]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const name = { firstName, lastName };

        register({
            name,
            username,
            email,
            phone,
            password,
        });
    };

    return (
        <div className="px-4 py-16 sm:px-6 lg:px-8 h-dvh flex justify-center items-center">
            <div className="mx-auto w-full max-w-lg">
                <form
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white"
                    onSubmit={handleSubmit}
                >
                    <p className="text-center text-lg font-medium">Sign Up</p>

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
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
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
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
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
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-transparent"
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
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-transparent"
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
                            <PhoneInput
                                country={'bd'}
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                inputProps={{
                                    id: 'phone',
                                    name: 'phone',
                                    required: true,
                                    autoFocus: false,
                                }}
                                inputClass="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-transparent"
                            />
                        </div>
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
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-transparent"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
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

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
                        disabled={isLoading}
                    >
                        Sign Up
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link className="underline" to={'/login'}>
                            Login
                        </Link>
                    </p>
                </form>
            </div>

            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    );
}
