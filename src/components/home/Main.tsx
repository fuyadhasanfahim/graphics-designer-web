import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import ClippingPathServiceImage from '../../assets/img/Clipping-Path-Service.png'

export default function Main() {
    return (
        <>
            <div className="w-full max-w-7xl mx-auto">
                <main className="backdrop-blur-3xl relative mt-5 lg:mt-10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="w-full lg:max-w-lg p-6 space-y-5 text-start">
                            <div className="space-y-3 text-gray-800">
                                <h1 className="text-5xl font-bold text-gray-700">
                                    Clipping Path Services You Can Trust
                                </h1>
                                <h3 className="text-2xl font-semibold text-green-700">
                                    High-quality, Affordable and Fast
                                </h3>
                                <p className="text-base font-medium text-gray-500">
                                    Searching for top-quality Photoshop services
                                    to make your images stand out? Our team of
                                    qualified professionals can make your
                                    pictures pop. We offer detailed image
                                    retouching services, fine-drawn clipping
                                    path services, precise color correction
                                    services and more.
                                </p>
                            </div>
                            <button className="bg-red-500 px-4 py-2 text-xl font-semibold text-gray-50">
                                <div className="space-x-2">
                                    <Link to={'/free-trail'}>
                                        Get started with trail
                                    </Link>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </button>
                        </div>

                        <div>
                            <img
                                src={ClippingPathServiceImage}
                                alt="Clipping-path-service-image"
                                className="px-6"
                            />
                        </div>
                    </div>
                </main>

                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 -my-14 md:-my-20">
                    <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center ring-1 ring-gray-200 shadow-md hover:scale-105 duration-300 ease-in">
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Certified Professionals
                            </dt>

                            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
                                150+
                            </dd>
                        </div>

                        <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center ring-1 ring-gray-200 shadow-md hover:scale-105 duration-300 ease-in">
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Sales Lift
                            </dt>

                            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
                                12%
                            </dd>
                        </div>

                        <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center ring-1 ring-gray-200 shadow-md hover:scale-105 duration-300 ease-in">
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Faster Delivery
                            </dt>

                            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
                                63%
                            </dd>
                        </div>

                        <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center ring-1 ring-gray-200 shadow-md hover:scale-105 duration-300 ease-in">
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Lower Cost
                            </dt>

                            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
                                40%
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}
