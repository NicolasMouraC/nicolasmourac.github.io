import React from "react";
import { AiFillStar } from 'react-icons/ai';
import photo from './images/myPhoto.jpeg';
import astronautBook from './images/astronaut_book.webp';

const Skills = () => {
    const skills = ["React", "Node", "JavaScript", "Python", "HTML", "CSS", "TailwindCSS", "Styled-Components", "Firebase", "MySQL", "MongoDB", "Git", "Jest", "Mocha"]

    return (
        <section className="mt-[20px]" id="Skills">
            <div className=" flex items-center text-[40px] font-medium mb-[20px] underline decoration-sky-400 underline-offset-2 decoration-8">
                <span className="text-[40px] md:text-[60px] flex items-center">
                    Skills 
                    <img src={astronautBook} alt="Image by catalyststuff on Freepik" className="h-[1em]"></img>
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
                    <h2 className="text-[26px] font-medium text-sky-600 flex md:text-[30px]">
                        Always Dreaming Big
                        <AiFillStar color="yellow"/>
                    </h2>
                    <p className="text-[20px] font-light md:text-[24px]">
                        I always had interest in tech. My first contact with programming was when i was 12 years-old.
                        Since then, I have been practicing various knowledge related to technology in general. 
                        Lately I discovered the magic and possibilities of web development. 
                        Whenever I can, I always seek new knowledge and skills related to it.
                    </p>
                    <button className="button">See more about my personal life</button>
                </article>
            </div>
        </section>
    )
}

export default Skills;