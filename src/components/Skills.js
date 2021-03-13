import c from '../images/c.svg';
import css3 from '../images/css3.png';
import git from '../images/git.png';
import html5 from '../images/html5.png';
import java from '../images/java.svg';
import js from '../images/js.png';
import mysql from '../images/mysql.png';
import python from '../images/python.png';
import react from '../images/react.png';


const Skills = () => {
    return (
        <div>
            <img src={c} alt="C logo" width="270" height="250"/>
            <img src={js} alt="JavaScript logo" width="184" height="186"/>
            <img src={git} alt="git logo" width="221" height="221"/>
            
            <img src={css3} alt="Css3 logo" width="213" height="290"/>
            <img src={java} alt="java logo" width="213" height="290"/>
            <img src={html5} alt="html5 logo" width="213" height="290"/>
            
            <img src={react} alt="React.js logo" width="272.18" height="250"/>
            <img src={mysql} alt="MySql logo" width="261" height="245"/>
            <img src={python} alt="Python logo" width="228" height="229"/>  
        </div>
      );
}
 
export default Skills;
