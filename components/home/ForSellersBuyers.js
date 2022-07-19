import styles from '../../styles/home/ForSellersBuyers.module.css'
import Link from 'next/link'

function ForSellersBuyers() {



    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <h2>For home sellers</h2>
                    <h5><li>🤝 Get a guaranteed offer on your home</li><li>💸 See what your home is worth</li><li>🕵️ Get informed when your neighbours are selling</li><li>🎉 And more</li></h5>
                    <div className={styles.button}><Link href='/sellers'><a>Sell a home</a></Link></div>
                </div>
                <div className={styles.sellersSvg}></div>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.buyersSvg}></div>
                <div className={styles.text}>
                    <h2>For home buyers</h2>
                    <h5> <li>🏠 Find your new home in our listings</li> <li>🔢 Calculate your mortgage rates</li> <li>🎓 Learn how to be smart when buying a house</li><li>🥳 And more</li></h5>
                    <div className={styles.button}><Link href='/buyers'><a>Buy a home</a></Link></div>
                </div>
            </div>

        </div>
    );
}

export default ForSellersBuyers;