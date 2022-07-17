import Head from 'next/head'
import dynamic from 'next/dynamic'
import Hero from '../components/home/Hero'
import Video from '../components/home/video';
// import Difference from '../components/home/difference';
const Difference = dynamic(() => import('../components/home/difference'), { ssr: false })
import ForSellersBuyers from '../components/home/ForSellersBuyers';
// const ForSellersBuyers = dynamic(() => import('../components/home/ForSellersBuyers'), { ssr: false })
// import Testimonials from '../components/home/Testimonials';
const Testimonials = dynamic(() => import('../components/home/Testimonials'), { ssr: false })
// import Team from '../components/home/Team';
const Team = dynamic(() => import('../components/home/Team'), { ssr: false })
import Contact from '../components/home/Contact';


export default function Home() {
  return (
    <>
      <Head>
        <title>VanLuewen RE Advisors</title>
        <meta name="description" content="VanLuewen Real Estate Home Advisors Consultancy" />
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
