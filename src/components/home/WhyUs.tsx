import { Link } from 'react-router-dom'
import WhyUsImage from '../../assets/img/Quality-Images-Ready-To-Use-.png'

export default function WhyUs() {
    return (
        <>
            <div className="text-center w-full max-w-4xl mx-auto space-y-5 mb-10">
                <h1 className="text-4xl font-semibold text-gray-700">
                    Why Utilize Our Clipping Path Service?
                </h1>
                <p className="text-gray-600 font-semibold">
                    Quality clipping path work requires mastery. Any level of
                    editing requires clipping and, without it, you may struggle
                    to achieve perfect results. Here are some reasons why photo
                    clipping is essential to online business success:
                </p>
            </div>

            <div className="w-full max-w-7xl mx-auto mb-10">
                <div className="px-6 flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="mt-10">
                        <img src={WhyUsImage} alt="" />
                    </div>

                    <div className="space-y-5 w-full max-w-xl">
                        <h1 className="text-5xl font-semibold text-gray-700">
                            Visuals Form Every Customer’s First Impression
                        </h1>
                        <p className="text-gray-500 font-semibold">
                            It’s the sensory details of a website that affect
                            the customers’ first impression of a brand. In a
                            physical store, customers have the freedom to touch,
                            try and test products before buying them. For online
                            stores, visitors only have images to persuade their
                            decision. <br /> <br /> Perfecting the look of
                            products and images on your website will help lessen
                            the impact of sensory absence and break down any
                            conversion barriers that might be preventing new
                            customers from purchasing items from your company.{' '}
                            <br /> <br /> With Clipping Path Studio’s expert
                            graphic design team, we can create the first
                            impression you need to attract consumers and convert
                            them into loyal buyers.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto mb-10">
                <div className="px-6 flex flex-col md:flex-row-reverse justify-between items-center gap-5">
                    <div className="mt-10">
                        <img src={WhyUsImage} alt="" />
                    </div>

                    <div className="space-y-5 w-full max-w-xl">
                        <h1 className="text-5xl font-semibold text-gray-700">
                            Visuals Form Every Customer’s First Impression
                        </h1>
                        <p className="text-gray-500 font-semibold">
                            It’s the sensory details of a website that affect
                            the customers’ first impression of a brand. In a
                            physical store, customers have the freedom to touch,
                            try and test products before buying them. For online
                            stores, visitors only have images to persuade their
                            decision. <br /> <br /> Perfecting the look of
                            products and images on your website will help lessen
                            the impact of sensory absence and break down any
                            conversion barriers that might be preventing new
                            customers from purchasing items from your company.{' '}
                            <br /> <br /> With Clipping Path Studio’s expert
                            graphic design team, we can create the first
                            impression you need to attract consumers and convert
                            them into loyal buyers.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto mb-10">
                <div className="px-6 flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="mt-10">
                        <img src={WhyUsImage} alt="" />
                    </div>

                    <div className="space-y-5 w-full max-w-xl">
                        <h1 className="text-5xl font-semibold text-gray-700">
                            Visuals Form Every Customer’s First Impression
                        </h1>
                        <p className="text-gray-500 font-semibold">
                            It’s the sensory details of a website that affect
                            the customers’ first impression of a brand. In a
                            physical store, customers have the freedom to touch,
                            try and test products before buying them. For online
                            stores, visitors only have images to persuade their
                            decision. <br /> <br /> Perfecting the look of
                            products and images on your website will help lessen
                            the impact of sensory absence and break down any
                            conversion barriers that might be preventing new
                            customers from purchasing items from your company.{' '}
                            <br /> <br /> With Clipping Path Studio’s expert
                            graphic design team, we can create the first
                            impression you need to attract consumers and convert
                            them into loyal buyers.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full flex flex-wrap items-center justify-center gap-10 mb-10">
                <button className="bg-green-500 px-10 py-2 text-xl font-semibold text-gray-100">
                    <Link to={'/free-trail'}>Get Trail</Link>
                </button>

                <button className="bg-green-500 px-10 py-2 text-xl font-semibold text-gray-100">
                    <Link to={'/portfolio'}>See Portfolio</Link>
                </button>
            </div>
        </>
    )
}
