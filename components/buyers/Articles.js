import { useRouter } from 'next/router';
import styles from '../../styles/buyers/Articles.module.css'
import { makeSlug } from '../helpers'

const articles = [
    {
        title: 'Your Credit Score Affects You',
        text: "How your credit score affects how much house you'll be able to buy",
        svg: styles.svg1,
    },
    {
        title: "Save on Interest",
        text: "How to save thousands of dollars in interest and pay your mortgage off faster",
        svg: styles.svg2
    },
    {
        title: "Avoid Money Pit",
        text: "Be on the lookout for these 6 warning signs that could mean expensive repairs...",
        svg: styles.svg3
    },
    {
        title: "5 Costly Mistakes",
        text: "Avoid these mistakes home buyers make",
        svg: styles.svg4
    }
]

function Articles() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <h2>Articles. <br /> <span>Learn how to be smart and avoid common pitfalls when buying a home.</span>
            </h2>
            <div className={styles.wrapper}>
                {articles.map((article, key) => {
                    return <div className={styles.article} key={key}>
                        <div className={`${article.svg} ${styles.svgs}`} />
                        <div>
                            <h4 onClick={() => router.push('/articles/' + makeSlug(article.title))}> {article.title}</h4>
                            <p> {article.text} </p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Articles;