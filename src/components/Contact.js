
const Contact = () => {
    return ( 
        <>
        <div className="Contact">
            <h1>Send me a message</h1>
            <form name="contact-form" method="POST" data-netlify="true">
                <input type="text" name="name" placeholder="Your Name"/>
                <textarea type="text" name="message" placeholder="Message"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
     );
}
 
export default Contact;