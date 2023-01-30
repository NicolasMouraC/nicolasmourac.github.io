import RedditMinimalLogo from "./images/Reddit Minimal.png";
import WeatherAppLogo from "./images/Weather App.png";
import JammingLogo from "./images/Jamming.webp";
import astronautLaptop from "./images/astronaut_laptop2.webp";

const Projects = () => {
    const redditSkills = ["React", "Node", "Redux", "Tailwind", "Jest"];
    const weatherSkills = ["React", "API", "Redux", "Styled-Components","Jest"];
    const jammingSkills = ["React", "NPM"]

    return (
        <section className="my-[50px]" id="Projects">
            <div className="font-medium mb-[20px] underline decoration-sky-400 underline-offset-2 decoration-8">
                <span className="text-[40px] md:text-[60px] flex items-center">
                    Projects
                    <img src={astronautLaptop} alt="By catalyststuff on Freepik" className="h-[1em]"/>
                </span>
            </div>
            <article className="grid md:grid-cols-2 md:grid-rows-1 mb-[50px]">
                <div className="flex justify-center items-center">
                        <a href="https://nicolasmourac.github.io/Reddit-Clone/" target="_blank" rel="noreferrer" className="flex justify-center items-center md:justify-start md:items-start">
                            <img 
                                src={RedditMinimalLogo} 
                                alt="Reddit Minimal Logo"
                                className="max-w-[400px] mb-[20px] md:mb-0 md:col-start-2 bg-cover w-3/4 transition ease-linear delay-100 hover:opacity-80 hover:-translate-y-[10px] hover:shadow-2xl duration-200">        
                            </img>
                        </a>
                </div>
                <div className="flex flex-col md:col-start-1 md:row-start-1">
                    <h3 className="text-[16px] font-extralight md:text-[18px] mb-[10px] text-center md:text-left">Personal Project</h3>
                    <h2 className="text-[40px] md:text-[60px] mb-[10px] text-center md:text-left">Reddit Minimal</h2>
                    <div className="flex flex-wrap mb-[10px] justify-center md:justify-start">
                        {redditSkills.map(el => {
                            return (
                                <span className="bg-slate-800 text-gray-100 text w-fit h-fit p-[10px] mr-[10px] font-normal mb-[10px] transition ease-linear delay-100 hover:scale-125" key={el}>{el}</span>
                            )}
                        )}
                    </div>
                    <p className="text-[18px] font-extralight md:text-[20px mb-[10px]">
                    In this project, 
                    I thought about developing a reddit clone, using their public Json API. 
                    I am proud of this work because it was the first one where I planned from beginning to end. 
                    Overall, I really liked the end result.</p>
                    <a href="https://nicolasmourac.github.io/Reddit-Clone/" target="_blank" rel="noreferrer" className="button">See this project online</a>
                </div>
            </article>

            <article className="grid md:grid-cols-2 md:grid-rows-1 mb-[50px]">
                <div className="flex justify-center items-center">
                        <a href="https://nicolasmourac.github.io/Weather-App/" target="_blank" rel="noreferrer" className="flex justify-center items-center md:justify-start md:items-start">
                            <img 
                                src={WeatherAppLogo} 
                                alt="Weather App Logo"
                                className="max-w-[400px] mb-[20px] md:mb-0 md:col-start-2 bg-cover w-3/4 transition ease-linear delay-100 hover:opacity-80 hover:-translate-y-[10px] hover:shadow-2xl duration-200">        
                            </img>
                        </a>
                </div>
                <div className="flex flex-col md:col-start-1 md:row-start-1">
                    <h3 className="text-[16px] font-extralight md:text-[18px] mb-[10px] text-center md:text-left">Personal Project</h3>
                    <h2 className="text-[40px] md:text-[60px] mb-[10px] text-center md:text-left">Weather App</h2>
                    <div className="flex flex-wrap mb-[10px] justify-center md:justify-start">
                        {weatherSkills.map(el => {
                            return (
                                <span className="bg-slate-800 text-gray-100 text w-fit h-fit p-[10px] mr-[10px] font-normal mb-[10px] transition ease-linear delay-100 hover:scale-125" key={el}>{el}</span>
                            )}
                        )}
                    </div>
                    <p className="text-[18px] font-extralight md:text-[20px mb-[10px]">
                    In this project, 
                    I thought of making something simple, 
                    intuitive and quick to access information, 
                    similar to a smartphone application. 
                    The design was inspired by the google weather widget.</p>
                    <a href="https://nicolasmourac.github.io/Weather-App/" target="_blank" rel="noreferrer" className="button">See this project online</a>
                </div>
            </article>

            <article className="grid md:grid-cols-2 md:grid-rows-1 mb-[50px]">
                <div className="flex justify-center items-center">
                    <a href="https://nicolasmourac.github.io/Jammming/" target="_blank" rel="noreferrer" className="flex justify-center items-center md:justify-start md:items-start">
                        <img 
                            src={JammingLogo} 
                            alt="Reddit Minimal Logo"
                            className="max-w-[400px] mb-[20px] md:mb-0 md:col-start-2 bg-cover w-3/4 transition ease-linear delay-100 hover:opacity-80 hover:-translate-y-[10px] hover:shadow-2xl duration-200">        
                        </img>
                    </a>
                </div>
                <div className="flex flex-col md:col-start-1 md:row-start-1">
                    <h3 className="text-[16px] font-extralight md:text-[18px] mb-[10px] text-center md:text-left">Co-Authorship Project</h3>
                    <h2 className="text-[40px] md:text-[60px] mb-[10px] text-center md:text-left">Jamming</h2>
                    <div className="flex flex-wrap mb-[10px] justify-center md:justify-start">
                        {jammingSkills.map((el, idx) => {
                            return (
                                <span className="bg-slate-800 text-gray-100 text w-fit h-fit p-[10px] mr-[10px] font-normal mb-[10px] transition ease-linear delay-100 hover:scale-125" key={idx}>{el}</span>
                            )}
                        )}
                    </div>
                    <p className="text-[18px] font-extralight md:text-[20px mb-[10px]">
                    This project is not entirely mine, 
                    it is part of the codecademy curriculum. 
                    They give us the basis of the page style so that we can implement the application with integration with the spotify API.</p>
                    <a href="https://nicolasmourac.github.io/Jammming/" target="_blank" rel="noreferrer" className="button">See this project online</a>
                </div>
            </article>
        </section>
    )
}

export default Projects;