import styles from '../../styles/home/Contact.module.css'
import { motion } from "framer-motion"

function Contact() {
    return (
        <div className={styles.container}>
            <h2>Contact us</h2>
            <div className={styles.formWrapper}>
                <h3>Send a message. <span>We reply within 30 minutes - often sooner, and never automated.</span></h3>
                <div className={styles.formCardWrapper}><div className={styles.card}>
                    <form className={styles.form}>
                        <div className={styles.input}><label htmlFor="name">Name</label><input name='name' type="text" /></div>
                       <div className={styles.doubleInput}><div className={styles.input}><label htmlFor="email">Email</label><input name='email' type="text" /></div><div className={styles.input}><label htmlFor="phone">Phone</label><input name='phone' type="text" /></div></div>
                        <div className={styles.input}><label htmlFor="note">Note</label><textarea name="note" rows="5"></textarea></div>
                        <button>Send</button>
                    </form>
                </div>
                </div>
            </div>

            <div className={styles.detailsWrapper}>
                <div className={styles.detailsCardWrapper}><div className={styles.card}></div></div>
                <h3>We&apos;re here. <span>For an immediate response, please call.</span></h3>
            </div>
        </div>
    );
}

export default Contact;