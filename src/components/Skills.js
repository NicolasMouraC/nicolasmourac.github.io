import React from "react";
import { AiFillStar } from 'react-icons/ai';
import Photo from './images/myPhoto.jpeg';

const Skills = () => {
    return (
        <section>
            <div className="text-[40px] font-medium mb-[20px] md:text-[60px]">My <span className="underline decoration-sky-400 underline-offset-2 decoration-8">Skills</span></div>
            <div className="grid gap-[40px] grid-cols-1 md:grid-cols-4">
                <img 
                    src={Photo}
                    className="max-h-[400px]"
                    alt="Nicolas Picture">
                </img>
                <article className="md: md:col-start-2 md:col-span-3">
                    <h2 className="text-[26px] font-medium text-sky-400 flex md:text-[30px]">
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