import { Link } from 'react-router-dom'
import style from './Bookatestsection.module.css'

const Bookatestsection = () => {
    return (
        <section id="book_a_test_section">
            <div className="container">
                <div className={style.view_package_box}>
                    <Link to="/" id="book_a_test"></Link>
                    <h3 className={style.view_package_description}>
                        Diagnostic health test and screening made easy for you. Get vital and accurate information about your health
                    </h3>
                    <div className={style.gender_packages_flex_box}>
                        <div className={`male_health_package ${style.package_box}`}>
                            <div className={style.packages_img_box}>
                                <img src="/images/male_health_check.png" alt=""/>
                            </div>
                            <div className={style.package_card_bottom}>
                                <p className={style.health_test}>
                                    Male Health Tests
                                </p>
                                <button className={style.package_btn}>
                                    <Link to="/" id="male_package_link">VIEW PACKAGE</Link>
                                </button>
                            </div>
                        </div>

                        <div className={`female_health_package ${style.package_box}`}>
                            <div className={style.packages_img_box}>
                                <img src="/images/female_health_check.png" alt=""/>
                            </div>
                            <div className={style.package_card_bottom}>
                                <p className={style.health_test}>
                                    Female Health Tests
                                </p>
                                <button className={style.package_btn}>
                                    <Link to="/" id="female_package_link">VIEW PACKAGE</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Bookatestsection;