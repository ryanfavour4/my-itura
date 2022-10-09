import { Link } from 'react-router-dom'
import styles from './Costomhealthtest.module.css'
import Package from './Package';

const Costomhealthtest = () => {
    return (
        <section className={styles.customhealthtests}>
            <div className="container">
                <div className={styles.custom_health_tests_box}>
                    <h4 className={styles.custom_health_description}>
                        Customise your own package.<br />Order specific health tests
                    </h4>
                    <div className={styles.test_packages_box_grid}>
                        
                        <Package/>
                        <Package/>
                        <Package/>
                        <Package/>
                        <Package/>
                        <Package/>

                    </div>
                    <Link to="/" className={styles.view_all_test}>VIEW ALL TESTS</Link>
                </div>
            </div>
        </section>
    );
}

export default Costomhealthtest;