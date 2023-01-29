import './App.css';
import './ButtonAnimation.css';
import MainContainer from './components/MainContainer.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Nav from './components/NavBar.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="box-border font-['Inter']">
        <Router>
          <Routes>
            <Route exact path='/' element={
              <div>
                <MainContainer />
                <div className="pt-8 px-16 pb-1 md:px-32">
                  <Skills />
                  <Projects />
                </div>
              </div>}/> 
            <Route exact path="/about" element={
            <div>
              <div className="pt-8 px-16 pb-1 md:px-32">
                <About />
              </div>
            </div>}/>
          </Routes>
        </Router>

        <Contact />
      <Footer />
    </div>
  );
}

export default App;
