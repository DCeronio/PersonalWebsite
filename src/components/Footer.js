import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

const Footer = () => {
    return ( 
        <div>
            <h3>Send Me A Message</h3>
            <h3>Contact Info</h3>   
            <input type="text" />
            <p>Dylan Ceronio</p>
            <p>Sunnyvale, CA</p>
            <p>Email: DylanCeronio@gmail.com</p>
            <img src={github} alt="github logo" width="126" height="121"/>
            <img src={linkedin} alt="linkedin logo" width="81" height="74"/>
        </div>
     );
}
 
export default Footer;