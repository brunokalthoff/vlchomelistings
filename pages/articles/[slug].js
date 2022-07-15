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
        slug: "your-credit-score-affects-you",
        dateline: "Credit Score",
        title: "How Your Credit Score Affects How Much House You'll Be Able To Buy",
        titleSub: 'Your credit score is now the most important factor in determining how much house you can buy, so if you  are in the market for a new home, you need to understand how it affects you.',
        text: <>In order to make it easy for mortgage companies to determine the risk of lending to you, they are using a system called credit scoring (also called &quot;FICO&quot; scores).<br /><br />
            When lenders look at your credit report, they can instantly see how much debt you have, how reliable you are with bill payments, and if you&apos;ve had any bankruptcies within the last several years.<br /><br />
            With your credit report, lenders get a &quot;credit score&quot; which takes all of this information and boils it down to a number between 300 and 900. The higher the number, the less of a credit risk you are seen to be, and this is how lenders decide which types of loans you will be eligible for.<br /><br />
            As with all new things, there is controversy over credit scores.<br /><br />
            To be elligible for some types of loans, you require a minimum credit score without any exceptions. And credit scores fluctuate over time. In fact, the mere act of applying for credit can lower your credit score.</>,
        dateline2: "Credit Score",
        title2: <>How to make sure you have the highest credit score possible</>,
        titleSub2: <>If you learn to play by the rules of the lenders&apos; game, you can get the best credit score possible, which improves the odds that you can get the home of your dreams.</>,
        text2: <>&#8232;To maximize your credit score, you should avoid applying for any new credit cards or consumer loans.<br />
            Don&quot;t go to the discount store and take them up on the &quot;No interest, no payments for one year&quot; offer - and avoid financing a car!<br />
            After you buy your home and get your mortgage you can do all of these things, but before then it&quot;s a bad idea. Buying things on credit hurts your credit score, and leaves less money for your downpayment.<br />
            Lenders also look at this figure to decide how much money they will lend you, and how much interest they will charge you on the loan.<br />
            That&quot;s why it&quot;s best to wait until after you&quot;ve bought your home to go shopping for furniture and appliances. There is also another reason to wait.<br />
            Once you&quot;ve bought your home, you can get a loan for up to 100% of your home&quot;s value to buy anything you want.</>,
        svg: '',
    },
    {
        slug: "save-on-interest",
        dateline: "Interest",
        title: "How to save thousands of dollars in interest and pay your mortgage off faster",
        titleSub: "There are a few easy ways to make extra principle payments that can save you a ton of money in interest expenses and get you mortgage-free sooner than you thought possible. Here are a few simple strategies you can use.",
        titleH2: '1. ROUND YOUR MONTHLY PAYMENT UP',
        text: <>The results of this simple strategy can save you a fortune and drastically reduce the length of your mortgage.<br />
            As an example, if your monthly mortgage payments were $734 dollars a month, but you rounded it up to $800 per month, you would save more than $48,000 in interest payments, and reduce the length of your mortgage by 7.5 years!</>,
        titleH22: <>2. MAKE ONE TIME PRE-PAYMENTS USING YOUR INCOME TAX REFUND</>,
        text2: <>This is an easy way to save money and shorten your mortgage. For example, if you have a $100,000 mortgage, and you have a $1000 tax refund this year, you take apply that refund to your mortgage. Over time, this will save you more than $8600 and shave 1 year and 1 month off your mortgage! That&apos;s another amazing result from a simple strategy.</>,
        titleH23: <>3. CHOOSE A 15 YEAR MORTGAGE</>,
        text3: <>If you can afford it, you are far better off getting a 15 year mortgage instead of 30. It won&apos;t cost you much more, and the interest savings are truly incredible.<br />
            If you have a mortgage of $100,000 at 8% interest over 15 years, your monthly payment would be about $200 more, but you&apos;d end up saving $92,083 in interest over the life of your mortgage!<br />
            Using these strategies is the easiest way to reduce your interest expenses and shorten your mortgage period.</>,
        svg: ''
    },
    {
        slug: "avoid-money-pit",
        title: "How to Avoid a Money Pit: Be on the Lookout for these 6 Warning Signs That Could Mean Expensive Repairs...",
        titleSub: "Many people think that serious defects in a home are easy to spot, but the truth is, often the most serious and costly problems can only be detected upon very close inspection. When you are considering buying a home, look for the following six telltale signs of serious problems...",
        titleH2: "1. ROOF",
        text: "Leaks are the most common problem with roofs, and are tough to detect from outside. However, from inside an attic, you can often see water marks where there is a leak.",
        titleH22: <>2. PLUMBING SYSTEM</>,
        text2: <>Make sure you are confident that both water systems: the one that brings fresh water in and the one that takes sewage out are functioning well before signing on the dotted line.</>,
        titleH23: <>3. ELECTRICAL SYSTEMS</>,
        text3: <>Before you agree to buy you should make sure that you can run all of the appliances you want to and even power tools at the same time without having a power failure. You also want to make sure that the electrical system is safe and does not present a fire hazard.</>,
        titleH24: <>4. HEATING AND COOLING SYSTEMS</>,
        text4: <>Be sure to thoroughly inspect the heating and air conditioning systems in any home you are considering purchasing.</>,
        titleH25: <>5. BAD PAINT AND SIGNS OF ROTTING</>,
        text5: <>The paint inside and outside the house can reveal a lot about the condition of the underlying material. Check several places on several walls, using your eyes and a screwdriver for poking.</>,
        titleH26: <></>,
        text6: <></>,
        titleH27: <>6. CRACKS AND OTHER IMPORTANT SIGNS</>,
        text7: <>Cracks in walls, doors not closing properly and uneven floors can all be signs that there is a problem with the foundation. If the foundation is not strong, the entire house could literally collapse, so you should carefully check for these signs. A bad foundation may not mean imminent disaster, but it could be used to bargain for a lower sale price, or you could ask to have the owner repair it before the sale.</>,
        svg: ''
    },
    {
        slug: "5-costly-mistakes",
        title: "5 Costly Mistakes Home Buyers Make",
        titleH2: "MISTAKE #1 NOT KNOWING WHAT THEY CAN AFFORD BEFORE MAKING AN OFFER",
        text: <>The best way to avoid this is to get pre-approved for a mortgage so you know exactly how much you can afford. Usually pre-approvals are free.</>,
        titleH22: <>MISTAKE #2 NOT KNOWING WHO THE AGENT REPRESENTS</>,
        text2: <>Unless an agent is working as your buyer representative, they represent the seller. Many people don&apos;t realize this.</>,
        titleH23: <>MISTAKE #3 CHOOSING THE WRONG MORTGAGE</>,
        text3: <>A bad mortgage can cost you thousands in taxes and interest. Consult an accountant before you choose your mortgage.</>,
        titleH24: <>MISTAKE #4 NOT FINDING PROBLEMS WITH THE HOME BEFORE BUYING IT</>,
        text4: <>You should always have a professional inspector look at the home before buying it, otherwise you could be looking at huge repair costs later on. Read this guide to avoiding a money pit.</>,
        titleH25: <>MISTAKE #5 NOT UNDERSTANDING HOW THEIR CREDIT CAN IMPACT THEIR ABILITY TO PURCHASE OR REFINANCE A HOME</>,
        text5: <>Get a mortgage professional to help you go over and prepare your credit file before you buy a home.</>,
        svg: ''
    }
]



