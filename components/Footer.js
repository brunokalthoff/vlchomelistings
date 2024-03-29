import styles from '../styles/Footer.module.css'
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

function Footer({ setPrivacyTerms }) {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>

                <span><a href={'https://www.facebook.com/jerryvanleeuwenkw'} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a><p>Facebook</p></span>
                <span><a href={'https://www.youtube.com/channel/UCYgaINhnJleOI0bZXDhCUYg'} target="_blank" rel="noopener noreferrer"><BsYoutube /></a><p>YouTube</p></span>
                <span><a href={'https://www.instagram.com/vanleeuwenadvisors'} target="_blank" rel="noopener noreferrer"><BsInstagram /></a><p>Instagram</p></span>
                <span><a href={'https://www.tiktok.com/@vanleeuwenrealestate'} target="_blank" rel="noopener noreferrer"><FaTiktok /></a><p>Tiktok</p></span>

            </div>
            <div className={styles.hl}></div>
            <div className={styles.text}>
                <div className={styles.smallerText}>Data provided by the Ontario Regional Technology & Information Systems. The information is deemed reliable, but is not guaranteed. <br /><a onClick={() => setPrivacyTerms(1)}>Terms of Use</a> | <a onClick={() => setPrivacyTerms(2)}>Privacy Policy</a></div>
                <div className={styles.smallText}>Copyright 2022 by Van Leeuwen Real Estate Advisors</div>
                <div className={styles.smallerText}>Design and Code by <a href='https://brunokalthoff.dev/' target="_blank" rel="noopener noreferrer">Bruno Kalthoff</a></div>

            </div>
        </footer>
    );
}

export default Footer;