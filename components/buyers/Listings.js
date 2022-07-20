import { useState } from 'react';
import styles from '../../styles/buyers/Listings.module.css'
import Map from './Map'
import { CgBell, CgOptions } from 'react-icons/cg';
import commaNumber from 'comma-number'
import { homes } from '../listings'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import Pagination from './Pagination';

function Listings() {
    const router = useRouter()
    //Toggle Map
    const [showMap, setShowMap] = useState(false);

    const toggleSwitch = () => {
        router.push('#mapy');
        setShowMap(prev => !prev);
    };

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
    };

    const [searchResults, setSearchResults] = useState(homes);
    const [page, setPage] = useState(1);
    const resultsPerPage = 9;

    return (
        <div className={styles.container}>
            <h2>Home listings.<span> We serve Cambridge, Kitchener, Waterloo, Guelph, Woodstock, and surrounding areas.</span> <div id='mapy' className={styles.scrollTo} /> </h2>

            <motion.div layout transition={{ delay: .3, duration: .5 }} className={styles.mapWrapper}>
                {showMap && <Map searchResults={searchResults} />}
            </motion.div>

            <motion.div layout transition={{ delay: .3, duration: .5 }} className={styles.searchBar}>
                <div className={styles.mapToggle}>
                    <div className={showMap ? `${styles.switch} ${styles.switchOn}` : styles.switch} onClick={toggleSwitch}>
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
            </motion.div>

            <motion.div layout transition={{ delay: .3, duration: .5 }} className={styles.searchResults}>
                {searchResults.slice(resultsPerPage * (page - 1), resultsPerPage * page).map((listing, key) => {
                    return (
                        <div key={key} className={styles.listing} onClick={() => router.push('listings/' + listing.msl)}>
                            <div className={styles.listingImg}>
                                <img src={listing.img[0]} alt='' />
                            </div>
                            <p> {listing.adress} <br />
                                <span>{listing.beds} Bedrooms, {listing.baths} Bathrooms</span> </p>
                            <p> ${commaNumber(listing.price)} </p>
                        </div>
                    )
                })}

                <div className={styles.listingFiller} />
                <div className={styles.listingFiller} />
                <div className={styles.listingFiller} />

            </motion.div>

            <Pagination page={page} setPage={setPage} results={searchResults.length} resultsPerPage={resultsPerPage} />

        </div>
    );
}

export default Listings;