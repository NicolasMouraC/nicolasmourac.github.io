import { useTranslation } from "react-i18next";
import astronautContact from "../images/astronaut_contact.webp";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center mt-[80px] mb-[60px]" id="Contact">
            <div className="grid grid-cols-2">
                <div>
                    <h2 className="font-medium text-[40px] md:text-[60px] mb-[10px]">{t('Contact Me')}</h2>
                    <h2 className="mb-[10px] text-sky-600 font-semibold">{t('Call me')}: +55 (11) 96607-7935</h2>
                    <a href="mailto:nicolasoutrog@gmail.com" className="button">{t('Send me an email')}</a>
                </div>
                <img srcset={astronautContact} alt="By catalyststuff on Freepik" className="max-h-[200px]"/>
            </div>
        </div>
    )
}

export default Contact;
