import Hero from "../components/buyers/Hero";
import Listings from "../components/buyers/Listings";
import Articles from "../components/buyers/Articles";
import Calculators from "../components/buyers/Calculators";
import Head from "next/head";

function Buyers() {
    return (
        <>
            <Head>
                <title>Buyers - Van Leeuwen Real Estate Advisors</title>
                <meta name="description" content="Looking to buy a new home? Search our listings!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <Listings />
            <Articles />
            <Calculators />
        </>
    );
}

export default Buyers;