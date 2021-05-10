import {Link} from "react-router-dom/cjs/react-router-dom.min";
import {projects} from "./ProjectData.js";

const ProjectPage = () => {
    const pageHref = [];

    projects.forEach((project) => {
         pageHref.push(["\\",project.webpage].join(""));
    });
    return ( 
        <div className="projectBoard">
            {projects.map((project, index) =>{
                return(
                    <h1 key={index}>
                        <Link to={`/project/${index}`}>{project.title}</Link>
                    </h1>
                )    
            })}
           
        </div>
     );
}
 
export default ProjectPage;