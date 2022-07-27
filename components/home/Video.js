import styles from '../../styles/home/Video.module.css'
import { IoPlay, IoPause } from "react-icons/io5";
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';


function Video() {
    const playerRef = useRef();
    const [playing, setPlaying] = useState('init');

    useEffect(() => {
        if (playing !== 'init') {

            playing === true ? playerRef.current.play() : playerRef.current.pause();

        }
    }, [playing]);

    useEffect(() => {
        if (playerRef.current.currentTime) console.log(playerRef.current.currentTime);
    }, [playing]);

    const handleClick = () => {
        setPlaying(prev => {
            if (playing === 'init') {
                return true
            }
            return !prev
        })
    }

    return (
        <div className={styles.videoWrapper}>
            <div className={styles.video} onClick={handleClick}>
                <video ref={playerRef} width="100%" height="100%">
                    <source src="/hero-video.mp4" type="video/mp4" />
                    <source src="/hero-video.ogg" type="video/ogg" />
                    <source src="/hero-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <motion.div className={styles.playPause}>
                    {playing === 'init' && <IoPlay />}
                    {playing === true && <motion.span initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1 }}><IoPause /></motion.span>}
                    {!playing && <motion.span initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1 }}><IoPlay /></motion.span>}
                </motion.div>
            </div>
        </div>
    );
}

export default Video;

