import styles from '../../styles/home/Testimonials.module.css'
import { motion } from "framer-motion"
import { useRef } from 'react'

function Testimonials() {
    const constraintsRef = useRef(null)
    const testimonials = [
        {
            name: "Jeremey Hetherington",
            text: <>My experience with The Team from Keller was excellent. It&apos;s hard to imagine how easy it is to sell a home in these times. We sold in 5 days after receiving multiple offers all prior to the actual offer acceptance date for more than our asking price. I&apos;m very happy and would recommend Trevor as an agent to anyone who asks.</>
        },
        {
            name: "Jeremey Hetherington",
            text: <>My experience with The Team from Keller was excellent. It&apos;s hard to imagine how easy it is to sell a home in these times. We sold in 5 days after receiving multiple offers all prior to the actual offer acceptance date for more than our asking price. I&apos;m very happy and would recommend Trevor as an agent to anyone who asks.</>
        },
        {
            name: "Jeremey Hetherington",
            text: <>My experience with The Team from Keller was excellent. It&apos;s hard to imagine how easy it is to sell a home in these times. We sold in 5 days after receiving multiple offers all prior to the actual offer acceptance date for more than our asking price. I&apos;m very happy and would recommend Trevor as an agent to anyone who asks.</>
        }
    ]

    return (
        <>
            <div className={styles.headline}>
                <h2>Testimonials.
                    <span> What Our Clients Say About Us.</span>
                </h2>
            </div>

            <div ref={constraintsRef} className={styles.container}>
                <motion.div initial={{x:0}} animate={{x:-10000}} transition={{duration: 180}} drag="x" dragConstraints={constraintsRef} whileDrag={{ scale: 1.01 }} className={styles.inner}>
                    {testimonials.map((item, key)=>{
                        return (
                            <div key={key} className={styles.card}>
                                <h4> {item.name} </h4>
                                <p> {item.text} </p>
                            </div>
                        )
                    })}

                </motion.div>
            </div>
        </>
    );
}

export default Testimonials;