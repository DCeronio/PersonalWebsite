import {RiCheckboxBlankCircleLine, RiCheckboxBlankCircleFill} from 'react-icons/ri';
const ProjectBullets = ({length, activeIndex}) => {
    const bullets = [];
    for(let i = 0; i < length; i++){
        if(i === activeIndex){
            bullets.push(<RiCheckboxBlankCircleFill key={i}/>);
        }
        else{
            bullets.push(<RiCheckboxBlankCircleLine key={i}/>);
        }
    }
    return ( 
        <div>
            {bullets}
        </div> 
     );
}
 
export default ProjectBullets;