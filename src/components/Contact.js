import astronautContact from "./images/astronaut_contact.webp";

const Contact = () => {
    return (
        <div className="flex justify-center mt-[80px] mb-[60px]">
            <div className="grid grid-cols-2">
                <div>
                    <h2 className="font-medium text-[40px] md:text-[60px] mb-[10px]">Contact Me</h2>
                    <h2 className="mb-[10px] text-sky-600 font-semibold">Call me: +55 (99) 98520-3232</h2>
                    <a href="mailto:nicolasoutrog@gmail.com" className="button">Send me an email</a>
                </div>
                <img srcset={astronautContact} alt="Image by catalyststuff on Freepik" className="max-h-[200px]"/>
            </div>
        </div>
    )
}

export default Contact;