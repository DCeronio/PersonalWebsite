import './App.css';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Project from './components/Project.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Awards from './components/Awards.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Education/>
      <Awards/>
      <Footer/>
    </div>
  );
}

export default App;
