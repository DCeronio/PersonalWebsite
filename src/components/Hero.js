import '../App.css';
import headshot from '../images/headshot.png';

const Hero = () => {

    return (
        <div className="Hero">
            <div id="color"></div>
            <div id="background"></div>
            <div className="topNav">
                <h2 id="Skills"><a href="#SkillsSection">Skills</a></h2>
                <h2 id="Projects"><a href="#ProjectSection">Projects</a></h2>
                <h2 id="Contact"><a href="#FooterSection">Contact</a></h2>
            </div>
            <div className="Titles">
                <img src={headshot} alt='Professional Headshot' width="242" height="230" />
                <h1>DYLAN CERONIO</h1>
                <h2>Computer Scientist looking for Full-Time Software Engineering Opportunities</h2>
            </div>
        </div>
    );
}

export default Hero;