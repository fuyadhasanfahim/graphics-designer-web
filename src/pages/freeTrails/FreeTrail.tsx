import { PhotoIcon } from '@heroicons/react/24/solid';

const services = [
    { id: 1, name: 'eCommerce Product Photo Editing' },
    { id: 2, name: 'Background Removal Service' },
    { id: 3, name: 'Image Masking Service' },
    { id: 4, name: 'Ghost Mannequin Service' },
    { id: 5, name: 'Photo Retouching Service' },
    { id: 6, name: 'Shadow Creation Service' },
    { id: 7, name: 'Color Correction Service' },
];

export default function FreeTrail() {
    return (
        <div className="mx-4">
            <form className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10 md:px-10 bg-white rounded-3xl my-20">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 space-y-10">
                            <fieldset>
                                <legend className="text-2xl md:text-3xl font-semibold leading-6 text-gray-900">
                                    Services you need
                                </legend>
                                <h5 className="mt-1 text-base leading-6 text-gray-600">
                                    Select all the applicable services by
                                    checking the corresponding boxes below.
                                </h5>

                                <div className="mt-6 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 items-center">
                                        {services.map((service) => (
                                            <div
                                                key={service.id}
                                                className="relative flex gap-x-3 mb-2"
                                            >
                                                <div className="flex h-6 items-center">
                                                    <input
                                                        id={`service-${service.id}`}
                                                        name={service.name}
                                                        type="checkbox"
                                                        className="h-4 w-4 bg-white rounded border-gray-300 text-green-600 focus:ring-green-600"
                                                    />
                                                </div>
                                                <div className="text-sm leading-6">
                                                    <label
                                                        htmlFor={`service-${service.id}`}
                                                        className="font-medium text-gray-900"
                                                    >
                                                        {service.name}
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-span-3 mt-6">
                                    <legend className="text-2xl md:text-3xl font-semibold leading-6 text-gray-900">
                                        Output File Options
                                    </legend>
                                    <h5 className="mt-3 text-base leading-6 text-gray-600">
                                        Choose your desired output file.
                                    </h5>
                                    <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-5">
                                        <div className="mt-2">
                                            <select
                                                id="file-format"
                                                name="file-format"
                                                autoComplete="file-format"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
                                            >
                                                <option disabled selected>
                                                    Select File Format
                                                </option>
                                                <option>JPEG</option>
                                                <option>PNG</option>
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <select
                                                id="file-format"
                                                name="file-format"
                                                autoComplete="file-format"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
                                            >
                                                <option disabled selected>
                                                    Background
                                                </option>
                                                <option>Transparent</option>
                                                <option>White</option>
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <select
                                                id="file-format"
                                                name="file-format"
                                                autoComplete="file-format"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
                                            >
                                                <option disabled selected>
                                                    Path
                                                </option>
                                                <option>
                                                    Yes, include path
                                                </option>
                                                <option>No path</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label
                                        htmlFor="cover-photo"
                                        className="block text-2xl md:text-3xl font-medium leading-6 text-gray-900"
                                    >
                                        Upload Files
                                    </label>
                                    <div className="mt-4 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon
                                                aria-hidden="true"
                                                className="mx-auto h-12 w-12 text-gray-300"
                                            />
                                            <div className="mt-4 flex flex-wrap text-sm leading-6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md font-semibold text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">
                                                    or drag and drop
                                                </p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4 mt-6">
                                        <label
                                            htmlFor="drive-link"
                                            className="flex items-center gap-2 flex-wrap text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Or enter drive link:{' '}
                                            <span className="bg-red-500 px-4 py-1 rounded-full text-white font-semibold shadow-md">
                                                Google Drive / Dropbox /
                                                OneDrive
                                            </span>
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-600 sm:max-w-md bg-white">
                                                <input
                                                    id="drive-link"
                                                    name="drive-link"
                                                    type="text"
                                                    placeholder="Enter your link"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Your Info
                        </h2>

                        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-6 md:col-span-3">
                                <label
                                    htmlFor="full-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Full name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="full-name"
                                        name="full-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 bg-white"
                                    />
                                </div>
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 bg-white"
                                    />
                                </div>
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Phone
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="number"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 bg-white"
                                    />
                                </div>
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <label
                                    htmlFor="website"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Website
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="website"
                                        name="website"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 bg-white"
                                    />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Message
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
