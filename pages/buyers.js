import Hero from "../components/buyers/Hero";
import dynamic from 'next/dynamic'
const Listings = dynamic(() => import('../components/buyers/Listings'), { ssr: false })
const Articles = dynamic(() => import('../components/buyers/Articles'), { ssr: false })
// import Listings from "../components/buyers/Listings";
// import Articles from "../components/buyers/Articles";
import Calculators from "../components/buyers/Calculators";

function Buyers() {
    return (
        <>
            <Hero />
            <Listings />
            <Articles />
            <Calculators />
        </>
    );
}

export default Buyers;