import './App.css';
import './ButtonAnimation.css';
import MainContainer from './components/MainContainer.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="box-border font-['Inter']">
      <MainContainer />
      <div className="pt-8 px-16 pb-1 md:px-32">
        <Skills />
        <Projects />
        <Contact />
      </div> 
      <Footer />
    </div>
  );
}

export default App;
