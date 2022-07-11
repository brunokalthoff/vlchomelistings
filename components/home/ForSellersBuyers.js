import styles from '../../styles/home/ForSellersBuyers.module.css'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function ForSellersBuyers() {

    const controls = useAnimation();

useEffect(() => {
    controls.start({
        x: 0,
        opacity: 1,
        transition: { ease: 'linear' }
    })
}, []);


    return (
        <div className={styles.container}>

            <motion.div className={styles.wrapper}>
                <div className={styles.text}>
                    <h2>Sell your home</h2>
                    <h5><li>Get a guaranteed offer on your home</li><li>See what your home is worth</li><li>Get informed when your neighbours are selling</li><li>and more</li></h5>
                    <div className={styles.button}><Link href='/sellers'><a>For sellers</a></Link></div>
                </div>
                <motion.div initial={{ x: 1000, opacity: 0 }} animate={controls} viewport={{ once: true }} className={styles.sellersSvg}></motion.div>
            </motion.div>

            <div className={styles.wrapper}>
                <motion.div initial={{ x: -1000, opacity: 0 }} animate={controls} viewport={{ once: true }} className={styles.buyersSvg}></motion.div>
                <div className={styles.text}>
                    <h2>Buy your home</h2>
                    <h5> <li>Find your new home in our listings</li> <li>Calculate your morgage rates</li> <li>Learn how to be smart when buying a house</li><li>and more</li></h5>
                    <div className={styles.button}><Link href='/buyers'><a>For buyers</a></Link></div>
                </div>
            </div>

        </div>
    );
}

export default ForSellersBuyers;