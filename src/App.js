import './App.css';
import './ButtonAnimation.css';
import MainContainer from './components/MainContainer.js';
import Skills from './components/Skills.js';

function App() {
  return (
    <div className="box-border">
      <MainContainer/>
      <section className="pt-8 pl-10 pr-20 pb-1 md:pl-24">
        <Skills />
      </section>
    </div>
  );
}

export default App;
