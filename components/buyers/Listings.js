import { useState } from 'react';
import styles from '../../styles/buyers/Listings.module.css'
import Map from './Map'
import { CgBell, CgOptions } from 'react-icons/cg';
import { motion } from "framer-motion"
import commaNumber from 'comma-number'
import { homes } from '../listings'
import { useRouter } from 'next/router'

function Listings() {
    const router = useRouter()
    //Toggle Map
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(prev => !prev);

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

    return (
        <div className={styles.container}>
            <h2>Home listings.<span> We serve Cambridge, Kitchener, Waterloo, Guelph, Woodstock, and surrounding areas.</span></h2>

            {isOn && <Map />}

            <div className={styles.searchBar}>
                <div className={styles.mapToggle}>
                    <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
                        <motion.div className={styles.handle} layout transition={spring} />
                    </div>
                    <p>Show map</p></div>
                <div className={styles.searchForm}>
                    <input type="text" placeholder='Type any adress' />
                    <button>Search</button>
                </div>
                <div className={styles.options}>
                    <div className={styles.notifications}><CgBell /></div>
                    <div className={styles.filter}> <CgOptions /> Filter</div>
                </div>
            </div>

            <div className={styles.searchResults}>
                {homes.map((listing, key) => {
                    return (
                        <div key={key} className={styles.listing} onClick={() => router.push('listings/' + listing.msl)}>
                            <div className={styles.listingImg}>
                                <img src={listing.img[0]} alt='' />
                            </div>
                            <p> {listing.adress} <br />
                                <span>Bedrooms: {listing.beds}, Bathrooms: {listing.baths} </span> </p>
                            <p> ${commaNumber(listing.price)} </p>
                        </div>
                    )
                })}

                <div className={styles.listingFiller} />
                <div className={styles.listingFiller} />
                <div className={styles.listingFiller} />

            </div>

                <div className={styles.pagination}>
                    
                </div>

        </div>
    );
}

export default Listings;