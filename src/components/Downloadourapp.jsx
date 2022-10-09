import { Link } from 'react-router-dom'
import styles from './Downloadourapp.module.css'

const Downloadourapp = () => {
    return (
        <section className={styles.download_our_app}>
                <div className="container">
                    <div className={styles.flex_box_download_app}>
                        <div className={styles.green_bg_download_box}>
                                <h1 className={styles.heading}>Get vital information
                                <br/>about your health</h1>
                                <p className={styles.description}>
                                    Book your health test, get your test results and consult a doctor - all on the <b>MYITURA APP</b>
                                </p>
                                <div className={styles.download_btns_box}>
                                        <Link to="/" target="_blank" className={styles.download_link}>
                                            <img src="./Images/apple_download_btn.png" alt=""/>
                                        </Link>
                                        <Link to="/" target="_blank" className={styles.download_link}>
                                            <img src="./Images/googleplay_download_btn.png" alt=""/>
                                        </Link>
                                </div>
                        </div>
                        <div className={styles.female_doctor_img_box}>
                            <img src="./Images/female_doctor.png" alt="" className={styles.female_doctor_img}/>
                        </div>
                    </div>
                </div>
        </section>
     );
}

export default Downloadourapp;