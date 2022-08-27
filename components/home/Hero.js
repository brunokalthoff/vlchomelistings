import styles from '../../styles/home/Hero.module.css'
import { useRef, useEffect } from 'react';

function Hero() {
    const videoOne = useRef();
    useEffect(() => {
        videoOne.current.playbackRate = 0.9;
        videoOne.current.play();
    }, []);

    return (
        <div className={styles.videoWrapper}>
            <div className={styles.video}>

                <video poster="/videos/missionvision-placeholder.jpg" ref={videoOne} width="100%" height="100%" muted loop>
                    <source src="/videos/missionvision.webm" type="video/webm" />
                    <source src="/videos/missionvision.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </div>
    );
}

export default Hero;