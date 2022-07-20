import styles from '../../styles/home/Hero.module.css'
import Link from 'next/link'

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.fancy}>
                <h1>Van Leeuwen Real Estate Advisors. <br />
                    <span> Get a guaranteed offer on your</span><span> home in 72 hours.</span>
                </h1>
                <div className={styles.buttons}>
                    <div className={styles.button}><Link href={'/sellers'}><a>Sell a home</a></Link></div>
                    <div className={styles.button}><Link href={'/buyers'}><a>Buy a home</a></Link></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;