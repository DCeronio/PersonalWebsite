import sjsu from '../images/sjsu.svg'

const Education = () => {
    return ( 
        <div className="Content Education">
            <div className="SchoolInfo">
                <h3>Education</h3>
                <p>B.S. in Computer Science</p>
                <p>San Jose State University, San Jose CA</p>
                <p>Graduated May 2020</p>
                <p>GPA: 3.84 / 4.00</p>
            </div>
            <img src={sjsu} alt="SJSU logo" width="378" height="404"/>
            
        </div>
     );
}
 
export default Education;