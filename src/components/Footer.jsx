import style from './Footer.module.css'
import { Link } from 'react-router-dom'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return ( 
        <footer>
            <div className="container">
                <div className={style.center_flex}>
                    <ul className={style.footer_links}>
                        <li className={style.footer_link}><Link to='/'>About</Link></li>
                        <li className={style.footer_link}><Link to='/'>Blog</Link></li>
                        <li className={style.footer_link}><Link to='/'>Lab</Link></li>
                        <li className={style.footer_link}><Link to='/'>Partners</Link></li>
                        <li className={style.footer_link}><Link to='/'>Privacy Policies</Link></li>
                    </ul>
                    <ul className={style.social_media_links}>
                        <li className={style.social_media_link}><a href="/" target="_blank" rel="noopener noreferrer"><FaFacebook className={style.media_icon} /></a></li>
                        <li className={style.social_media_link}><a href="/" target="_blank" rel="noopener noreferrer"><FaTwitter className={style.media_icon} /></a></li>
                        <li className={style.social_media_link}><a href="/" target="_blank" rel="noopener noreferrer"><FaInstagram className={style.media_icon} /></a></li>
                    </ul>
                    <div className="copy_rights">
                        <p className="all_rights_copy">
                            &copy; 2022 MyItura. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;