import styles from '../../styles/home/Contact.module.css'
import { useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { BsCheck2All } from 'react-icons/bs';

function Contact() {
    const formRef = useRef();
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setSending(true);
        let formData = new FormData(formRef.current);
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
            .catch((error) => console.log(error));
    };

    return (
        <div className={styles.container}>
            <h2>Contact us 👋</h2>
            <div className={styles.formWrapper}>
                <h3>Send a message. <span>We reply within 30 minutes - often sooner, and never automated.</span></h3>
                <div className={styles.formCardWrapper}><div className={styles.card}>
                    {!sent && <form onSubmit={handleSubmit} ref={formRef} className={styles.form} name="Contact" data-netlify="true" method="POST">
                        <input type="hidden" name="form-name" value="Contact" />
                        <div className={styles.input}><label htmlFor="name">Name*</label><input name='name' type="text" required /></div>
                        <div className={styles.doubleInput}><div className={styles.input}><label htmlFor="email">Email*</label><input name='email' type="email" required /></div><div className={styles.input}><label htmlFor="phone">Phone</label><input name='phone' type="text" /></div></div>
                        <div className={styles.input}><label htmlFor="note">Note*</label><textarea name="note" rows="4" required></textarea></div>
                        <button className={styles.button} type='submit' >
                            {sending && <motion.div animate={{ rotate: 720 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}><AiOutlineLoading3Quarters /></motion.div>}
                            Send
                        </button>
                    </form>}
                    {sent && <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5, duration: .5 }} className={styles.success}>
                        <BsCheck2All size={32} /> <p>Your message has been sent. Thank you!</p>
                        <button onClick={() => setSent(false)}>OK!<span> 🥳</span></button>
                    </motion.div>}
                </div>
                </div>
            </div>

            <div className={styles.detailsWrapper}>
                <div className={styles.detailsCardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.details}>
                            <h4>Jerry Van Leeuwen<br />
                                <span>Broker</span></h4>
                            <p>📍 Adress<br /><span>1165 Franklin Blvd<br />
                                Cambridge, ON, Canada</span></p>
                            <p>☎️ Phone <br /><span>519-772-4328</span></p>
                            <p>📨 Email <br /><span>getresults@vanleeuwenadvisors.com</span></p>
                        </div>
                    </div>
                </div>
                <h3>We&apos;re here. <span>For an immediate response, please call.</span></h3>
            </div>
        </div>
    );
}

export default Contact;