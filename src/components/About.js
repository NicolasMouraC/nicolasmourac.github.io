import astronautLaptop from "./images/astronaut_laptop3.webp";
import astronautRunning from "./images/astronaut_running.webp";

const About = () => {
    return (
        <section>
            <blockquote className="text-[20px] font-semibold md:text-[35px]">“If you’re willing to go through all the battling you got to go through
                 to get where you want to get, who’s got the right to stop you?”
                – Rocky Quotes</blockquote>
            <h1 className="text-[20px] font-medium my-[20px] md:text-[30px]">Looking for my 
            <a href="https://drive.google.com/file/d/1TuhI4z3eceouxYtj1yl6T35rE6ymiI6V/view?usp=sharing" target="_blank" rel="noreferrer" className="text-sky-600 font-medium hover:text-sky-300"> CV</a>?</h1>
            <div className="mb-[20px]">
                <h2 className="text-[18px] text-sky-500 mb-[5px] md:text-[26px]">Story section</h2>
                <div className="flex">
                    <img src={astronautLaptop} alt="By catalyststuff on Freepik" className="h-[100px] md:h-[300px]"/>
                    <div className="text-[16px] mb-[15px] font-light md:text-[22px]">
                        <p className="mb-[10px]">I was born in 2003, in São Paulo, Brazil. I had my first real contact with a computer at the age of 6, 
                        I was amazed with all that information, possibilities and dynamism that that evolved machine offered, 
                        all of this in an intel pentium. since then I've always ventured to find out what else could be done with that thing. 
                        I always had the habit of disassembling the components and understanding how they work, and, even without understanding it at the time, 
                        I would tinker with the programming to see the changes that would be caused. IT has always been my passion.</p>
                        
                        <p className="mb-[10px]">As a person, I believe that my ambition and discipline are my greatest attributes. 
                        I'm proud of my values ​​and the education my parents gave me, I intend to reach the top and bring them with me.</p>

                        <p className="mb-[10px]">Some random facts about me:</p>
                        <ul>
                            <li>- My curiosity about new things made me discover some hobbies, such as gym, anime and meditation.</li>
                            <li>- I am currently responsible for four dogs, two cats and a parrot. a house without animals has no shine.</li>
                            <li>- I don't like social networks, I value personal contact.</li>
                            <li>- I love açai.</li>
                        </ul>
                    </div>
                </div>
                <h2 className="text-[18px] text-sky-500 mb-[5px] md:text-[26px]">What i believe as a developer?</h2>
                <div className="flex">
                    <div className="flex flex-col text-[16px] font-light md:text-[22px]">
                        <p className="mb-[10px]">
                        I am a firm believer that clean code, 
                        performance and design standards are the cornerstones of every codebase.
                        In a work environment, communication and collaboration between individuals are essential for the good result of a project.
                        I've always been connected to technology, it was love at first sight. 
                        My first contact with programming was at the age of 10, at the time, 
                        with unity and flash for browser games. Code development has always been a hobby for me. 
                        However, since the height of the 2021 pandemic, I have started to take this hobby seriously.</p>
                        <p className="mb-[10px]">
                        I am very proud of the creation of this site. It took a few days of research and attempts.
                        </p>
                        <p className="mb-[10px]">
                        I would like to give some thanks to:
                        </p>
                        <ul>
                            <li>- <a href="https://aaspinwall.com" target="_blank" rel="noreferrer" className="text-sky-600 font-medium hover:text-sky-300">
                            Alejandro Aspinwall</a>, his portfolio page inspired me to create this site.</li>
                            <li>- <a href="https://br.freepik.com/autor/catalyststuff" target="_blank" rel="noreferrer" className="text-sky-600 font-medium hover:text-sky-300">
                            catalyststuff</a>, for the design of the astronaut figures, theme of this page.</li>
                        </ul>
                    </div>
                    <img src={astronautRunning} alt="By catalyststuff on Freepik" className="h-[100px] md:h-[300px]"/>
                </div>
            </div>
        </section>
    )
}

export default About;