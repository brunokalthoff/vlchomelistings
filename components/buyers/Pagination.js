import styles from '../../styles/buyers/Pagination.module.css'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion";
import { BsArrowRight } from 'react-icons/bs';

const items = [[1, 2, 3, 4, 5, 6, 7], [, 9, 10, 11, 12, 13, 14]]

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


function Pagination({ page, setPage, results, resultsPerPage }) {
    const [pages, setPages] = useState([1]);
    useEffect(() => {
        let pagesArray = []
        for (let i = 1; i <= (results / resultsPerPage); i++) { pagesArray.push(i); }
        setPages(pagesArray)
    }, [results, resultsPerPage]);

    const [[pagiPage, direction], setPagiPage] = useState([0, 0]);
    const itemIndex = wrap(0, items.length, pagiPage);

    const paginate = (newDirection) => {
        setPagiPage([pagiPage + newDirection, newDirection]);
        console.log(pagiPage)
    };

    const paginateLast = () => {
        setPagiPage([-1, 1]);
        setPage(items.at(-1).at(-1))
    }

    return (
        <div className={styles.container}>

            <div className={styles.slider}>

                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        className={styles.sliceWrapper}
                        key={pagiPage}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "linear"},
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
                        }}>
                        <div className={styles.slice}>{items[itemIndex].map((item, key) => {
                            return <div
                                onClick={() => setPage(item)}
                                className={page === item ? `${styles.pageNumber} ${styles.pageNumberActive}` : styles.pageNumber}
                                key={key}>
                                {item}
                            </div>
                        })}
                            {/* {items[itemIndex].at(-1) != items.at(-1).at(-1) && <> <div className={styles.dots}>...</div> <div onClick={paginateLast} className={page === items.at(-1).at(-1) ? `${styles.pageNumber} ${styles.pageNumberActive}` : styles.pageNumber}> {items.at(-1).at(-1)} </div></>} */}
                        </div>
                    </ motion.div>

                </AnimatePresence>

                <div className={styles.prev} onClick={() => paginate(-1)}>
                    <BsArrowRight />
                </div>

                <div className={styles.next} onClick={() => paginate(1)}>
                    <BsArrowRight />
                </div>

            </div>
        </div>


    );
}

export default Pagination;