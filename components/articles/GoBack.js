import styles from '../../styles/articles/ArticleParts.module.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router'


function GoBack() {
    const router = useRouter()
    return (
        <div className={styles.goBack} onClick={() => router.push("/buyers/#articles")}>
            <div><BsFillArrowLeftCircleFill /><p>Go back</p></div>
        </div>
    );
}

export default GoBack;