import styles from '../../styles/articles/ArticleParts.module.css'

function SubH1({subH1}) {
    return ( 
        <div className={styles.subH1}>
           <h5> {subH1}</h5>
        </div>
     );
}

export default SubH1;