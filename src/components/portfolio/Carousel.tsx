import { useEffect } from 'react'

export default function CarouselSlider() {
    useEffect(() => {
        const interval = setInterval(() => {
            const carousel = document.getElementById('carouselExampleCaptions')
            if (carousel) {
                const activeItem = carousel.querySelector(
                    '[data-te-carousel-item].block',
                ) as HTMLElement | null // Assert type for clarity
                let nextItem =
                    activeItem?.nextElementSibling as HTMLElement | null

                if (!nextItem) {
                    nextItem = carousel.querySelector(
                        '[data-te-carousel-item]:first-child',
                    ) as HTMLElement | null
                }

                if (activeItem) {
                    // Check if activeItem is not null
                    activeItem.classList.remove('block')
                    activeItem.classList.add('hidden')
                }
                if (nextItem) {
                    // Check if nextItem is not null
                    nextItem.classList.add('block')
                    nextItem.classList.remove('hidden')
                }
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const handlePrev = () => {
        const carousel = document.getElementById('carouselExampleCaptions')
        if (carousel) {
            const activeItem = carousel.querySelector(
                '[data-te-carousel-item].block',
            ) as HTMLElement | null
            let prevItem =
                activeItem?.previousElementSibling as HTMLElement | null

            if (!prevItem) {
                prevItem = carousel.querySelector(
                    '[data-te-carousel-item]:last-child',
                ) as HTMLElement | null
            }

            if (activeItem) {
                // Check if activeItem is not null
                activeItem.classList.remove('block')
                activeItem.classList.add('hidden')
            }
            if (prevItem) {
                // Check if prevItem is not null
                prevItem.classList.add('block')
                prevItem.classList.remove('hidden')
            }
        }
    }

    const handleNext = () => {
        const carousel = document.getElementById('carouselExampleCaptions')
        if (carousel) {
            const activeItem = carousel.querySelector(
                '[data-te-carousel-item].block',
            ) as HTMLElement | null
            let nextItem = activeItem?.nextElementSibling as HTMLElement | null

            if (!nextItem) {
                nextItem = carousel.querySelector(
                    '[data-te-carousel-item]:first-child',
                ) as HTMLElement | null
            }

            if (activeItem) {
                // Check if activeItem is not null
                activeItem.classList.remove('block')
                activeItem.classList.add('hidden')
            }
            if (nextItem) {
                // Check if nextItem is not null
                nextItem.classList.add('block')
                nextItem.classList.remove('hidden')
            }
        }
    }

    return (
        <div
            id="carouselExampleCaptions"
            className="relative"
            data-te-carousel-init
            data-te-carousel-slide
        >
            <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
                <button
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide-to="0"
                    className="mx-[3px] h-[3px] w-[30px] flex-initial bg-white opacity-50"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide-to="1"
                    className="mx-[3px] h-[3px] w-[30px] flex-initial bg-white opacity-50"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide-to="2"
                    className="mx-[3px] h-[3px] w-[30px] flex-initial bg-white opacity-50"
                    aria-label="Slide 3"
                ></button>
            </div>

            <div className="relative w-full overflow-hidden">
                <div
                    className="relative float-left w-full block"
                    data-te-carousel-item
                >
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                        className="block w-full"
                        alt="Slide 1"
                    />
                    <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">First slide label</h5>
                        <p>Some placeholder content for the first slide.</p>
                    </div>
                </div>
                <div
                    className="relative float-left hidden w-full"
                    data-te-carousel-item
                >
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                        className="block w-full"
                        alt="Slide 2"
                    />
                    <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Second slide label</h5>
                        <p>Some placeholder content for the second slide.</p>
                    </div>
                </div>
                <div
                    className="relative float-left hidden w-full"
                    data-te-carousel-item
                >
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                        className="block w-full"
                        alt="Slide 3"
                    />
                    <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>Some placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>

            <button
                className="absolute bottom-0 left-0 top-0 z-[1] w-[15%] text-white opacity-50 hover:opacity-90"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="prev"
                onClick={handlePrev}
            >
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </span>
            </button>
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] w-[15%] text-white opacity-50 hover:opacity-90"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="next"
                onClick={handleNext}
            >
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </span>
            </button>
        </div>
    )
}
