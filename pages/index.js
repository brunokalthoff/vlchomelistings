import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "../components/home/Hero";
import ForSellersBuyers from "../components/home/ForSellersBuyers";
const Testimonials = dynamic(() => import("../components/home/Testimonials"), { ssr: false });
const Team = dynamic(() => import("../components/home/Team"), { ssr: false });
// import Team from '../components/home/Team';
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Van Leeuwen Real Estate Advisors</title>
        <meta
          name="description"
          content="Welcome to Van Leeuwen Real Estate Advisors Consultancy. Looking to buy a new home? Or Get a guaranteed offer on your home in 72 hours!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Testimonials />
      <ForSellersBuyers />
      <Team />
      <Contact />
    </>
  );
}
