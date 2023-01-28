import React from "react";
import astronautLaptop from "./images/astronaut_laptop3.webp";

const About = () => {
    return (
        <section>
            <blockquote className="text-[20px] font-semibold md:text-[35px]">“If you’re willing to go through all the battling you got to go through
                 to get where you want to get, who’s got the right to stop you?”
                – Rocky Quotes</blockquote>
            <h1 className="text-[20px] font-medium my-[20px] md:text-[30px]">Looking for my <span className="text-sky-500">CV</span>?</h1>
            <div className="mb-[20px]">
                <h2 className="text-[18px] text-sky-500 mb-[5px] md:text-[26px]">Story section</h2>
                <div className="flex">
                    <img src={astronautLaptop} alt="Image by catalyststuff on Freepik" className="h-[100px] md:h-[300px]"/>
                    <p className="text-[16px] mb-[15px] font-light md:text-[22px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <h2 className="text-[18px] text-sky-500 mb-[5px] md:text-[26px]">What i believe as a developer?</h2>
                <div className="flex">
                    <p className="text-[16px] font-light md:text-[22px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <img src={astronautLaptop} alt="Image by catalyststuff on Freepik" className="h-[100px] md:h-[300px]"/>
                </div>
            </div>
        </section>
    )
}

export default About;