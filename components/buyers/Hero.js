import styles from '../../styles/buyers/Hero.module.css'

function Hero() {
    return (
        <div className={styles.videoWrapper}>
            <div className={styles.video}>
                <video width="100%" height="100%" autoPlay muted loop>
                    <source src="/videos/buyers.webm" type="video/webm" />
                    <source src="/videos/buyers.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Hero;