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
                    <a href="#book_a_test">
                        BOOK A TEST
                    </a>
                </button>
                <button className={styles.btn_secondary}>
                    <a href="#chat_a_doctor">
                        CHAT WITH A DOCTOR
                    </a>
                </button>
            </div>
        </div>
    </section>
     );
}
 
export default Herosection;