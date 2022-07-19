import styles from '../../styles/home/Difference.module.css'


function Difference() {

    const items = [
        {
            title: "Our Mission",
            text: <>We aim to be industry leaders by creating an authentic experience through honesty, hard work, and skill - through challenging real estate agents everywhere to a higher level of standard.  Our experience, knowledge and communication skills allow us to provide a level of service that is unmatched in our industry.</>,
            svg: styles.svg1,
        },
        {
            title: "Our Promise",
            text: <>We like to make a promise to our clients. A promise to listen, so we can ensure your home buying or listing process is a smooth transition. A promise to communicate with you to ensure you are aware and feel included every step of the way. A promise to help you with anything you need, so the weight rests entirely on our shoulders. A promise of our care and expertise to ensure your experience becomes a memorable one.</>,
            svg: styles.svg2,
        },
        {
            title: "Our Values",
            text: <>We value the happiness of our clients after we deliver what we promised. We value commitment to culture and vision. Most of all, we value our people. Helping people to achieve their goals is not just our job, its our mission. To us, this means providing you with the most amazing and incredible real estate experience you could ever imagine.</>,
            svg: styles.svg3,
        }
    ]

    return (
        <>
            <div className={styles.different}>
                <h2>What makes Van Leeuwen Real Estate Advisors different?<br />
                    <span> We deliver an amazing service to our customers!</span>
                </h2>
            </div>

            <div className={styles.container}>

                {items.map((item, key) => {
                    return (
                        <div className={styles.card} key={key}>
                            
                            <div className={`${item.svg} ${styles.svgs}`}> </div>
                            <h3> {item.title} </h3>
                            <h6> {item.text} </h6>
                        </div>
                    )
                })}

            </div>
        </>
    );
}

export default Difference;