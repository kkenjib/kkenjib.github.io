import React from "react";

import './index.css';
import RLogo from './react-logo.jpg';

function HomeContent() {
        return (
                <div className="container-fluid">                
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <p>
                        I wanted to make a website to display my portfolio and talk about side projects I've been working
                        on the past few years, so I figured I would just make a WordPress site and keep it simple. But then a couple
                        people I know told me I should do it in React.js. I'm a data person, not a front-end engineer so I was pretty skeptical of trying
                        something new. The more it was explained to me, the more I saw its potential and decided to take the time and
                        try to put my site together in React. It took me about 7 days of coding and tutorials after work to get me to
                        the point of having the React up and running. By no means am I finished but I'm proud of what I was able to
                        accomplish in that time. I look forward to building more things here! 
                        </p>
                        <hr style={{borderColor:"#FEB06E"}}></hr>
                        <p>
                        Right now, all I have up is my resume on the About tab. I think you'll find that it's a pretty unique way to display one by using
                        React. My next goals for this site is to incorporate my data visualizations and Python code snippets into a Projects
                        tab and to make the site better suited for mobile users. After that, I would like to have a running blog here to
                        discuss how I was able to create some of these tools and projects and other random tidbits I find interesting.
                        </p>
                        <hr style={{borderColor:"#FEB06E"}}></hr>
                        <p>
                        One final note, this is a React app which by default is a single page application. That means that a refresh of the page takes you back
                        to the default page which happens to be this Home page. The next step would be to learn React Router which allows you to anchor certain
                        components to a URL location. This is how most pages would use React and still feel like a normal website, and that will be my next project.
                        </p>
                        <hr style={{borderColor:"#FEB06E"}}></hr>
                        <p>
                        Happy exploring!
                        </p>
                        <center><img src={RLogo} alt="React logo" height="500" width="900"></img></center>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
        )
}

export default HomeContent;