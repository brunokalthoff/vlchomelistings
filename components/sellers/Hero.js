import styles from '../../styles/sellers/Hero.module.css'

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.heady}>
              <div><h1>Sell your home<span><br /></span></h1></div>
            </div>
            <div className={styles.heroSvg}></div>
        </div>
    );
}

export default Hero;