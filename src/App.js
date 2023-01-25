import './App.css';
import './ButtonAnimation.css';
import MainContainer from './components/MainContainer.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="box-border font-['Inter']">
      <MainContainer/>
      <section className="pt-8 px-16 pb-1 md:px-32">
        <Skills />
        <Projects />
      </section>
    </div>
  );
}

export default App;
