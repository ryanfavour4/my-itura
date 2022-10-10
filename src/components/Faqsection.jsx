import FaqAccordion from "./Accordion";
import style from './Faqsection.module.css'

const Faqsection = () => {
    return ( 
        <section className={style.Faq}>
            <div className="container">
                <div className={style.center_faq_section}>
                    <h4 className={style.description}>Frequently Asked Questions</h4>
                    <div className="accordion">
                        <FaqAccordion/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Faqsection;