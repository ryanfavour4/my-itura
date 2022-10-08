import styles from './Package.module.css'

const Package = () => {
    return (
        <div className={styles.test_package}>
            <div className={styles.text_up}>
                <h2 className={styles.package_name}>CBC</h2>
                <p className={styles.package_desc}>
                    measures different parts of your blood, including red and white blood cells, platelets, and hemoglobin
                </p>
                <h3 className={styles.package_price}>1000 NGN</h3>
            </div>
            <div className={styles.btn_down}><button className={styles.add_to_cart_btn}>ADD TO CART</button></div>
        </div>
        );
}

export default Package;