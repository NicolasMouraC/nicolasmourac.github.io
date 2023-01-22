import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import "../Animation.css"

const MainContainer = () => {
    return (
            <main className="pt-8 pl-10 pr-10 pb-1 bg-slate-800 h-screen relative md:pl-24">
                <div className="background">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
                <section>
                    <div className="absolute bottom-[50px]">
                        <header className="text-gray-100 text-[40px] font-bold my-[20px] flex flex-wrap md:text-[60px]">
                            <h1 className="mr-2">Hi,</h1>
                            <h1 className="mr-2">I'm</h1>
                            <h1 className="mr-2">Nicolas</h1>
                            <h1 className="mr-2">|</h1>
                            <h1 className="mr-2 underline decoration-sky-400 underline-offset-2 decoration-8">Front</h1>
                            <h1 className="mr-2 underline decoration-sky-400 underline-offset-2 decoration-8">End</h1>
                            <h1 className="mr-2 underline decoration-sky-400 underline-offset-2 decoration-8">Developer</h1>
                        </header>
                        <div className="flex space-x-4 my-[20px]">
                            <a href="https://github.com/NicolasMouraC" className="text-sky-400 text-[30px] transition ease-linear delay-150 hover:text-stone-100 hover:scale-150" >
                                <BsGithub/>
                            </a>
                            <a href="https://www.linkedin.com/in/nicolas-moura-b677b8232/" className="text-sky-400 text-[30px] transition ease-linear delay-150 hover:text-stone-100 hover:scale-150" >
                                <BsLinkedin/>
                            </a>
                            <a href="mailto:nicolasoutrog@gmail.com" className="text-sky-400 text-[30px] transition ease-linear delay-150 hover:text-stone-100 hover:scale-150">
                                <MdEmail/>
                            </a>
                        </div>
                        <article className="w-[400px] text-[20px] md:text-[25px]">
                            <p className="text-gray-300">
                                I love to explore new things and possibilities 🚀 I'm a lifelong learner 🎓 Disciplined as a military 🎖️ and maybe I have a thing for weightlifting 💪
                            </p>
                        </article>
                    </div>
                </section>
            </main>
            
    )
}

export default MainContainer;