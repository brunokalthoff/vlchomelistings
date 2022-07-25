import styles from '../../styles/buyers/ListingsLink.module.css'
import Link from 'next/link';
import { FcExternal } from 'react-icons/fc';

function ListingsLink() {

    const quicklinks = [
        {
            title: "Cambridge",
            link: "PDQVLZZZ3KT35B6C2/homes-for-sale-in-cambridge",
        },
        {
            title: "Elmira",
            link: "PDQVLZZZ4VY7CSVNX/homes-for-sale-in-elmira",
        },
        {
            title: "Guelph",
            link: "PDQVLZZZT95M7QKJC/homes-for-sale-in-guelph",
        },
        {
            title: "Kitchener",
            link: "PDQVLZZZ4VY7CS32J/homes-for-sale-in-kitchener",
        },
        {
            title: "Milton",
            link: "PDQVLZZZW3S48PSJP/homes-for-sale-in-milton",
        },
        {
            title: "Waterloo",
            link: "PDQVLZZZ47QJ66KVC/homes-for-sale-in-waterloo",
        },
    ]

    return (
        <div className={styles.container}>
            <h2>Search our home listings. 🔎
                <span> We serve Cambridge, Kitchener, Waterloo, Guelph, Woodstock, and surrounding areas.</span>
            </h2>
            <div className={styles.button}><Link href='https://www.findsouthernontariohomes.com/' passHref><a target="_blank" rel="noopener noreferrer">Search listings <FcExternal /></a></Link></div>

            <div className={styles.quick}>
                <h3>Quick searches</h3>

                <ul>
                    {quicklinks.map((item, key) => {
                        return <li key={key}><Link href={`https://www.findsouthernontariohomes.com/search/quick/${item.link}`} passHref><a target="_blank" rel="noopener noreferrer">Homes For Sale In {item.title}</a></Link></li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ListingsLink;



