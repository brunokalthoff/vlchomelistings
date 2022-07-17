import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from '../styles/PrivacyTerms.module.css'


function PrivacyTerms({ privacyTerms, setPrivacyTerms }) {
    const content = [
        { dummy: "dumb" },
        {
            title: <>Website usage Terms and Conditions</>,
            text: <>Welcome to our website! If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with ourprivacy policy govern this site&apos;s owner&apos;s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.<br />
                <br />
                The term &apos;us&apos; or &apos;we&apos; refers to the owner of the website. The term &apos;you&apos; refers to the user or viewer of our website.<br />
                <br />
                The use of this website is subject to the following terms of use:<br />
                <br />
                * The content of the pages of this website is for your general information and use only. It is subject to change without notice.<br /><br />
                * Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials foundor offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.<br /><br />
                * Your use of any information or materials on this website is entirely at your own risk,for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.<br /><br />
                * This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.<br /><br />
                * All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.<br /><br />
                * Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.<br /><br />
                * From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).<br /><br />
                * Your use of this website and any dispute arising out of such use of the website is subject to the laws of Canada.</>,
        },
        {
            title: <>Privacy Policy</>,
            text: <>
                We understand the power that the Internet holds for changing your life and making things easier for you. These benefits are at risk if people are concerned about their personal privacy. We are committed to providing you with an Internet experience that respects and protects your personal privacy choices and concerns. In general, we gather information about all of our users collectively. We only use such information anonymously and in the aggregate. This information helps us determine what is most beneficial for our users, and how we can continually create a better overall experience for you.<br />
                <br />
                Email Links<br />
                This site provides email address link located on the Contact Us page so that you may email us directly with any questions or comments you may have. This site reads all messages received and makes efforts to respond promptly. In addition to replying to your comment or inquiry, we may also file your email for future reference regarding improvements to our website or discard the information. Your personal information is not shared, traded, sold, or exchanged with any third parties without your express permission.<br />
                <br />
                Information Collection and Use<br />
                This site is the sole owner of the information collected. We will not sell, share, trade or rent this information to others in ways different from what is disclosed in this statement. This site collects information from our users at several different points on our website. We ONLY collect personal information necessary to effectively market and to sell the property of sellers, to locate, assess and qualify properties for buyers and to otherwise provide professional services to clients and customers. We do not sell, trade, transfer, rent or exchange your personal information with anyone. Free Evaluation Form / Find Your Dream Home<br />
                <br />
                Did You Know? / Free Real Estate Reports<br />
                Since this site is a Real Estate Site, we give you the OPTION of requesting FREE Real Estate Information about real estate properties. Your personal Information is stored on our secure database. We ONLY collect personal information necessary to effectively market and to sell the property of sellers, to locate, assess and qualify properties for buyers and to otherwise provide professional services to clients and customers. We do not sell, trade, transfer, rent or exchange your personal information with anyone.<br />
                <br />
                Personal Information<br />
                This site functionality requires/requests users to give us contact information (such as their email address) and personal information (such as their names, address phone numbers, and property details). The visitors contact and personal information is used to contact visitor when necessary and requested, but is primarily used to collect personal information necessary to effectively market and to sell the property of sellers, to locate, assess and qualify properties for buyers and to otherwise provide professional services to clients and customers. We do not sell, trade, transfer, rent or exchange your personal information with anyone. We do not disclose information about your individual visits to this site, or personal information that you provide, such as your name, address, e-mail address, telephone number, etc., to any outside parties, except when we believe the law requires it.<br />
                <br />
                Legal Disclaimer<br />
                We may disclose personal information when required by law or in the good-faith belief that such action is necessary in order to conform to the edicts of the law or comply with a legal process serviced on our website.<br />
                <br />
                Opt-Out<br />
                This site provides users the opportunity to opt-out from our mailing list from their accounts. To do this click on our unsubscribe link found on the Following pages; Did You Know/Free Evaluation/Find Your Dream Home. Simply submit your email address and click submit;you will be automatically removed from further emailing to your email address.<br />
                <br />
                Links<br />
                This site contains links to other sites. These sites have their own policies and practices with respect to online privacy, and This site cannot be responsible for the privacy practices or the content of these Web sites. In addition, in certain instances a This site advertiser may ask you for personal information. This site cannot be responsible for the privacy practices of its advertisers. Only certain employees have access to the information you provide us. For example, we impose strict rules on our employees who have access either to the databases that store user information or to the servers that host our services. While we cannot guarantee that loss, misuse or alteration to data will not occur, we try to prevent such unfortunate occurrences.<br />
                <br />
                Notification of Changes<br />
                This policy may be revised over time as new features are added to the website. We will post those changes so that you will always know what information we gather, how we might use that information, and whether we will disclose it to anyone. Please check this site for information about revisions to our privacy policy. We will notify you directly if there is a material change in our privacy practices. We will take commercially reasonable measures to obtain written or active e-mail consent from the user, if this site is going to be using the information collected from the user in a manner different from that stated at the time of collection. We will also post the changes in our privacy statement 10 days prior to a change.<br />
                <br />
                Cookies<br />
                This website uses the following cookies:<br />
                Google Analytics:<br />
                This cookie allows us to see information on user website activities including, but not limited to page views, source and time spent on websites. The information is depersonalised and is displayed as numbers, meaning it cannot be tracked back to individuals. This will help to protect your privacy. Using Google Analyitics we can see what content is popular on our website, and strive to give you more of the things you enjoy reading and watching.<br />
                Google AdWords: Using Google AdWords code we are able to see which pages helped lead to contact form submissions. This allows us to make better use of our paid search budget.<br />
                <br />
                Privacy Questions<br />
                If you have any questions regarding our privacy policy please send us an email and we will be pleased to assist.</>,
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                <div className={styles.close} onClick={() => setPrivacyTerms(null)}><AiOutlineCloseCircle /></div>
                <div className={styles.wrapper}>
                    <h2> {content[privacyTerms].title} </h2>
                    <h5> {content[privacyTerms].text} </h5>
                </div>
            </div>
        </div >
    );
}

export default PrivacyTerms;