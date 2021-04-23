import c from '../images/c.svg';
import css3 from '../images/css3.svg';
import git from '../images/git.svg';
import html5 from '../images/html5.svg';
import java from '../images/java.svg';
import js from '../images/js.svg';
import mysql from '../images/mysql.svg';
import python from '../images/python.svg';
import react from '../images/react.svg';


const Skills = () => {
    return (
        <div id= "SkillsSection" className=" Content Skills">
            <div className="row">
                <img id= "C" src={c} alt="C logo" width="270" height="250"/>
                <img id="Js" src={js} alt="JavaScript logo" width="184" height="186"/>
                <img id="Git" src={git} alt="git logo" width="221" height="221"/>
            </div>
            
            <div className="row">
                <img id="Css" src={css3} alt="Css3 logo" width="213" height="290"/>
                <img id="Java" src={java} alt="java logo" width="213" height="290"/>
                <img id="html" src={html5} alt="html5 logo" width="213" height="300"/>
            </div>
            
            <div className="row">
                <img id="react" src={react} alt="React.js logo" width="272.18" height="250"/>
                <img id="Python" src={python} alt="Python logo" width="228" height="229"/> 
                <img id="Sql" src={mysql} alt="MySql logo" width="261" height="245"/>       
            </div>   
        </div>
      );
}
 
export default Skills;
