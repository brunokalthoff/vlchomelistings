import styles from "../../styles/sellers/Offer.module.css";
import Image from "next/image";
import contactJerry from "../../public/contact-jerry.png";
import { TbHeartHandshake } from "react-icons/tb";
import { MdPriceCheck } from "react-icons/md";
import { TbArrowLoopRight2 } from "react-icons/tb";
import { useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsCheck2All } from "react-icons/bs";

function Offer() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    let formData = new FormData(formRef.current);
    console.log(new URLSearchParams(formData).toString());
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSending(false);
        formRef.current.reset();
        setSent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <h2>
        Get a guaranteed offer in 72 hours.
        <br />
        <span> And close it in as little as 21 days.</span>
      </h2>

      <div className={styles.formWrapper}>
        <form
          onSubmit={handleSubmit}
          style={sent ? { background: "var(--green)" } : {}}
          ref={formRef}
          name="Request Offer"
          className={styles.form}
          data-netlify="true"
          method="POST"
        >
          {!sent && (
            <>
              <input type="hidden" name="form-name" value="Request Offer" />
              <label htmlFor="name">
                Name*
                <input type="text" id="name" name="name" required />
              </label>
              <div className={styles.doubleInput}>
                <label htmlFor="text">
                  Email*
                  <input type="email" id="email" name="email" required />
                </label>
                <label htmlFor="phone">
                  Phone
                  <input type="text" id="phone" name="phone" />
                </label>
              </div>
              <label htmlFor="address">
                Address*
                <input type="text" id="address" name="address" />
              </label>
              <label htmlFor="reason">
                Why are you selling your home?
                <textarea id="reason" rows="5" name="reason"></textarea>
              </label>
              <label htmlFor="move">
                When do you plan on moving?
                <select id="move" name="move">
                  <option value="0 - 1 month" label="0 - 1 months" />
                  <option value="1 - 3 months" label="1 - 3 months" />
                  <option value="3 - 6 months" label="3 - 6 months" />
                  <option value="6+ months" label="6+ months" />
                </select>
              </label>
              <button className={styles.button} type="submit">
                {sending && (
                  <motion.div
                    animate={{ rotate: 720 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <AiOutlineLoading3Quarters />
                  </motion.div>
                )}
                Get offer
              </button>
            </>
          )}
          {sent && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={styles.success}
            >
              <BsCheck2All size={32} /> <p>Your message has been sent. Thank you!</p>
              <button onClick={() => setSent(false)}>
                OK!<span> 🥳</span>
              </button>
            </motion.div>
          )}
        </form>

        <div className={styles.img}>
          <Image src={contactJerry} alt="" />
        </div>
      </div>
      <h3>We provide you with options and full control over the home selling process</h3>
      <div className={styles.cards}>
        <div className={styles.card}>
          <MdPriceCheck /> <p>Receive a competitive & guaranteed offer on your home in 72 hours.</p>
        </div>

        <div className={styles.card}>
          <TbArrowLoopRight2 />
          <p>Bypass the market. Sidestep showings, open houses, and stress.</p>
        </div>

        <div className={styles.card}>
          <TbHeartHandshake />
          <p>Streamline the Sale. Close quickly, and move on to the next chapter of your life.</p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
