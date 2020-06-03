import React from "react";

import treemap from "./treemap.png";

function BIRL () {
    return (
        <div className="container-fluid">    
            <div className="row">            
                <div className="col-lg-2"></div>
                <div className="col-lg-7">
                    <div style={{borderStyle:"solid",padding:50,lineHeight:1,margin:"4px"}}>
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Kevin Kenji Bierig</h3>
                                <p>Phone: 509-863-8715</p>
                                <p>Email: kbierig@email.arizona.edu</p>
                                <p>Website: kenjib.me</p>
                                <hr style={{borderColor:"#4153FF"}}></hr>
                                <h4>Education</h4>
                                <hr style={{borderColor:"#FEB06E"}}></hr>
                                <p><strong>University of Arizona</strong></p>
                                <p><em>BS Mathematics - Focus in Probability and Statistics</em></p>
                                <p><em>BSBA Finance</em></p>
                                <p><strong>Western Governors University</strong></p>
                                <p><em>BS Data Management and Data Analytics</em></p>
                                <h4>Training and Certifications</h4>
                                <hr style={{borderColor:"#FEB06E"}}></hr>
                                <p>Udacity Data Analyst Nanodegree</p>
                                <p style={{marginLeft:40}}><em>Project Modules: Introductory Data Analysis with NumPy and Pandas,
                                    Machine Learning with sklearn, 
                                    Exploratory Data Analysis with RStudio, Data Wrangling with SQL,
                                    Data Visualization with Tableau</em></p>
                                <p>CompTIA A+</p>
                                <p>CompTIA Network+</p>
                                <p>CompTIA Project+</p>
                                <p>CIW Data Analyst</p>
                                <p>Oracle Database Administrator Certified Associate</p>
                                <p style={{marginLeft:40}}><em>Oracle 1Z0-061</em></p>
                                <p style={{marginLeft:40}}><em>Oracle 1Z0-062</em></p>
                            </div>
                            <div className="col-lg-6">
                                <h4>Work Experience</h4>
                                <hr style={{borderColor:"#FEB06E"}}></hr>
                                <p><strong>Network Technologies International (TS/SCI Clearance)</strong></p>
                                <p><em>Database Administrator (July 2019 - Present)</em></p>
                                <ul>
                                    <li>Developed and documented Oracle APEX applications</li>
                                    <li>Prepared and loaded metadata statistics for client reports</li>
                                    <li>Deployed software and edited web content on Linux-based web servers</li>
                                    <li>Optimized application performance through database tuning while maintaining data integrity</li>
                                </ul>
                                <p><em>Database Analyst II (January 2016 - July 2019)</em></p>
                                <ul>
                                    <li>Automated calculation of fields with Excel and VBA for client reports and internal tools</li>
                                    <li>Documented data standards applied during transformation of data for end tools</li>
                                    <li>Developed SQL queries, tools, and references to speed up data parsing</li>
                                    <li>Created data visualizations for client use</li>
                                </ul>
                                <img src={treemap} alt="Treemap" height="180" width="330"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}
                    
export default BIRL;