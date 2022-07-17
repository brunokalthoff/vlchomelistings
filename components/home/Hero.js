import styles from '../../styles/home/Hero.module.css'
import Link from 'next/link'

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.fancy}>
                <h1>VANLEEUWEN Real Estate Advisors. 
                     <span> Get a guaranteed offer on your <br /> home in 72 hours.</span>
                </h1>
                <div className={styles.buttons}>
                   <div className={styles.button}><Link href={'/sellers'}><a>Sell home</a></Link></div>
                   <div className={styles.button}><Link href={'/buyers'}><a>Buy home</a></Link></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;