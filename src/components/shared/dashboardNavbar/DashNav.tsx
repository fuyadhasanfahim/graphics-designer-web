import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { AppDispatch, RootState } from '../../../app/store';
import { IUser } from '../../../hooks/user.interface';
import { Link, useLocation } from 'react-router-dom';
import {
    faEdit,
    faGear,
    faSignOut,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { userLoggedOut } from '../../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { getAllMessages } from '../../../features/message/messageApi';
import Inbox from './Inbox';

export default function DashNav() {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.auth.user) as IUser;
    const { messages } = useSelector((state: RootState) => state.messages);
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { name, username, email, profileImage, role } = user;

    const handleSignOut = () => {
        dispatch(userLoggedOut());

        Cookies.remove('accessToken');
    };

    useEffect(() => {
        const fetchAllMessages = async () => {
            try {
                dispatch(getAllMessages());
            } catch (error) {
                console.log(error);
            }
        };

        fetchAllMessages();
    }, [dispatch]);

    const navigationLinks = (
        <>
            <ul className="space-y-1">
                <li>
                    <Link
                        to={'/dashboard'}
                        className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                            location.pathname === '/dashboard' && 'bg-gray-100'
                        }`}
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to={`${
                            role === 'User'
                                ? '/dashboard/create-order'
                                : '/dashboard/users'
                        }`}
                        className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                            location.pathname === '/dashboard/create-order' &&
                            'bg-gray-100'
                        }`}
                    >
                        {role === 'User' ? 'Create Order' : 'Users'}
                    </Link>
                </li>
                <li>
                    <Link
                        to={'dashboard/quotation'}
                        className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                            location.pathname === 'dashboard/quotation' &&
                            'bg-gray-100'
                        }`}
                    >
                        Quotation
                    </Link>
                </li>
                <li>
                    <Link
                        to={'dashboard/projects'}
                        className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                            location.pathname === 'dashboard/projects' &&
                            'bg-gray-100'
                        }`}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/dashboard/billings'}
                        className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                            location.pathname === '/dashboard/billings' &&
                            'bg-gray-100'
                        }`}
                    >
                        Billings
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/dashboard/customer-support'}
                        className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                            location.pathname ===
                                '/dashboard/customer-support' && 'bg-gray-100'
                        }`}
                    >
                        Customer Support
                    </Link>
                </li>
                <Inbox role={role} messages={messages} />
                <li>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            <span className="text-sm font-medium">
                                Settings <FontAwesomeIcon icon={faGear} />
                            </span>
                            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <ul className="mt-2 space-y-1 px-4">
                            <li>
                                <Link
                                    to={'/dashboard/update-info'}
                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 space-x-2"
                                >
                                    <span>Update Info</span>
                                    <FontAwesomeIcon icon={faEdit} />
                                </Link>
                            </li>
                            <li>
                                <button className="block w-full text-start rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 space-x-2">
                                    <span>Delete</span>{' '}
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </li>
                            <li>
                                <form action="">
                                    <button
                                        type="submit"
                                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700 space-x-2"
                                        onClick={handleSignOut}
                                    >
                                        <span>Logout</span>
                                        <FontAwesomeIcon icon={faSignOut} />
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </>
    );

    return (
        <>
            <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-500 bg-white p-4 rounded-full absolute m-2"
            >
                <Bars3Icon className="h-6 w-6" />
            </button>

            <Dialog
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                className="relative lg:hidden"
            >
                <div className="fixed inset-0 top-0 flex">
                    <DialogPanel className="absolute h-dvh w-full max-w-xs bg-white">
                        <div className="flex lg:flex-1 mx-auto items-center justify-between p-6 lg:px-8">
                            <Link
                                to="/"
                                className="-m-1.5 p-1.5 font-cairoPlay text-2xl md:text-4xl aria-hidden:open:sr-only"
                            >
                                iExample.com
                            </Link>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-500 bg-gray-100 p-4 rounded-full m-2"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                        <div className="px-4 pb-6 mb-10">{navigationLinks}</div>
                        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                            <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                                <img
                                    alt={profileImage}
                                    src={profileImage}
                                    className="size-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-xs">
                                        <strong className="block font-medium">
                                            {name?.firstName} {name?.lastName},{' '}
                                            <span>@{username}</span>
                                        </strong>
                                        <span> {email} </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <div className="hidden lg:flex h-dvh flex-col justify-between bg-white w-full max-w-sm border-e z-50">
                <div className="px-4 py-6">{navigationLinks}</div>
                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                        <img
                            alt={profileImage}
                            src={profileImage}
                            className="size-10 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-xs">
                                <strong className="block font-medium">
                                    {name?.firstName} {name?.lastName},{' '}
                                    <span>@{username}</span>
                                </strong>
                                <span> {email} </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
