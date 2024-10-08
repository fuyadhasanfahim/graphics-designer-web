import VisualsImage from '../../assets/img/Visuals-Form-Every-Customers-First-Impression.png'

export default function FirstImpression() {
    return (
        <div className="w-full max-w-7xl mx-auto mb-10">
            <div className="px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="space-y-5 w-full max-w-xl">
                    <h1 className="text-5xl font-semibold text-gray-700">
                        Visuals Form Every Customer’s First Impression
                    </h1>
                    <p className="text-gray-500 font-semibold">
                        It’s the sensory details of a website that affect the
                        customers’ first impression of a brand. In a physical
                        store, customers have the freedom to touch, try and test
                        products before buying them. For online stores, visitors
                        only have images to persuade their decision. <br />{' '}
                        <br /> Perfecting the look of products and images on
                        your website will help lessen the impact of sensory
                        absence and break down any conversion barriers that
                        might be preventing new customers from purchasing items
                        from your company. <br /> <br /> With Clipping Path
                        Studio’s expert graphic design team, we can create the
                        first impression you need to attract consumers and
                        convert them into loyal buyers.
                    </p>
                </div>

                <div className="mt-10">
                    <img src={VisualsImage} alt="" />
                </div>
            </div>
        </div>
    )
}
