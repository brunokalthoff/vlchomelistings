import styles from '../styles/Footer.module.css'
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link';


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>

                <span><FaFacebookF /> <p>Facebook</p></span>
                <span><BsYoutube /><p>YouTube</p></span>
                <span><BsInstagram /><p>Instagram</p></span>

            </div>
            <div className={styles.hl}></div>
            <div className={styles.text}>
                <div className={styles.smallerText}>Data provided by the Ontario Regional Technology & Information Systems. The information is deemed reliable, but is not guaranteed. <a>Terms of Use</a> | <a>Privacy Policy</a></div>
                <div className={styles.smallText}>Copyright 2022 By Van Leeuwen Real Estate Advisors</div>
                <div className={styles.smallerText}>Design and Code by <a href='https://brunokalthoff.dev/' target="_blank" rel="noopener noreferrer">Bruno Kalthoff</a></div>

            </div>
        </footer>
    );
}

export default Footer;