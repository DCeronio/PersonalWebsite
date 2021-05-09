export const projects = [
    {
        title: "Disconnected Networks YouTube Senior Project",
        tech: "Technologies Used: Python, Click, YouTube Data API, JSON",
        points: ["Designed to allow for asynchronous YouTube video downloads for those with limited internet access", 
                 "Implemented client that creates JSON requests for video downloads",
                 "Created server that downloads and compresses videos from YoutTube Data API",
                 "Designed JSON response schema for download requests and server responses"
                ],
        webpage: "youtTubeProject"
    },
    {
        title: "Spartan Connect Website, SJSU Social Platform",
        tech: "Technologies Used: JavaScript, HTML, CSS, Cypress, MongoDB, node.js, Google Passport, Git, EJS",
        points: [
                "Features: Google SSO using SJSU email, personal profile, chatroom, campus map, club directory, and calendar with event creation",
                "Unit tested and page tested using Cypress",
                "Worked with group of seven using SCRUM project management and AGILE development techniques"
                ],
        webpage: "sjsuSocialProject"
    },
    {
        title: "Piman Networking Project",
        tech: "Technologies Used: Python, Git, Bitbucket, Linux, Wireshark",
        points: [
                "Project to manage and monitor sets of Raspberry Pi’s on a network",
                "Remotely boot Pi’s with DHCP, TFTP, UDP and then TCP",
                "Setup client and server running on remote Pi’s that monitor time, active processes, and CPU, RAM, and disk usage",
                "Setup alerts for Slack if monitoring data hits threshold",
                "ntegrated NTP server and client that updates time on Pi’s",
                "Worked with two separate groups of four"
                ],
        webpage: "networkingProject"
    }
]