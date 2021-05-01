import Navbar from './Navbar.js';
import Hero from './Hero.js';
import About from './About.js';
import Project from './Project.js';
import Skills from './Skills.js';
import Education from './Education.js';
import Awards from './Awards.js';
import Footer from './Footer.js';


const Home = () => {
    return ( 
        <div className="Home">
            <Navbar/>
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
 
export default Home;