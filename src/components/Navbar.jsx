import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    let [toggleNav,setToggleNav] = useState(false)

    let slide = toggleNav ? 'slide' : '';

    const ToggleSideNav = ()=>{
        setToggleNav(toggleNav => !toggleNav)
    }

    return ( 
        <div className={styles.top_nav_box}>
            <div className={`container ${styles.flex_row}`} >
                <div className={styles.menu_box}>
                    < FaBars className={styles.menu_icon} onClick={ToggleSideNav}/>
                </div>
                <div className={styles.logo_box}>
                    <h2 className={styles.logo}>
                        <a href="/">
                            <span className={styles.grey_text}>
                                My</span>Itura
                        </a>
                    </h2>
                </div>
                <div className={`${styles.links_box} ${slide}`}>
                    <ul className={styles.nav_links}>
                        <li className={styles.link}><a href="/">Lab</a></li>
                        <li className={styles.link}><a href="/">Packages</a></li>
                        <li className={styles.link}><a href="/">Support</a></li>
                        <li className={styles.link}><a href="/">Blog</a></li>
                    </ul>
                </div>
                <div className={styles.cart_box}>
                    <span className={styles.item_count}>0</span>
                    <FaShoppingBag className={styles.icon}/>
                </div>
            </div>
        </div>
     );
}

export default Navbar;