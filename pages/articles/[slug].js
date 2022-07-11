import { useRouter } from "next/router";
import { makeSlug } from '../../components/helpers'
import styles from '../../styles/articles/ArticleParts.module.css'
import H1 from "../../components/articles/H1";
import SubH1 from "../../components/articles/SubH1";
import H2 from "../../components/articles/H2";
import Dateline from "../../components/articles/Dateline";
import Text from "../../components/articles/Text";
import Hero from "../../components/articles/Hero";
import GoBack from "../../components/articles/GoBack";
import Articles from '../../components/buyers/Articles'

const articles = [
    {
        title: "How Your Credit Score Affects How Much House You'll Be Able To Buy",
        titleSub: 'Your credit score is now the most important factor in determining how much house you can buy, so if you  are in the market for a new home, you need to understand how it affects you.',
        text: <>In order to make it easy for mortgage companies to determine the risk of lending to you, they are using a system called credit scoring (also called &quot;FICO&quot; scores).<br />
            When lenders look at your credit report, they can instantly see how much debt you have, how reliable you are with bill payments, and if you&apos;ve had any bankruptcies within the last several years.<br />
            With your credit report, lenders get a &quot;credit score&quot; which takes all of this information and boils it down to a number between 300 and 900. The higher the number, the less of a credit risk you are seen to be, and this is how lenders decide which types of loans you will be eligible for.<br />
            As with all new things, there is controversy over credit scores.<br />
            To be elligible for some types of loans, you require a minimum credit score without any exceptions. And credit scores fluctuate over time. In fact, the mere act of applying for credit can lower your credit score.</>,
        title2: <>How to make sure you have the highest credit score possible</>,
        titleSub2: <>If you learn to play by the rules of the lenders&apos; game, you can get the best credit score possible, which improves the odds that you can get the home of your dreams.</>,
        text2: <>&#8232;To maximize your credit score, you should avoid applying for any new credit cards or consumer loans.<br />
            Don&quot;t go to the discount store and take them up on the &quot;No interest, no payments for one year&quot; offer -- and avoid financing a car!<br />
            After you buy your home and get your mortgage you can do all of these things, but before then it&quot;s a bad idea. Buying things on credit hurts your credit score, and leaves less money for your downpayment.<br />
            Lenders also look at this figure to decide how much money they will lend you, and how much interest they will charge you on the loan.<br />
            That&quot;s why it&quot;s best to wait until after you&quot;ve bought your home to go shopping for furniture and appliances. There is also another reason to wait.<br />
            Once you&quot;ve bought your home, you can get a loan for up to 100% of your home&quot;s value to buy anything you want.</>,
        svg: '',
    },
    {
        title: "Save on Interest",
        text: "How to save thousands of dollars in interest and pay your mortgage off faster",
        svg: ''
    },
    {
        title: "Avoid Money Pit",
        text: "Be on the lookout for these 6 warning signs that could mean expensive repairs...",
        svg: ''
    },
    {
        title: "5 Costly Mistakes",
        text: "Avoid these mistakes home buyers make",
        svg: ''
    }
]



function Article() {

    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <Hero />
            <GoBack />

            <div className={styles.articleWrapper}>

                {slug === makeSlug(articles[0].title) && (
                    <>
                        <Dateline dateline={"Article"} />
                        <H1 h1={articles[0].title} />
                        <SubH1 subH1={articles[0].titleSub} />

                        <Text text={articles[0].text} />

                    </>
                )
                }
                {/* <H2></H2> */}
            </div>
            <GoBack />
            <Articles />
        </>
    );
}

export default Article;