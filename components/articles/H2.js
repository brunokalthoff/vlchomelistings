import styles from '../../styles/articles/ArticleParts.module.css'

function H2({h2}) {
    return ( 
        <div className={styles.h2}>
            <h3> {h2} </h3>
        </div>
     );
}

export default H2;