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
      <Nav/>
      <div class="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
      </div>
        <Router>
          <Routes>
            <Route exact path='/' element={
              <div>
                <MainContainer />
                <div className="pt-8 px-16 pb-1 md:px-32 bg-white z-30 relative">
                  <Skills />
                  <Projects />
                  <Contact />
                </div>
              </div>
              }/> 
            <Route exact path="/about" element={
              <div className="pt-8 px-16 pb-1 md:px-32 bg-white z-30 relative">
                <About />
                <Contact />
              </div>
            }/>
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
