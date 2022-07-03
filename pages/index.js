import Head from 'next/head'
import "@fontsource/poppins";
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { IoPlay } from "react-icons/io5";
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

      <div className={styles.videoWrapper}>
        <div className={styles.video}>
         <IoPlay />
        </div>
      </div>

      <div className={styles.different}> <h2>What makes Van Leeuwen Real Estate Advisors different? <br />
 <span>Our experience, knowledge and communication skills allow us to provide a level of service that is unmatched in our industry.</span>
</h2> </div>

    </>
  )
}
