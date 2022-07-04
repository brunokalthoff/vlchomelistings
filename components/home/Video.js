import styles from '../../styles/home/Video.module.css'
import { IoPlay } from "react-icons/io5";

function Video() {
    return (
        <div className={styles.videoWrapper}>
            <div className={styles.video}>
                <IoPlay />
            </div>
        </div>
    );
}

export default Video;