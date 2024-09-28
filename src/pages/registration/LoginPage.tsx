import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../features/auth/authApi';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [login, { data, isLoading, error }] = useLoginMutation();

    useEffect(() => {
        if (data?.user && data?.accessToken) {
            toast.success('Login successful!');

            setTimeout(() => {
                navigate('/');
            }, 2000);
        } else if (error) {
            const errorMessage = (error as Error).message;
            toast.error(errorMessage);
        }
    }, [data, error, navigate]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await login({ email, password });
    };

    return (
        <div className="px-4 py-16 sm:px-6 lg:px-8 h-dvh flex justify-center items-center">
            <div className="mx-auto w-full max-w-lg">
                <form
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white"
                    onSubmit={handleSubmit}
                >
                    <p className="text-center text-lg font-medium">Sign in</p>

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
                                autoComplete="true"
                                onChange={(e) => setEmail(e.target.value)}
                                required
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
                                autoComplete="true"
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
                        Sign in
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        {`Don't have an account?`}{' '}
                        <Link className="underline" to={'/sign-up'}>
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>

            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    );
}
