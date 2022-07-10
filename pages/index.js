import Head from 'next/head'
import Hero from '../components/home/Hero'
import Video from '../components/home/video';
import Difference from '../components/home/difference';
import ForSellersBuyers from '../components/home/ForSellersBuyers';
import Testimonials from '../components/home/Testimonials';
import Team from '../components/home/Team';
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
      <Difference />
      <ForSellersBuyers />
      <Testimonials />
      <Team />
      <Contact />

    </>
  )
}
