import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { FcExternal } from 'react-icons/fc'
import { useRouter } from 'next/router'

function Navbar() {
    const router = useRouter()
    const link = {
        home: '/',
        sellers: '/sellers',
        buyers: '/buyers',
        blog: '/blog',
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.logo} onClick={() => router.push('/')}>
                <Image
                    src={'/logo.png'}
                    alt='logo'
                    layout='fill'
                    objectFit='contain'
                    objectPosition="left"
                />
            </div>
            <div className={styles.links}>
                <Link href={link.home}><a className={router.pathname === link.home ? styles.linksActive : ''}>Home</a></Link>
                <Link href={link.sellers}><a className={router.pathname === link.sellers ? styles.linksActive : ''}>Sellers</a></Link>
                <Link href={link.buyers}><a className={router.pathname === link.buyers ? styles.linksActive : ''}>Buyers</a></Link>
                <Link href={link.blog} passHref><a target="_blank" rel="noopener noreferrer" className={router.pathname === link.blog ? styles.linksActive : ''}>Blog <FcExternal /></a></Link>
            </div>
        </div>
    );
}

export default Navbar;