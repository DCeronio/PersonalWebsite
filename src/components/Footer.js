import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

const Footer = () => {
    return ( 
        <div id= "FooterSection" className="Footer">
            <div className="ContactInfo">   
                <p>Dylan Ceronio</p>
                <p>Sunnyvale, CA</p>
                <p>Email: DylanCeronio@gmail.com</p>
                <div className="links">
                    <a href="https://github.com/DCeronio"><img id="github" src={github} alt="github logo" width="50"/></a>
                    <a href="https://www.linkedin.com/in/dylanceronio/"><img id="linkedin" src={linkedin} alt="linkedin logo" width="50"/></a>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Footer;