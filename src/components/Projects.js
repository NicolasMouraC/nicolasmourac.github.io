import React from "react";
import RedditMinimalLogo from "./images/Reddit Minimal.png";
import WeatherAppLogo from "./images/Weather App.png";
import JammingLogo from "./images/Jamming.jpg";

const Projects = () => {
    const redditSkills = ["React", "Node", "Redux", "Tailwind", "Jest"];
    const weatherSkills = ["React", "API", "Redux", "Styled-Components","Jest"];
    const jammingSkills = ["React", "NPM"]

    return (
        <section className="my-[50px]" id="Projects">
            <div className="text-[40px] font-medium mb-[20px] md:text-[60px] underline decoration-sky-400 underline-offset-2 decoration-8">Projects</div>
            <article className="grid md:grid-cols-2 md:grid-rows-1 mb-[50px]">
                <div className="flex justify-center items-center">
                        <img 
                            src={RedditMinimalLogo} 
                            alt="Reddit Minimal Logo"
                            className="max-w-[400px] mb-[20px] md:mb-0 md:col-start-2 bg-cover w-3/4 transition ease-linear delay-100 hover:opacity-80 hover:-translate-y-[10px] hover:shadow-2xl duration-200">        
                        </img>
                </div>
                <div className="flex flex-col md:col-start-1 md:row-start-1">
                    <h3 className="text-[16px] font-extralight md:text-[18px] mb-[10px]">Personal Project</h3>
                    <h2 className="text-[40px] md:text-[60px] mb-[10px]">Reddit Minimal</h2>
                    <div className="flex flex-wrap mb-[10px]">
                        {redditSkills.map(el => {
                            return (
                                <span className="bg-slate-800 text-gray-100 text w-fit h-fit p-[10px] mr-[10px] font-normal mb-[10px]" key={el}>{el}</span>
                            )}
                        )}
                    </div>
                    <p className="text-[18px] font-extralight md:text-[20px mb-[10px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <button className="button">See this project online</button>
                </div>
            </article>
            <article className="grid md:grid-cols-2 md:grid-rows-1 mb-[50px]">
                <div className="flex justify-center items-center">
                        <img 
                            src={WeatherAppLogo} 
                            alt="Weather App Logo"
                            className="max-w-[400px] mb-[20px] md:mb-0 md:col-start-2 bg-cover w-3/4 transition ease-linear delay-100 hover:opacity-80 hover:-translate-y-[10px] hover:shadow-2xl duration-200">        
                        </img>
                </div>
                <div className="flex flex-col md:col-start-1 md:row-start-1">
                    <h3 className="text-[16px] font-extralight md:text-[18px] mb-[10px]">Personal Project</h3>
                    <h2 className="text-[40px] md:text-[60px] mb-[10px]">Weather App</h2>
                    <div className="flex flex-wrap mb-[10px]">
                        {weatherSkills.map(el => {
                            return (
                                <span className="bg-slate-800 text-gray-100 text w-fit h-fit p-[10px] mr-[10px] font-normal mb-[10px]" key={el}>{el}</span>
                            )}
                        )}
                    </div>
                    <p className="text-[18px] font-extralight md:text-[20px mb-[10px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <button className="button">See this project online</button>
                </div>
            </article>
            <article className="grid md:grid-cols-2 md:grid-rows-1 mb-[50px]">
                <div className="flex justify-center items-center">
                        <img 
                            src={JammingLogo} 
                            alt="Reddit Minimal Logo"
                            className="max-w-[400px] mb-[20px] md:mb-0 md:col-start-2 bg-cover w-3/4 transition ease-linear delay-100 hover:opacity-80 hover:-translate-y-[10px] hover:shadow-2xl duration-200">        
                        </img>
                </div>
                <div className="flex flex-col md:col-start-1 md:row-start-1">
                    <h3 className="text-[16px] font-extralight md:text-[18px] mb-[10px]">Personal Project</h3>
                    <h2 className="text-[40px] md:text-[60px] mb-[10px]">Jamming</h2>
                    <div className="flex flex-wrap mb-[10px]">
                        {jammingSkills.map((el, idx) => {
                            return (
                                <span className="bg-slate-800 text-gray-100 text w-fit h-fit p-[10px] mr-[10px] font-normal mb-[10px]" key={idx}>{el}</span>
                            )}
                        )}
                    </div>
                    <p className="text-[18px] font-extralight md:text-[20px mb-[10px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <button className="button">See this project online</button>
                </div>
            </article>
        </section>
    )
}

export default Projects;