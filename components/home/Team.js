import styles from '../../styles/home/Team.module.css'
import Image from 'next/image'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion";
import vanleeuwen from '../../public/team-vanleeuwen.jpg'
import little from '../../public/team-little.jpg'
import pohl from '../../public/team-pohl.jpg'
import vincent from '../../public/team-vincent1.jpg'


const images = [vanleeuwen, little, pohl, vincent]
const names = ["Jerry Van Leeuwen", "Graham Little", "Trevor Pohl", "Allisa Vincent"]
const role = ["Team Owner", "Sales Representative", "Sales Representative", "Transaction & Client Coordinator"]
const bio = [
    <>Prior to becoming one of Kitchener-Waterloo&rsquo;s top real estate agents, Jerry Van Leeuwen enjoyed a career as an Advanced Care Paramedic in the Region of Waterloo. Caring for people is in his nature, which is why he places his values on family, business, and health. He takes time and care while helping each of his clients understand the real estate market and the decisions that must be made to achieve their unique goals.<br />
        <br />
        Selling or buying a home with confidence is the experience Jerry always strives to provide. His goal is to make this next step in a client&rsquo;s life happens with ease. Working with people during this nerve wracking, yet exciting time is a highlight of the experience for Jerry. He takes extra care to ensure his clients are kept up-to-date, and have a full understanding of what each step of the process means for their specific circumstance. This means there is more time for clients to enjoy the selling or buying process, rather than stressing over the logistics. Understanding how to maximize the sale of a client&rsquo;s home using repeatable and reliable systems is an everyday occurrence for Jerry. A properly planned and well executed selling or buying strategy using a market statistics is laid out prior to any real estate endeavor. Not only are clients fully involved in the formation of this strategy, but it allows them to have full confidence that they will receive the most money for their home, and/or find a new home that fits all of their requirements &ndash; including budget.<br />
        <br />
        Jerry works well under pressure, having 10 years of experience as a paramedic, as well as having trained and practiced his reliable systems, he can confidently provide each of his clients with the best service possible. These systems help Jerry achieve repeatable results and help put his clients&rsquo; minds at ease.<br />
        <br />
        Jerry is a CHBA Certified Home Buying Advisor through the National Association of Expert Advisors (NAEA), a CHSA Certified Home Selling Advisor through NAEA, and he has been trained and certified through the NAEA to provide the best possible service to his clients.<br />
        With a reputation for honesty and integrity, Jerry seeks to positively affect the lives of those he works with, as well as highlight a better, more reliable approach to real estate that makes for more informed decision-making processes. In June of 2016, Jerry was named a &ldquo;Top Lister&rdquo; at Keller Williams, and just two months later, was named a &ldquo;Top Earner&rdquo; with Keller Williams.<br />
        <br />
        In addition to real estate, Jerry is passionate about his family, staying active, and enjoying the outdoors. His career allows him to constantly meet new people and assist them as they move forward in their lives. Clients who have worked with Jerry are happy to have a strong advocate and an expert to negotiate on their behalf. He strives to be an industry influencer who changes the way the public views real estate. Always looking out for his clients&rsquo; best interests, Jerry works hard, so they don&rsquo;t have to.</>,
    <>Providing genuine, professional, heart felt service to clients, friends, and family is one of life&rsquo;s greatest honours. I have had this pleasure time and time again over the years and the feeling never gets old. When my career first began as a Paramedic for the Region of Waterloo, every day was full of challenges, but the reward was always helping people and their families in a time of need. When the time came to start developing a new career path, I searched to find a niche that I could provide the same care and compassion for people, ease their stress while helping them to achieve their goals. Becoming a Real Estate professional was the most direct and logical choice for me, and my clients are happy to agree!<br />
        <br />
        Working with me you will quickly notice that my attention to detail and succinct approach is both comforting and provides security. My focus on hard work and ethical practice is engrained from a 17 year career in Emergency Services. It is a trained reflex and a satisfying trait for your agent to possess. My previous career has conditioned me to perform at a high level in stressful situations, actively problem solve, all while continuing to provide effective communication and maintain complete confident composure. Protecting and growing the equity of my clients is further accomplished by my ability to adapt and respond to the constant changes in the real estate market.<br />
        <br />
        My dedication and commitment to my clients has secured my success as a Real Estate Professional. With each transaction my clients have repeated that my authentic professional approach has made their experience both positive and stress free. My continued focus on hard work and determination has allowed me to obtain the designation of a &ldquo;Top 20%&rdquo; agent in Keller Williams Golden Triangle Brokerage to start the year in 2019. This work ethic has also been a contributing factor in helping Van Leeuwen Real Estate Advisors be awarded &ldquo;Top Team&rdquo; in the brokerage for January 2019.<br />
        I enthusiastically look forward to helping you accomplish your real estate needs, please reach out anytime and lets set up your personal consultation.</>,
    <>Between his passion for assisting others in sales and unique experience in the residential world, Trevor offers a unique vision for helping you achieve your dreams. Trevor spent the last 7 years in the paint industry helping homeowners and tradespeople build their dream home. His problem-solving skills, along with an understanding of how to understand and increase value in the market ensured every client was left satisfied with more than expected. <br /><br /> Prior to this, Trevor has experience in the trades working landscaping and contracting that help him best understand the value in a home. This experience has developed a passion for real estate, a personal interest in real estate investing and a desire to help others accomplish their goals in real estate. Trevor holds a Bachelor of commerce, Marketing Management, from the University of Guelph. He grew up in Orangeville, Ontario but has spent the last 10 years in the Tri-cities/Guelph market, currently residing in Kitchener. He loves all things sports, including golf, soccer, basketball and volleyball. Other interests include working on their house, spending time with friends and family and spoiling their energetic puppy.</>,
    <>Allisa is our Transaction and Client Care Coordinator and manages the entire transaction process from start to finish! Allisa comes to us with a background in Management and Human Resources but decided to pursue her long time passion for real estate.<br />

        Since purchasing a home of her own, she realized she wanted to help others like herself and has made it her mission to provide a smooth and amazing experience to each and every one of our clients.</>
]

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};


function Team() {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className={styles.container} suppressHydrationWarning={true}>
            <h2>About us. <span>Meet the team.</span></h2>

            <div className={styles.slider}>

                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        className={styles.imgWrapper}
                        key={page}

                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}

                    > <Image src={images[imageIndex]} alt={images[imageIndex].toString()} /></ motion.div>

                </AnimatePresence>
            </div>
            <h4 className={styles.name}>{names[imageIndex]}</h4>
            <div className={styles.pagination}>
                <div className={styles.prev} onClick={() => paginate(-1)}>
                    {"‣"}
                </div>
                <div className={styles.pagis}>{images.map((item, key) => <div className={ imageIndex === key ? `${styles.balls} ${styles.ballsActive}` : styles.balls} key={key}></div>)}</div>
                <div className={styles.next} onClick={() => paginate(1)}>
                    {"‣"}
                </div>

            </div>

            <motion.div layout="position" transition={{ duration: 1 }} className={styles.bio}>
                <motion.h4 layout="position" transition={{ duration: 1 }}>{role[imageIndex]}</motion.h4>
                <motion.h6 layout="position" transition={{ duration: 1 }}>{bio[imageIndex]}</motion.h6>
            </motion.div>


        </div>
    );
}

export default Team;