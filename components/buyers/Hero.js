import styles from '../../styles/buyers/Hero.module.css'

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.heady}>
              <div><h1>Find your new home.<span><br />Search our listings.</span></h1></div>
            </div>
            <div className={styles.heroSvg}></div>
        </div>
    );
}

export default Hero;