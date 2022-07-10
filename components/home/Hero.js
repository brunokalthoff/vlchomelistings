import styles from '../../styles/home/Hero.module.css'
import Link from 'next/link'

function Hero() {
    return (
        <div className={styles.container}>
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
    );
}

export default Hero;