import Head from 'next/head'
import dynamic from 'next/dynamic'
import Hero from '../components/home/Hero'
import Video from '../components/home/Video';
import Difference from '../components/home/difference';
// const Difference = dynamic(() => import('../components/home/Difference'), { ssr: false })
import ForSellersBuyers from '../components/home/ForSellersBuyers';
// const ForSellersBuyers = dynamic(() => import('../components/home/ForSellersBuyers'), { ssr: false })
// import Testimonials from '../components/home/Testimonials';
const Testimonials = dynamic(() => import('../components/home/Testimonials'), { ssr: false })
import Team from '../components/home/Team';
// const Team = dynamic(() => import('../components/home/Team'), { ssr: false })
import Contact from '../components/home/Contact';


export default function Home() {
  return (
    <>
      <Head>
        <title>Van Leeuwen Real Estate Advisors</title>
        <meta name="description" content="Welcome to Van Leeuwen Real Estate Advisors Consultancy. Looking to buy a new home? Or Get a guaranteed offer on your home in 72 hours!" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Hero />
      <Video />
      <ForSellersBuyers />
      <Testimonials />
      <Difference />
      <Team />
      <Contact />

    </>
  )
}
