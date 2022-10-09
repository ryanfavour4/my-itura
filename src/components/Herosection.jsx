import { Link } from 'react-router-dom'
import styles from './Herosection.module.css'

const Herosection = () => {
    return ( 
        <section className={styles.hero_section}>
        <div className={`container ${styles.flex_center}`}>
            <div className={styles.ad_copy_text}>
                <h1 className={styles.head_title}>
                    Get tested at the <br/> comfort of your home
                </h1>
                <p className={styles.description}>
                    <small>
                        Get accurate test results on your own schedule and without
                        having to go to a medical laboratory or office
                    </small>
                </p>
            </div>
            <div className={styles.hero_cta_box}>
                <button className={styles.btn_primary_green}>
                    <Link to="#book_a_test">
                        BOOK A TEST
                    </Link>
                </button>
                <button className={styles.btn_secondary}>
                    <Link to="#chat_a_doctor">
                        CHAT WITH A DOCTOR
                    </Link>
                </button>
            </div>
        </div>
    </section>
     );
}
 
export default Herosection;