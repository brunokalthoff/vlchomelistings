import styles from '../../styles/home/Contact.module.css'
import { useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion } from 'framer-motion';

function Contact() {
    const formRef = useRef();
    const [sent, setSent] = useState(false);

    const handleSubmit = e => {
        setSent(true);
        setTimeout(() => {
            formRef.current.reset();
            setSent(false);
        }, 2000);
    }


    return (
        <div className={styles.container}>
            <h2>Contact us 👋</h2>
            <div className={styles.formWrapper}>
                <h3>Send a message. <span>We reply within 30 minutes - often sooner, and never automated.</span></h3>
                <div className={styles.formCardWrapper}><div className={styles.card}>
                    <form action='/' className={styles.form} name="Contact" data-netlify="true" method="POST">
                        <input type="hidden" name="form-name" value="Contact" />
                        <div className={styles.input}><label htmlFor="name">Name*</label><input name='name' type="text" required /></div>
                        <div className={styles.doubleInput}><div className={styles.input}><label htmlFor="email">Email*</label><input name='email' type="email" required /></div><div className={styles.input}><label htmlFor="phone">Phone</label><input name='phone' type="text" /></div></div>
                        <div className={styles.input}><label htmlFor="note">Note*</label><textarea name="note" rows="4" required></textarea></div>
                        <button onClick={handleSubmit} className={styles.button} type='submit' >
                            {sent && <motion.div animate={{ rotate: 720 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}><AiOutlineLoading3Quarters /></motion.div>}
                            Send
                        </button>
                    </form>
                </div>
                </div>
            </div>

            <div className={styles.detailsWrapper}>
                <div className={styles.detailsCardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.details}>
                            <h4>Jerry Van Leeuwen<br />
                                <span>Salesperson</span></h4>
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