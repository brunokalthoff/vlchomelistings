import Hero from "../components/sellers/Hero";
import Offer from "../components/sellers/Offer";
import Faq from "../components/sellers/Faq";
import ListingsBack from "../components/sellers/ListingsBack";
import Head from 'next/head'

function Sellers() {
    return (
        <>
            <Head>
                <title>Sellers - Van Leeuwen Real Estate Advisors</title>
                <meta name="description" content="Looking to sell your home? Get a guaranteed offer in 72 hours!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <Offer />
            <Faq />
            <ListingsBack />
        </>
    );
}

export default Sellers;