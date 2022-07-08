import styles from '../../styles/sellers/Faq.module.css'
import { HiPlus } from 'react-icons/hi';

const faq = [
    {
        question: <> What Types of Homes fit the Guaranteed Offer Program?</>,
        answer: <>Single family home, duplex, triplex, multiple unit buildings, and condos that were built after 1960 with a potential value of $200,000.00 - $600,000.00. The Home must be owner occupied or vacant, non distressed, not bank owned, and no unpermitted additions or significant structural or foundational issues.</>
    },
    {
        question: <>How does the Guaranteed Offer process work?</>,
        answer: <>Once you submit your home for a Guaranteed Offer, our team will verify if your home meets the program parameters. If your home meets the requirements, an offer will be extended contingent upon an inspection. Upon accepting the offer, you have the opportunity to close in as little as 21 days.</>
    },
    {
        question: <>Can I still sell my home if it doesn&apos;t meet the program parameters?</>,
        answer: <> Absolutely! If your home is submitted to our Guaranteed Offer program and does not meet the parameters, we can pair you with one of our Exclusive Listing Agents to sell your home with our Marketing Listing Program.</>
    },
]

function Faq() {
    return (
        <div className={styles.container}>
            <h2>Frequently asked questions</h2>

            <div className={styles.faqWrapper}>

                {faq.map((item, key) => {
                    return (
                        <div key={key} className={styles.question}>
                            <div className={styles.questionMain}> <h4> {item.question} </h4> <HiPlus /></div>
                            <div className={styles.answer}>
                                <p> {item.answer} </p>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    );
}

export default Faq;