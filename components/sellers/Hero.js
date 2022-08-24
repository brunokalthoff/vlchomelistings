import styles from '../../styles/sellers/Hero.module.css'

function Hero() {
    return (
        <div className={styles.videoWrapper}>
            <div className={styles.video}>
                <video width="100%" height="100%" autoPlay muted loop>
                    <source src="/videos/sellers.webm" type="video/webm" />
                    <source src="/videos/sellers.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

    );
}

export default Hero;