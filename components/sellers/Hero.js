import styles from '../../styles/sellers/Hero.module.css'

function Hero() {
    return (
        <div className={styles.container}>
            <h1>For home sellers</h1>
            <div className={styles.heroSvg}></div>
            <h2>Request an Offer. <br />
                <span>Get a guaranteed offer on your home in 27 hours, and close it in as little as 21 days.</span>
            </h2>
        </div>
    );
}

export default Hero;