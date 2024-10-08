import { faFolder, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'

interface ProverInterface {
    image: string
    signOut: () => void
}

export default function Prover({ image, signOut }: ProverInterface) {
    return (
        <div className="text-center">
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 py-1.5 px-3 text-sm/6 font-semibold text-gray-800 focus:outline-none">
                    <img
                        src={image}
                        alt={image}
                        className="h-8 w-8 rounded-full"
                    />
                    <ChevronDownIcon className="size-4 fill-gray-500" />
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 origin-top-right rounded-xl border border-gray-200 bg-white p-1 text-sm/6 text-gray-800 transition duration-100 ease-out backdrop-blur-md [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    <MenuItem>
                        <a
                            href={'/dashboard'}
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-gray-800 hover:bg-gray-100 space-x-2"
                        >
                            Dashboard
                            <FontAwesomeIcon icon={faFolder} />
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            to={'/account-settings'}
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-gray-800 hover:bg-gray-100 space-x-2"
                        >
                            Account Settings
                            <FontAwesomeIcon icon={faGear} />
                        </Link>
                    </MenuItem>
                    <div className="my-1 h-px bg-gray-200" />
                    <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-gray-800 hover:bg-gray-100 space-x-2"
                            onClick={signOut}
                        >
                            <span>Sign Out</span>
                            <FontAwesomeIcon icon={faSignOut} />
                        </button>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    )
}
