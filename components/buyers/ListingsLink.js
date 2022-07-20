import styles from '../../styles/buyers/ListingsLink.module.css'
import Link from 'next/link';
import { FcExternal } from 'react-icons/fc';

function ListingsLink() {
    return (
        <div className={styles.container}>
            <h2>Search our home listings.
                <span> We serve Cambridge, Kitchener, Waterloo, Guelph, Woodstock, and surrounding areas. 🔎</span>
            </h2>
            <div className={styles.button}><Link href='https://www.findsouthernontariohomes.com/' passHref><a target="_blank" rel="noopener noreferrer">Search listings<FcExternal /></a></Link></div>
        </div>
    );
}

export default ListingsLink;