import styles from '../../styles/home/ForSellersBuyers.module.css'
import Link from 'next/link'

function ForSellersBuyers() {

    return (
        <div className={styles.container}>

            <div className={styles.forSellers}>
                <div className={styles.text}>
                    <h2>For Home Sellers</h2>
                    <p>Get a guaranteed offer for your home, see what your home is worth, get informed when your neighbours are selling, and more</p>
                    <Link href='/sellers'><button className={styles.button}>Sell your home</button></Link>
                </div>
                <div className={styles.sellersSvg}></div>
            </div>

            <div className={styles.forBuyers}>
                <div className={styles.buyersSvg}></div>
                <div className={styles.text}>
                    <h2>For Home Buyers</h2>
                    <p>Find your new home in our listings, calculate your morgage rates, learn how to be smart when buying a house and how to avoid common pitfalls</p>
                    <Link href='/buyers'><button className={styles.button}>Buy your home</button></Link>
                </div>
            </div>

        </div>
    );
}

export default ForSellersBuyers;