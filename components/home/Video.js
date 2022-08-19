import styles from '../../styles/home/Video.module.css'

function Video() {

    return (
        <div className={styles.videoWrapper}>
            <div className={styles.video}>

                <video width="100%" height="100%" autoPlay muted loop>
                    <source src="/videos/mission.mp4" type="video/mp4" />
                    <source src="/videos/mission.ogg" type="video/ogg" />
                    {/* <source src="/hero-video.webm" type="video/webm" /> */}
                    Your browser does not support the video tag.
                </video>

                <video style={{marginTop: '4rem'}} width="100%" height="100%" autoPlay muted loop>
                    <source src="/videos/vision.mp4" type="video/mp4" />
                    <source src="/videos/vision.ogg" type="video/ogg" />
                    {/* <source src="/hero-video.webm" type="video/webm" /> */}
                    Your browser does not support the video tag.
                </video>
{/* 
                <video width="100%" height="100%" autoPlay muted loop>
                    <source src="/videos/sellers-link.mp4" type="video/mp4" />
                    <source src="/videos/sellers-link.ogg" type="video/ogg" />

                    Your browser does not support the video tag.
                </video>

                <video width="100%" height="100%" autoPlay muted loop>
                    <source src="/videos/buyers-link.mp4" type="video/mp4" />
                    <source src="/videos/sellers-link.ogg" type="video/ogg" />
          
                    Your browser does not support the video tag.
                </video> */}

            </div>
        </div>
    );
}

export default Video;









// import { BsFillPlayFill,BsFillPauseFill } from "react-icons/bs";
// import { useRef, useState, useEffect } from 'react';
// import { motion } from 'framer-motion';


// const playerRef = useRef();
// const [playing, setPlaying] = useState('init');

// useEffect(() => {
//     if (playing !== 'init') {
//         playing === true ? playerRef.current.play() : playerRef.current.pause();
//     }
// }, [playing]);

// const handleClick = () => {
//     setPlaying(prev => {
//         if (playing === 'init') {
//             return true
//         }
//         return !prev
//     })
// }



// <div className={styles.videoWrapper}>
// <div className={styles.video} onClick={handleClick}>
//     <video ref={playerRef} onDoubleClick={e=>e.target.requestFullscreen()} width="100%" height="100%">
//         <source src="/hero-video.mp4" type="video/mp4" />
//         <source src="/hero-video.ogg" type="video/ogg" />
//         <source src="/hero-video.webm" type="video/webm" />
//         Your browser does not support the video tag.
//     </video>
//     <motion.div className={styles.playPause}>
//     <div>{playing === 'init' && <BsFillPlayFill />}</div>
//         {playing === false && <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1 }}><BsFillPauseFill /></motion.div>}
//         {playing === true && <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1 }}><BsFillPlayFill /></motion.div>}
//     </motion.div>
// </div>
// </div>