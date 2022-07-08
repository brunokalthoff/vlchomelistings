import styles from '../../styles/sellers/Hero.module.css'

function Hero() {
    return (
        <div className={styles.container}>
            <h1>Sell your home.</h1>
            <div className={styles.heroSvg}></div>
        </div>
    );
}

export default Hero;