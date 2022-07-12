import Hero from "../components/sellers/Hero";
import dynamic from 'next/dynamic'
import Offer from "../components/sellers/Offer";
// const Offer = dynamic(() => import('../components/sellers/Offer'), { ssr: false })
// import Faq from "../components/sellers/Faq";
const Faq = dynamic(() => import('../components/sellers/Faq'), { ssr: false })

function Sellers() {
    return (
        <>
            <Hero />
            <Offer />
            <Faq />
        </>
    );
}

export default Sellers;