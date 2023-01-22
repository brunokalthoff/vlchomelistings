import styles from "../../styles/sellers/Faq.module.css";
import { HiPlus } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";

function Faq() {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);

  const faq = [
    {
      question: <> What types of homes fit the Guaranteed Offer program?</>,
      answer: (
        <>
          Single family home, duplex, triplex, multiple unit buildings, and condos that were built after 1960 with a
          potential value of $200,000.00 - $600,000.00. The Home must be owner occupied or vacant, non distressed, not
          bank owned, and no unpermitted additions or significant structural or foundational issues.
        </>
      ),
      open: toggleOne,
      onClick: () => setToggleOne(!toggleOne),
    },
    {
      question: <>How does the Guaranteed Offer process work?</>,
      answer: (
        <>
          Once you submit your home for a Guaranteed Offer, our team will verify if your home meets the program
          parameters. If your home meets the requirements, an offer will be extended contingent upon an inspection. Upon
          accepting the offer, you have the opportunity to close in as little as 21 days.
        </>
      ),
      open: toggleTwo,
      onClick: () => setToggleTwo(!toggleTwo),
    },
    {
      question: <>Can I still sell my home if it doesn&apos;t meet the program parameters?</>,
      answer: (
        <>
          {" "}
          Absolutely! If your home is submitted to our Guaranteed Offer program and does not meet the parameters, we can
          pair you with one of our Exclusive Listing Agents to sell your home with our Marketing Listing Program.
        </>
      ),
      open: toggleThree,
      onClick: () => setToggleThree(!toggleThree),
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Frequently asked questions</h2>
      <div className={styles.faqWrapper}>
        {faq.map((item, key) => {
          return (
            <motion.div onClick={() => item.onClick()} key={key} className={styles.question}>
              <div className={styles.questionMain}>
                <h5> {item.question} </h5>
                <motion.div animate={open === key ? { rotate: 45 } : { rotate: 0 }} transition={{ ease: "linear" }}>
                  <HiPlus />
                </motion.div>
              </div>
              {item.open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className={styles.answer}
                >
                  <motion.h6> {item.answer} </motion.h6>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
