import { useState } from 'react';

const services = [
    { id: 1, name: 'eCommerce Product Photo Editing' },
    { id: 2, name: 'Background Removal Service' },
    { id: 3, name: 'Image Masking Service' },
    { id: 4, name: 'Ghost Mannequin Service' },
    { id: 5, name: 'Photo Retouching Service' },
    { id: 6, name: 'Shadow Creation Service' },
    { id: 7, name: 'Color Correction Service' },
];

export default function CreateOrder() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [fileFormat, setFileFormat] = useState('');
    const [background, setBackground] = useState('');
    const [path, setPath] = useState('');
    const [driveLink, setDriveLink] = useState('');
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { name, checked } = event.target;
        setSelectedServices((prevServices) =>
            checked
                ? [...prevServices, name]
                : prevServices.filter((service) => service !== name),
        );
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = {
            services: selectedServices,
            fileFormat,
            background,
            path,
            driveLink,
            message,
        };
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="mx-4 w-full max-w-6xl mt-0 lg-:mt-10">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10 md:px-10 bg-white rounded-3xl my-20"
            >
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
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
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
                                                name="fileFormat"
                                                value={fileFormat}
                                                onChange={(e) =>
                                                    setFileFormat(
                                                        e.target.value,
                                                    )
                                                }
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
                                            >
                                                <option value="">
                                                    Select File Format
                                                </option>
                                                <option value="JPEG">
                                                    JPEG
                                                </option>
                                                <option value="PNG">PNG</option>
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <select
                                                id="background"
                                                name="background"
                                                value={background}
                                                onChange={(e) =>
                                                    setBackground(
                                                        e.target.value,
                                                    )
                                                }
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
                                            >
                                                <option value="">
                                                    Background
                                                </option>
                                                <option value="Transparent">
                                                    Transparent
                                                </option>
                                                <option value="White">
                                                    White
                                                </option>
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <select
                                                id="path"
                                                name="path"
                                                value={path}
                                                onChange={(e) =>
                                                    setPath(e.target.value)
                                                }
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
                                            >
                                                <option value="">Path</option>
                                                <option value="Yes">
                                                    Yes, include path
                                                </option>
                                                <option value="No">
                                                    No path
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label
                                        htmlFor="file-upload"
                                        className="block text-2xl md:text-3xl font-medium leading-6 text-gray-900"
                                    >
                                        Enter drive link
                                    </label>

                                    <div className="sm:col-span-4 mt-6">
                                        <label
                                            htmlFor="drive-link"
                                            className="flex items-center gap-2 flex-wrap text-sm font-medium leading-6 text-gray-900"
                                        >
                                            <span className="bg-red-500 px-4 py-1 rounded-full text-white font-semibold shadow-md">
                                                Google Drive / Dropbox /
                                                OneDrive
                                            </span>
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-600 sm:max-w-md bg-white">
                                                <input
                                                    id="drive-link"
                                                    name="driveLink"
                                                    type="text"
                                                    placeholder="Enter your link"
                                                    value={driveLink}
                                                    onChange={(e) =>
                                                        setDriveLink(
                                                            e.target.value,
                                                        )
                                                    }
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
                        <div className="mt-6">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Message (optional)
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                />
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
                        className="rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
