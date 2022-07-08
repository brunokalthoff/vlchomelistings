import styles from '../../styles/home/ForSellersBuyers.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion';

function ForSellersBuyers() {

    return (
        <div className={styles.container}>

            <motion.div className={styles.wrapper}>
                <div className={styles.text}>
                    <h2>Sell your home</h2>
                    <p><li>Get a guaranteed offer on your home</li><li>See what your home is worth</li><li>Get informed when your neighbours are selling</li><li>and more</li></p>
                    <Link href='/sellers'><button className={styles.button}>For sellers</button></Link>
                </div>
                <motion.div initial={{ x: 1000, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{once: true}} className={styles.sellersSvg}></motion.div>
            </motion.div>

            <div className={styles.wrapper}>
                <motion.div initial={{ x: -1000, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{once: true}} className={styles.buyersSvg}></motion.div>
                <div className={styles.text}>
                    <h2>Buy your home</h2>
                    <p> <li>Find your new home in our listings</li> <li>Calculate your morgage rates</li> <li>Learn how to be smart when buying a house</li><li>and more</li></p>
                    <Link href='/buyers'><button className={styles.button}>For buyers</button></Link>
                </div>
            </div>

        </div>
    );
}

export default ForSellersBuyers;