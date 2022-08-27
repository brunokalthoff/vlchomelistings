import styles from '../../styles/buyers/Listings.module.css'

function Listings() {

    return (
        <div className={styles.container}>
            <h2>Search our home listings. 🔎
                <span> We serve Cambridge, Kitchener, Waterloo, Guelph, Woodstock, and surrounding areas.</span>
            </h2>

            <div className={styles.iframe}>
                <iframe src="https://matrix.itsorealestate.ca/Matrix/public/IDX.aspx?idx=859e298" width="100%" height="100%" frameBorder="0" marginWidth="0" marginHeight="0" />
            </div>


        </div>
    );
}

export default Listings;



