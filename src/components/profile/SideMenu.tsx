import { faEdit, faSignOut, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../app/store';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

interface IUser {
    name: {
        firstName: string;
        lastName: string;
    };
    email: string;
    profileImage: string;
}

export default function SideMenu() {
    // const user: IUser = useSelector((state: RootState) => state.auth.user);
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const [showModal, setShowModal] = useState(false);
    // const location = useLocation();

    // const { name, email, profileImage } = user;

    return (
        // <div className="w-full max-w-sm">
        //     <div className="md:hidden flex flex-row-reverse justify-end p-4">
        //         <button
        //             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        //             className="text-gray-500 focus:outline-none"
        //         >
        //             {isMobileMenuOpen ? (
        //                 <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        //             ) : (
        //                 <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        //             )}
        //         </button>
        //     </div>

        //     <div
        //         className={`md:flex h-dvh flex-col justify-between border-e bg-white ${
        //             isMobileMenuOpen ? 'block' : 'hidden'
        //         } md:block`}
        //     >
        //         <div className="px-4 py-6">
        //             <ul className="mt-6 space-y-1">
        //                 <li>
        //                     <Link
        //                         to={'/profile'}
        //                         className={`block rounded-lg ${
        //                             location.pathname === '/profile' &&
        //                             'bg-gray-100'
        //                         } px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200`}
        //                     >
        //                         General
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         to={'/profile/order'}
        //                         className={`block rounded-lg ${
        //                             location.pathname === '/profile/order' &&
        //                             'bg-gray-100'
        //                         } px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200`}
        //                     >
        //                         Order
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <details className="group [&_summary::-webkit-details-marker]:hidden">
        //                         <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
        //                             <span className="text-sm font-medium">
        //                                 Teams
        //                             </span>
        //                             <span className="shrink-0 transition duration-300 group-open:-rotate-180">
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     className="h-5 w-5"
        //                                     viewBox="0 0 20 20"
        //                                     fill="currentColor"
        //                                 >
        //                                     <path
        //                                         fillRule="evenodd"
        //                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        //                                         clipRule="evenodd"
        //                                     />
        //                                 </svg>
        //                             </span>
        //                         </summary>

        //                         <ul className="mt-2 space-y-1 px-4">
        //                             <li>
        //                                 <a
        //                                     href="#"
        //                                     className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        //                                 >
        //                                     Banned Users
        //                                 </a>
        //                             </li>
        //                             <li>
        //                                 <a
        //                                     href="#"
        //                                     className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        //                                 >
        //                                     Calendar
        //                                 </a>
        //                             </li>
        //                         </ul>
        //                     </details>
        //                 </li>
        //                 <li>
        //                     <a
        //                         href="#"
        //                         className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        //                     >
        //                         Billing
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a
        //                         href="#"
        //                         className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        //                     >
        //                         Invoices
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <details className="group [&_summary::-webkit-details-marker]:hidden">
        //                         <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
        //                             <span className="text-sm font-medium">
        //                                 Account
        //                             </span>
        //                             <span className="shrink-0 transition duration-300 group-open:-rotate-180">
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     className="h-5 w-5"
        //                                     viewBox="0 0 20 20"
        //                                     fill="currentColor"
        //                                 >
        //                                     <path
        //                                         fillRule="evenodd"
        //                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        //                                         clipRule="evenodd"
        //                                     />
        //                                 </svg>
        //                             </span>
        //                         </summary>

        //                         <ul className="mt-2 space-y-1 px-4">
        //                             <li>
        //                                 <Link
        //                                     to={'/profile/update-profile'}
        //                                     className={`block rounded-lg ${
        //                                         location.pathname ===
        //                                             '/profile/update-profile' &&
        //                                         'bg-gray-100'
        //                                     } px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200`}
        //                                 >
        //                                     <span className="mr-2">
        //                                         Update Profile
        //                                     </span>
        //                                     <FontAwesomeIcon icon={faEdit} />
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <button
        //                                     className="block w-full text-start rounded-lg px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-500 hover:text-gray-100"
        //                                     onClick={() => setShowModal(true)}
        //                                 >
        //                                     <span className="mr-2">
        //                                         Delete Profile
        //                                     </span>
        //                                     <FontAwesomeIcon icon={faTrash} />
        //                                 </button>
        //                             </li>
        //                             <li>
        //                                 <button
        //                                     className="block w-full text-start rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        //                                     // onClick={handleLogout}
        //                                 >
        //                                     <span className="mr-2">
        //                                         Log Out
        //                                     </span>
        //                                     <FontAwesomeIcon icon={faSignOut} />
        //                                 </button>
        //                             </li>
        //                         </ul>
        //                     </details>
        //                 </li>
        //             </ul>
        //         </div>

        //         <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        //             <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
        //                 <img
        //                     alt={`${name?.firstName} ${name?.lastName}'s profile image`}
        //                     src={profileImage}
        //                     className="h-10 w-10 rounded-full object-cover"
        //                 />
        //                 <div>
        //                     <p className="text-xs">
        //                         <strong className="block font-medium">
        //                             {name?.firstName} {name?.lastName}
        //                         </strong>
        //                         <span>{email}</span>
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     {/* Modal Component */}
        //     {/* <ConfirmationModal
        //         isOpen={showModal}
        //         onClose={() => setShowModal(false)}
        //         onConfirm={handleDelete}
        //     /> */}
        // </div>

        <div className="flex h-screen w-full justify-center pt-20">
            <div className="flex gap-8">
                <div className="text-sm/6 font-semibold text-gray-800">
                    Products
                </div>
                <Popover>
                    <PopoverButton className="block text-sm/6 font-semibold text-gray-800 focus:outline-none data-[active]:text-gray-900 data-[hover]:text-gray-900 data-[focus]:outline-1 data-[focus]:outline-black">
                        Solutions
                    </PopoverButton>
                    <PopoverPanel
                        transition
                        anchor="bottom"
                        className="divide-y divide-gray-300 rounded-xl bg-gray-100 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                    >
                        <div className="p-3">
                            <a
                                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200"
                                href="#"
                            >
                                <p className="font-semibold text-gray-900">
                                    Insights
                                </p>
                                <p className="text-gray-600">
                                    Measure actions your users take
                                </p>
                            </a>
                            <a
                                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200"
                                href="#"
                            >
                                <p className="font-semibold text-gray-900">
                                    Automations
                                </p>
                                <p className="text-gray-600">
                                    Create your own targeted content
                                </p>
                            </a>
                            <a
                                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200"
                                href="#"
                            >
                                <p className="font-semibold text-gray-900">
                                    Reports
                                </p>
                                <p className="text-gray-600">
                                    Keep track of your growth
                                </p>
                            </a>
                        </div>
                        <div className="p-3">
                            <a
                                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200"
                                href="#"
                            >
                                <p className="font-semibold text-gray-900">
                                    Documentation
                                </p>
                                <p className="text-gray-600">
                                    Start integrating products and tools
                                </p>
                            </a>
                        </div>
                    </PopoverPanel>
                </Popover>
                <div className="text-sm/6 font-semibold text-gray-800">
                    Pricing
                </div>
            </div>
        </div>
    );
}
