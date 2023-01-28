import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import astronautLaptop from "./images/astronaut_laptop.webp";
import "../Animation.css"

const MainContainer = () => {
    return (
            <main className="bg-slate-800 h-screen flex z-0">
                <div className="mt-auto pt-8 pl-10 pr-10 md:pl-24">
                    <div className="background z-10">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <section className="mt-auto">
                        <div className="flex justify-center items-center">
                            <img src={astronautLaptop} alt="Image by catalyststuff on Freepik" className="md:hidden z-20"></img>
                        </div>
                        <header className="text-gray-100 text-[40px] font-bold flex flex-wrap md:text-[60px]">
                            <h1 className="mr-2 z-20">Hi,</h1>
                            <h1 className="mr-2 z-20">I'm</h1>
                            <h1 className="mr-2 z-20">Nicolas</h1>
                            <h1 className="mr-2 z-20">|</h1>
                            <h1 className="mr-2 underline decoration-sky-400 underline-offset-2 decoration-8 z-20">Front</h1>
                            <h1 className="mr-2 underline decoration-sky-400 underline-offset-2 decoration-8 z-20">End</h1>
                            <h1 className="mr-2 underline decoration-sky-400 underline-offset-2 decoration-8 z-20">Developer</h1>
                        </header>
                        <div className="flex space-x-4">
                            <a href="https://github.com/NicolasMouraC" target="_blank" title="Github" className="text-sky-400 text-[30px] transition ease-linear delay-150 hover:text-stone-100 hover:scale-150 z-20" >
                                <BsGithub/>
                            </a>
                            <a href="https://www.linkedin.com/in/nicolas-moura-b677b8232/" target="_blank" title="Linkedin" className="text-sky-400 text-[30px] transition ease-linear delay-150 hover:text-stone-100 hover:scale-150 z-20" >
                                <BsLinkedin/>
                            </a>
                            <a href="mailto:nicolasoutrog@gmail.com" target="_blank" title="Email" className="text-sky-400 text-[30px] transition ease-linear delay-150 hover:text-stone-100 hover:scale-150 z-20">
                                <MdEmail/>
                            </a>
                        </div>
                        <article className="text-[20px] md:text-[25px] md:flex items-center">
                            <p className="text-stone-100 font-elight w-[400px] z-20">
                                I love to explore new things and possibilities 🚀
                                I'm a lifelong learner 🎓 
                                Disciplined as a military 🎖️ 
                                and maybe I have a thing for weightlifting 💪
                            </p>
                            <img src={astronautLaptop} alt="Image by catalyststuff on Freepik" className="hidden md:block z-20"></img>
                        </article>
                    </section>
                </div>
            </main>
            
    )
}

export default MainContainer;