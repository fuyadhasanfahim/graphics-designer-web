import Brands from '../../components/home/Brands'
import FAQ from '../../components/home/FAQ'
import FirstImpression from '../../components/home/FirstImpression'
import Main from '../../components/home/Main'
import Questions from '../../components/home/Questions'
import Testimonials from '../../components/home/Testimonials'
import WhyUs from '../../components/home/WhyUs'

export default function HomePage() {
    return (
        <>
            <Main />
            <FAQ />
            <Brands />
            <FirstImpression />
            <Testimonials />
            <WhyUs />
            <Questions />
        </>
    )
}
