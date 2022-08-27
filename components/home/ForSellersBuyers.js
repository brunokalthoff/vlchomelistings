import styles from '../../styles/home/ForSellersBuyers.module.css'
import Link from 'next/link'

function ForSellersBuyers() {

    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <h2>For home sellers</h2>
                    <h5>
                        Most home sellers dream of a stress-free sale in which they simply list their house, quickly find a qualified buyer, collect the cash and hand over the keys. If only it were that simple! In reality, selling a home involves many moving parts - some that you can control, and some that are out of your hands.
                    </h5>
                    <div className={styles.button}><Link href='/sellers'><a>Sell your home</a></Link></div>
                </div>
                <div className={styles.video}>
                    <video width="100%" height="100%" autoPlay muted loop>
                        <source src="/videos/sellers-link.webm" type="video/webm" />
                        <source src="/videos/sellers-link.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className={styles.hl}></div>
            <div className={styles.wrapper}>
                <div className={styles.video}>
                    <video width="100%" height="100%" autoPlay muted loop>
                        <source src="/videos/buyers-link.webm" type="video/webm" />
                        <source src="/videos/buyers-link.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className={styles.text}>
                    <h2>For home buyers</h2>
                    <h5>
                        Buying a home can be challenging for a first-timer. After all, there are so many steps, tasks, and requirements, and you may be anxious about making an expensive mistake. But first-time homebuyers enjoy some special advantages created to encourage new entrants into the real estate market. Allow us to work for you!
                    </h5>
                    <div className={styles.button}><Link href='/buyers'><a>Buy your home</a></Link></div>
                </div>
            </div>
            <div className={styles.hl}></div>
        </div>
    );
}

export default ForSellersBuyers;



{/* <div className={styles.container}>

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

</div> */}