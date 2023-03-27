import photo from './images/myPhoto.jpeg';
import astronautBook from './images/astronaut_book.webp';
import astronautRocket from './images/astronaut_rocket.webp';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();
    const skills = ["React", "Node", "JavaScript", "Python", "HTML", "CSS", "TailwindCSS", "Styled-Components", "Firebase", "MySQL", "MongoDB", "Git", "Jest", "Mocha"]

    return (
        <section className="mt-[20px]" id="Skills">
            <div className=" flex items-center text-[40px] font-medium mb-[20px] underline decoration-sky-400 underline-offset-2 decoration-8">
                <span className="text-[40px] md:text-[60px] flex items-center">
                    {t('Skills')} 
                    <img src={astronautBook} alt="By catalyststuff on Freepik" className="h-[1em]"></img>
                </span>
            </div>
            <div className="grid gap-[40px] grid-cols-1 md:grid-cols-4">
                <img 
                    src={photo}
                    className="max-h-[400px]"
                    alt="Nicolas Profile">
                </img>
                <article className="md:col-start-2 md:col-span-3">
                    <div className="flex flex-wrap">
                        {skills.map((el, idx) => {
                            return (
                                <span className="bg-slate-800 text-gray-100 text w-fit h-fit p-[10px] mr-[10px] font-normal mb-[10px] transition ease-linear delay-100 hover:scale-125" key={idx}>{el}</span>
                            )}
                        )}
                    </div>
                    <h2 className="text-[26px] font-medium text-sky-500 flex items-center md:text-[30px]">
                        {t('Always Dreaming Big')}
                        <img src={astronautRocket} alt="By catalyststuff on Freepik" className="h-[2em]"/>
                    </h2>
                    <p className="text-[20px] font-light md:text-[24px]">
                        {t('I always had interest in tech. My first contact with programming was when i was 12 years-old.')}
                        {t('Since then, I have been practicing several knowledge related to technology in general.')} 
                        {t('Lately I discovered the magic and possibilities of web development.')} 
                        {t('Whenever I can, I always seek new knowledge and skills related to it.')}
                    </p>
                    <Link to={"/about"} className="button">{t('See more about my personal life')}</Link>
                </article>
            </div>
        </section>
    )
}

export default Skills;