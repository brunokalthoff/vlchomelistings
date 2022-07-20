import styles from '../../styles/home/Video.module.css'
import { IoPlay } from "react-icons/io5";

function Video() {
    return (
        <div title='Coming soon!' className={styles.videoWrapper}>
            <div className={styles.video}>
                <IoPlay />
            </div>
            <h3>Video coming soon</h3>
        </div>
    );
}

export default Video;