import styles from '../../styles/articles/ArticleParts.module.css'

function Dateline({dateline}) {
    return ( 
        <div className={styles.dateline}>
            <p> {dateline} </p>
        </div>
     );
}

export default Dateline;