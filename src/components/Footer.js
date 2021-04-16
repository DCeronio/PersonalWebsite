import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

const Footer = () => {
    return ( 
        <div className="Content Footer">
            <div className="ContactInfo">
                <h3>Contact Info</h3>   
                <p>Dylan Ceronio</p>
                <p>Sunnyvale, CA</p>
                <p>Email: DylanCeronio@gmail.com</p>
                <img id="github" src={github} alt="github logo" width="100"/>
                <img id="linkedin" src={linkedin} alt="linkedin logo" width="100"/>
            </div>
            
        </div>
     );
}
 
export default Footer;