function Article() {

    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className={styles.container}>
            <Hero />
            <GoBack />

            <div className={styles.articleWrapper}>

                {slug === articles[0].slug && (
                    <>
                        <Dateline dateline={articles[0].dateline} />
                        <H1 h1={articles[0].title} />
                        <SubH1 subH1={articles[0].titleSub} />
                        <Text text={articles[0].text} />
                        <div><br /><br /><br /><br /></div>
                        <Dateline dateline={articles[0].dateline2} />
                        <H1 h1={articles[0].title2} />
                        <SubH1 subH1={articles[0].titleSub2} />
                        <Text text={articles[0].text2} />
                    </>
                )
                }

                {slug === articles[1].slug && (
                    <>
                        <Dateline dateline={articles[1].dateline} />
                        <H1 h1={articles[1].title} />
                        <SubH1 subH1={articles[1].titleSub} />
                        <H2 h2={articles[1].titleH2} />
                        <Text text={articles[1].text} />
                        <H2 h2={articles[1].titleH22} />
                        <Text text={articles[1].text2} />
                        <H2 h2={articles[1].titleH23} />
                        <Text text={articles[1].text3} />
                    </>
                )
                }

                {slug === articles[2].slug && (
                    <>
                        <Dateline dateline={articles[2].dateline} />
                        <H1 h1={articles[2].title} />
                        <SubH1 subH1={articles[2].titleSub} />
                        <H2 h2={articles[2].titleH2} />
                        <Text text={articles[2].text} />
                        <H2 h2={articles[2].titleH22} />
                        <Text text={articles[2].text2} />
                        <H2 h2={articles[2].titleH23} />
                        <Text text={articles[2].text3} />
                        <H2 h2={articles[2].titleH24} />
                        <Text text={articles[2].text4} />
                        <H2 h2={articles[2].titleH25} />
                        <Text text={articles[2].text5} />
                        <H2 h2={articles[2].titleH26} />
                        <Text text={articles[2].text6} />
                        <H2 h2={articles[2].titleH27} />
                        <Text text={articles[2].text7} />
                    </>
                )
                }


                {slug === articles[3].slug && (
                    <>
                        <Dateline dateline={articles[3].dateline} />
                        <H1 h1={articles[3].title} />
                        <SubH1 subH1={articles[3].titleSub} />
                        <H2 h2={articles[3].titleH2} />
                        <Text text={articles[3].text} />
                        <H2 h2={articles[3].titleH22} />
                        <Text text={articles[3].text2} />
                        <H2 h2={articles[3].titleH23} />
                        <Text text={articles[3].text3} />
                        <H2 h2={articles[3].titleH24} />
                        <Text text={articles[3].text4} />
                        <H2 h2={articles[3].titleH25} />
                        <Text text={articles[3].text5} />
                    </>
                )
                }

            </div>
            <GoBack />
            <div className={styles.articlesBg}><Articles /></div>
        </div>
    );
}

export default Article;