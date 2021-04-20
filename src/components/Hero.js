import '../App.css';
import headshot from '../images/headshot.png';

const Hero = () => {

    return (
        <div className="Content Hero">
            <div id="background"></div>
            <div className="topNav">
                <h2 id="Skills">Skills</h2>
                <h2 id="Projects">Projects</h2>
                <h2 id="Contact">Contact</h2>
            </div>
            <img src={headshot} alt='Professional Headshot' width="242" height="230" />
            <h1>DYLAN CERONIO</h1>
            <h2 id="subtitle">Computer Scientist looking for Full-Time Software Engineering Opportunities</h2>
        </div>
    );
}

export default Hero;