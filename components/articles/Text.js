import styles from '../../styles/articles/ArticleParts.module.css'

function Text({text}) {
    return ( 
        <div className={styles.text}>
            <p> {text} </p>
        </div>
     );
}

export default Text;