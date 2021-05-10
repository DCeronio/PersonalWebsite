
const Contact = () => {
    return ( 
        <>
        <div className="Contact">
            <h1>Send me a message</h1>
            <form>
                <input type="text" id="name" name="name" placeholder="Your Name"/>
                <textarea type="text" id="message" name="message" placeholder="Message"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        </>
     );
}
 
export default Contact;