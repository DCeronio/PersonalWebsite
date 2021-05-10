import Hero from './Hero.js';
import About from './About.js';
import ProjectTitleSlider from './ProjectTitleSlider.js';
import Skills from './Skills.js';
import Education from './Education.js';
import Awards from './Awards.js';


const Home = () => {
    return ( 
        <div className="Home">
            <Hero/>
            <About/>
            <ProjectTitleSlider/>
            <Skills/>
            <Education/>
            <Awards/>
        </div>  
     );
}
 
export default Home;