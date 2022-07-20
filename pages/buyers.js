import Hero from "../components/buyers/Hero";
import dynamic from 'next/dynamic'
const ListingsLink = dynamic(() => import('../components/buyers/ListingsLink'), { ssr: false })
const Articles = dynamic(() => import('../components/buyers/Articles'), { ssr: false })
// import Articles from "../components/buyers/Articles";
import Calculators from "../components/buyers/Calculators";

function Buyers() {
    return (
        <>
            <Hero />
            <ListingsLink />
            <Articles />
            <Calculators />
        </>
    );
}

export default Buyers;