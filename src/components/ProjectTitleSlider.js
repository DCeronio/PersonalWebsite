import {projects} from './ProjectData.js';
import {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import ProjectBullets from './ProjectBullets.js';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProjectTitleSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextProj = () =>{
        setCurrent(current === projects.length - 1 ? 0 : current + 1);
    }

    const prevProj = () =>{
        setCurrent(current === 0 ? projects.length - 1 : current - 1);
    }

    if(!Array.isArray(projects) || projects.length <= 0) { 
        return null;
    }

    const pageHref = [];

    projects.forEach((project) => {
         pageHref.push(["\\",project.webpage].join(""));
    });

    return ( 
        <div className="ProjectSlider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevProj}/>
            {projects.map((project, index) => {
                return (
                <div className={index === current ? 'projTitleActive' : 'projTitle'} key={index}>
                    {index === current && (<h1><Link to={`/project/${index}`}>{project.title}</Link></h1>)}
                </div>  
                )
            })}
            <div className="bullets">
                <ProjectBullets length={projects.length} activeIndex={current}/>
            </div>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextProj}/>
        </div>
     );
}
 
export default ProjectTitleSlider;