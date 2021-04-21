const Project = () => {
    const projects = [
        {
            title: "Disconnected Networks YouTube Senior Project",
            tech: "Technologies Used: Python, Click, YouTube Data API, JSON",
            points: ["Designed to allow for asynchronous YouTube video downloads for those with limited internet access", 
                     "Implemented client that creates JSON requests for video downloads",
                     "Created server that downloads and compresses videos from YoutTube Data API",
                     "Designed JSON response schema for download requests and server responses"]
        }
    ]


    return ( 
        <div id= "ProjectSection" className="Content Project">
            <h1>{projects[0].title}</h1>
        </div>
     );
}
 
export default Project;