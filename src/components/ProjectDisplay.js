import {projects} from "./ProjectData.js";

const ProjectDisplay = () => {
    const url = window.location.href.split('/');
    console.log(url);
    const project = projects[url[url.length - 1]];
    return (  
        <div className="projectDisplay">
            <h2>{project.title}</h2>
            <h3>{project.tech}</h3>
            <ul>
                {project.points.map((point, index) => {
                    return(
                        <li key={index}>{point}</li>
                    );
                })}
            </ul>
        </div>
    );
}
 
export default ProjectDisplay;