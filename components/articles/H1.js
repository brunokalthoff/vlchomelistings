import styles from '../../styles/articles/ArticleParts.module.css'

function H1({h1}) {
    return ( 
        <div className={styles.h1}>
            <h2> {h1} </h2>
        </div>
     );
}

export default H1;