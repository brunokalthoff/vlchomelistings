import styles from '../../styles/buyers/Calculators.module.css'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Calculators() {

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)

    return (
        <div className={styles.container}>
            <h2>Use our calculators.<span> Know your costs. 🔢</span>
            </h2>

            <div className={styles.wrapper}>

                <motion.div onClick={() => setFirst(prev => !prev)} style={first ? { background: 'var(--grey1)', borderRadius: '1.5rem' } : {}} className={styles.title}>
                    <div className={styles.titleBar}>
                        <h5>Land transfer tax calculator</h5>
                        <motion.div animate={first ? { rotate: 45 } : { rotate: 0 }} transition={{ ease: 'linear' }}>
                            <HiPlus />
                        </motion.div>
                    </div>
                    {first && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={styles.calculator}>
                        <motion.div animate={{ rotate: 720 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}><AiOutlineLoading3Quarters /></motion.div>
                        <iframe className={styles.iframe} src="https://www.ratehub.ca/widgets/payment-calc.php?ltt=only&lang=en&ac=954289" scrolling='no' style={{ height: '290px' }} frameBorder="0" />
                    </motion.div>}
                </motion.div>


                <motion.div onClick={() => setSecond(prev => !prev)} style={second ? { background: 'var(--grey1)', borderRadius: '1.5rem' } : {}} className={styles.title}>
                    <div className={styles.titleBar}>
                        <h5>Mortgage payment calculator</h5>
                        <motion.div animate={second ? { rotate: 45 } : { rotate: 0 }} transition={{ ease: 'linear' }}>
                            <HiPlus />
                        </motion.div>
                    </div>
                    {second && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={styles.calculator}>
                        <motion.div animate={{ rotate: 720 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}><AiOutlineLoading3Quarters /></motion.div>
                        <iframe className={styles.iframe} src="https://www.ratehub.ca/widgets/payment-calc.php?lang=en&ac=954289" scrolling='no' style={{ height: '625px' }} frameBorder="0" />
                    </motion.div>}
                </motion.div>


                <motion.div onClick={() => setThird(prev => !prev)} style={third ? { background: 'var(--grey1)', borderRadius: '1.5rem' } : {}} className={styles.title}>
                    <div className={styles.titleBar}>
                        <h5>CMHC insurance calculator</h5>
                        <motion.div animate={third ? { rotate: 45 } : { rotate: 0 }} transition={{ ease: 'linear' }}>
                            <HiPlus />
                        </motion.div>
                    </div>
                    {third && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={styles.calculator}>
                        <motion.div animate={{ rotate: 720 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}><AiOutlineLoading3Quarters /></motion.div>
                        <iframe className={styles.iframe} src="https://www.ratehub.ca/widgets/payment-calc.php?cmhc=only&lang=en&ac=954289" scrolling='no' style={{ height: '290px' }} frameBorder="0" />
                    </motion.div>}
                </motion.div>

            </div>
        </div>
    );

}

export default Calculators;

