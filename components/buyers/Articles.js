import styles from '../../styles/buyers/Articles.module.css'

const articles = [
    {
        title: 'Your Credit Score Affects You',
        text: "How your credit score affects how much house you'll be able to buy",
        svg: 'credit-score-svg',
    },
    {
        title: "Save on Interest",
        text: "How to save thousands of dollars in interest and pay your mortgage off faster",
        svg: "save-interest-svg"
    },
    {
        title: "Avoid Money Pit",
        text: "Be on the lookout for these 6 warning signs that could mean expensive repairs...",
        svg: "avoid-pit-svg"
    },
    {
        title: "5 Costly Mistakes",
        text: "Avoid these mistakes home buyers make",
        svg: "costly-mistakes-svg"
    }
]

function Articles() {
    return (
        <div className={styles.container}>
            <h2>Articles. <br /> <span>Learn how to be smart and avoid common pitfalls when buying a home.</span>
            </h2>
            <div className={styles.wrapper}>
                {articles.map((article, key) => {
                    return <div className={styles.article} key={key}>
                        <div className={`${styles.articleSvg} ${styles.articleSvg}${key}`}></div>
                        <div>
                            <h4> {article.title}</h4>
                            <p> {article.text} </p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Articles;