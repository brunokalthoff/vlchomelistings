import styles from '../../styles/home/Video.module.css'
import { BsFillPlayFill,BsFillPauseFill } from "react-icons/bs";
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
                <video ref={playerRef} onDoubleClick={e=>e.target.requestFullscreen()} width="100%" height="100%">
                    <source src="/hero-video.mp4" type="video/mp4" />
                    <source src="/hero-video.ogg" type="video/ogg" />
                    <source src="/hero-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <motion.div className={styles.playPause}>
                <div>{playing === 'init' && <BsFillPlayFill />}</div>
                    {playing === false && <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1 }}><BsFillPauseFill /></motion.div>}
                    {playing === true && <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1 }}><BsFillPlayFill /></motion.div>}
                </motion.div>
            </div>
        </div>
    );
}

export default Video;

