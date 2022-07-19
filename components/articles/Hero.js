import styles from '../../styles/articles/ArticleParts.module.css'

function Hero({ svg }) {
    return (
        <div className={styles.hero}>
            <div className={`${styles.innerHero} ${svg}`}></div>
        </div>
    );
}

export default Hero;