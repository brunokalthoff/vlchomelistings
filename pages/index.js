import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
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

      <div className={styles.heroContainer}>

        <div>
          <h1>VANLEEUWEN Real Estate Advisors. <br />
            <span>Get a guaranteed offer on your <br /> home in 72 hours.</span>
          </h1>

          <div className={styles.buttons}>
            <Link href={'/buyers'}><a>I&apos;m a Buyer</a></Link>
            <Link href={'/sellers'}><a>I&apos;m a Seller</a></Link>
          </div>

        </div>
      </div>

      <Video />
      <Difference />
      <ForSellersBuyers />
      <Testimonials />
      <Team />
      <Contact />
      
    </>
  )
}
