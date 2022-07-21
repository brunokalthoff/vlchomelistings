import styles from '../../styles/sellers/Offer.module.css'
import Image from 'next/image';
import contactJerry from '../../public/contact-jerry.png'
import { TbHeartHandshake } from 'react-icons/tb';
import { MdPriceCheck, MdSpeed } from 'react-icons/md';
import { TbArrowLoopRight2 } from 'react-icons/tb';
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion } from 'framer-motion';

function Offer() {
    const [sent, setSent] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => {
            e.target.reset();
            setSent(false);
        }, 2000);
    }


    return (
        <div className={styles.container}>
            <h2>Get a guaranteed offer in 72 hours.<br />
                <span> And close it in as little as 21 days.</span>
            </h2>

            <div className={styles.formWrapper}>

                <form onSubmit={handleSubmit} name='request-offer' className={styles.form} data-netlify="true" method="POST">
                    <label htmlFor="name">Name*<input type="text" id='name' required /></label>
                    <div className={styles.doubleInput}><label htmlFor="text">Email*<input type="text" id="email" name='email' required /></label>
                        <label htmlFor="phone">Phone<input type="text" id='phone' name='phone' /></label></div>
                    <label htmlFor="address">Adress*<input type="text" id='address' name='address' required /></label>
                    <label htmlFor="reason">Why are you selling your home?<textarea id="reason" rows="5" name='reason'></textarea></label>
                    <label htmlFor="move">When do you plan on moving?
                        <select id="move" name='move'>
                            <option selected disabled>Select your option</option>
                            <option value="0 - 1 month">0 - 1 month</option>
                            <option value="1 - 3 months">1 - 3 months</option>
                            <option value="<3 - 6 months">3 - 6 months</option>
                            <option value="<6 + months">6+ months</option>
                        </select></label>

                    <button type='submit'>
                        {sent && <motion.div animate={{ rotate: 720 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}><AiOutlineLoading3Quarters /></motion.div>}
                        Get offer
                    </button>
                </form>
                <div className={styles.img}>
                    <Image src={contactJerry} alt='' /></div>

            </div>

            <h3>We provide you with options and full control over the home selling process</h3>
            <div className={styles.cards}>
                <div className={styles.card}><MdPriceCheck /> <p>Receive a competitive & guaranteed offer on your home in 72 hours.</p></div>
                {/* <BsArrowRightShort /> */}
                <div className={styles.card}><TbArrowLoopRight2 /><p>Bypass the market. Sidestep showings, open houses, and stress.</p></div>
                {/* <BsArrowRightShort /> */}
                <div className={styles.card}><TbHeartHandshake /><p>Streamline the Sale. Close quickly, and move on to the next chapter of your life.</p></div>
            </div>

        </div>
    );
}

export default Offer;