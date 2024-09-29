import { useState } from 'react';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFolder,
    faGear,
    faSignIn,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../../../features/auth/authSlice';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import Prover from '../../accountSettings/Prover';
import { IUser } from '../../../hooks/user.interface';

const services = [
    {
        name: 'eCommerce Product Photo Editing',
        href: 'ecommerce-product-photo-editing',
    },
    {
        name: 'Background Removal Service',
        href: 'background-removal-service',
    },
    {
        name: 'Image Masking Service',
        href: 'image-masking-service',
    },
    {
        name: 'Ghost Mannequin Service',
        href: 'ghost-mannequin-service',
    },
    {
        name: 'Photo Retouching Service',
        href: 'photo-retouching-service',
    },
    {
        name: 'Shadow Creation Service',
        href: 'shadow-creation-service',
    },
    {
        name: 'Color Correction Service',
        href: 'color-correction-service',
    },
];

export default function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth?.user) as IUser;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const authChecked = useAuth();


    const handleSignOut = () => {
        dispatch(userLoggedOut());

        Cookies.remove('accessToken');
    };

    return (
        <header className="bg-white border-b">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <Link
                        to="/"
                        className="-m-1.5 p-1.5 font-cairoPlay text-2xl md:text-4xl"
                    >
                        iExample.com
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-8">
                    <Link
                        to="/"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Home
                    </Link>

                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Services
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="h-5 w-5 flex-none text-gray-400"
                            />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {services.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div className="flex-auto">
                                            <Link
                                                to={`/services/${item.href}`}
                                                className="block font-semibold text-gray-900"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Link
                        to="/portfolio"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="/pricing"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Pricing
                    </Link>
                    <Link
                        to="/contact"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/free-trail"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Free trail
                    </Link>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="space-x-2">
                        {user ? (
                            <Prover
                                image={`${user !== null && user?.profileImage}`}
                                signOut={handleSignOut}
                            />
                        ) : (
                            <Link
                                to={'/login'}
                                className="text-sm font-semibold leading-6 bg-gray-700 rounded-full px-4 text-gray-100"
                            >
                                <span>
                                    Login <FontAwesomeIcon icon={faSignIn} />
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="-m-1.5 p-1.5 font-cairoPlay text-2xl md:text-4xl"
                        >
                            iExample.com
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to={'/'}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Services
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {services.map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Link
                                    to={'/portfolio'}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    to={'/pricing'}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Pricing
                                </Link>
                                <Link
                                    to={'/contact'}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </Link>
                                {user && (
                                    <Link
                                        to={'/profile'}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Profile
                                    </Link>
                                )}
                            </div>
                            <div className="py-6">
                                <Link
                                    to={'/free-trail'}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Free Trail
                                </Link>
                                {user ? (
                                    <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            <div className="flex items-center gap-x-3">
                                                <img
                                                    src={`${
                                                        user !== null &&
                                                        user?.profileImage
                                                    }`}
                                                    alt={`${
                                                        user !== null &&
                                                        user?.profileImage
                                                    }`}
                                                    className="h-6 w-6 rounded-full ring ring-offset-2"
                                                />
                                                <p>
                                                    {`${
                                                        user !== null &&
                                                        user?.name?.firstName
                                                    }`}{' '}
                                                    {`${
                                                        user !== null &&
                                                        user?.name?.lastName
                                                    }`}
                                                </p>
                                            </div>
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">
                                            <DisclosureButton
                                                as="a"
                                                href={'/dashboard'}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 space-x-2"
                                            >
                                                <span>Dashboard</span>
                                                <FontAwesomeIcon
                                                    icon={faFolder}
                                                />
                                            </DisclosureButton>
                                            <DisclosureButton
                                                as="a"
                                                href={'/account-settings'}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 space-x-2"
                                            >
                                                <span>Account Settings</span>
                                                <FontAwesomeIcon
                                                    icon={faGear}
                                                />
                                            </DisclosureButton>
                                            <DisclosureButton
                                                as="button"
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 space-x-2"
                                                onClick={handleSignOut}
                                            >
                                                <span>Sign Out</span>
                                                <FontAwesomeIcon
                                                    icon={faSignOut}
                                                />
                                            </DisclosureButton>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ) : (
                                    <Link
                                        to={'/login'}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        <span>
                                            Login{' '}
                                            <FontAwesomeIcon icon={faSignIn} />
                                        </span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
