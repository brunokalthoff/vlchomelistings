import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import logo from '../public/logo.png'
import { FcExternal } from 'react-icons/fc'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.image}>
                <Image
                    src={'/logo.png'}
                    alt='logo'
                    layout='fill'
                    objectFit='contain'
                    objectPosition="left"
                />
            </div>
            <div className={styles.links}>
                <Link href='/'><a>Home</a></Link>
                <Link href='/sellers'><a>Sellers</a></Link>
                <Link href='/buyers'><a>Buyers</a></Link>
                <Link href='/blog'><a>Blog <FcExternal /></a></Link>
            </div>
        </div>
    );
}

export default Navbar;