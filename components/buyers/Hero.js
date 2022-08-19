import styles from '../../styles/buyers/Hero.module.css'

function Hero() {
    return (
        // <div className={styles.container}>
        //     <div className={styles.heady}>
        //       <div><h1>Buy your new home<span><br /></span></h1></div>
        //     </div>
        //     <div className={styles.heroSvg}></div>
        // </div>

                <div className={styles.videoWrapper}>
                    <div className={styles.video}>
        
                        <video width="100%" height="100%" autoPlay muted loop>
                            <source src="/videos/buyers.mp4" type="video/mp4" />
                            <source src="/videos/buyers.ogg" type="video/ogg" />
                            {/* <source src="/hero-video.webm" type="video/webm" /> */}
                            Your browser does not support the video tag.
                        </video>
        
                    </div>
                </div>
            );
        }

export default Hero;