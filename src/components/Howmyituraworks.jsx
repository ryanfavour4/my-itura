import styles from './Howmyituraworks.module.css'
import { FaBookMedical } from "react-icons/fa";
import { FaSyringe } from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";

const Howmyituraworks = () => {
    return ( 
        <section className={styles.how_myitura_works}>
        <div className={`container ${styles.flex_center}`}>
            <h3 className={styles.spaced_caption_header}>HOW MYITURA WORKS</h3>
            <div className={styles.step_by_step_box}>
                <div className={styles.step_box}>
                    <div className={styles.icon_box}>
                        <FaBookMedical/>
                    </div>
                    <p>Order your test online</p>
                </div>
                <div className={styles.step_box}>
                    <div className={styles.icon_box}>
                         <FaSyringe/>
                    </div>
                    <p>We collect your samples</p>
                </div>
                <div className={styles.step_box}>
                    <div className={styles.icon_box}> 
                        <FaNotesMedical/>
                    </div>
                    <p>Get your results after 48 hours</p>
                </div>
                <div className={styles.step_box}>
                    <div className={styles.icon_box}>
                        <FaUserMd/>
                    </div>
                    <p>We connect you to a Doctor</p>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Howmyituraworks;