import React from "react";

import DBAL from "./DBAL.js";
import DAL from "./DAL.js";
import DSL from "./DSL.js";
import BIRL from "./BIRL.js";

class Landscape extends React.Component {
    constructor(props){
        super(props);
        this.state = {database:false,dataAnalyst:false,dataScience:false,reporting:false};
        this.handleClickDBA = this.handleClickDBA.bind(this);
        this.handleClickAnalyst = this.handleClickAnalyst.bind(this);
        this.handleClickScience = this.handleClickScience.bind(this);
        this.handleClickReporting = this.handleClickReporting.bind(this);
    }

    handleClickDBA() {
        this.setState({
                database: true,
                dataAnalyst:false,
                dataScience:false,
                reporting:false,
        })
    }

    handleClickAnalyst() {
        this.setState({
                database: false,
                dataAnalyst:true,
                dataScience:false,
                reporting:false,
        })
    }

    handleClickScience() {
        this.setState({
                database: false,
                dataAnalyst:false,
                dataScience:true,
                reporting:false,
        })
    }

    handleClickReporting() {
        this.setState({
                database: false,
                dataAnalyst:false,
                dataScience:false,
                reporting:true,
        })
    }

    render () {
        if (this.state.database) {
            return (
                <div>
                <button onClick={this.handleClickAnalyst}>Data Analyst</button>
                <button onClick={this.handleClickScience}>Data Scientist</button>
                <button onClick={this.handleClickReporting}>BI/Reporting Analyst</button>
                <h3><center>Viewing: Database Administrator</center></h3>
                <DBAL />
                </div>
            )
        }

        if (this.state.dataAnalyst){
            return (
                <div>
                <button onClick={this.handleClickDBA}>Database Administrator</button>
                <button onClick={this.handleClickScience}>Data Scientist</button>
                <button onClick={this.handleClickReporting}>BI/Reporting Analyst</button>
                <h3><center>Viewing: Data Analyst</center></h3>
                <DAL />
                </div>
            )
        }

        if (this.state.dataScience){
            return (
                <div>
                <button onClick={this.handleClickDBA}>Database Administrator</button>
                <button onClick={this.handleClickAnalyst}>Data Analyst</button>
                <button onClick={this.handleClickReporting}>BI/Reporting Analyst</button>
                <h3><center>Viewing: Data Scientist</center></h3>
                <DSL />
                </div>
            )
        }

        if (this.state.reporting){
            return (
                <div>
                <button onClick={this.handleClickDBA}>Database Administrator</button>
                <button onClick={this.handleClickAnalyst}>Data Analyst</button>
                <button onClick={this.handleClickScience}>Data Scientist</button>
                <h3><center>Viewing: BI/Reporting Analyst</center></h3>
                <BIRL />
                </div>
            )
        }

        return (
            <div>
            <button onClick={this.handleClickDBA}>Database Administrator</button>
            <button onClick={this.handleClickAnalyst}>Data Analyst</button>
            <button onClick={this.handleClickScience}>Data Scientist</button>
            <button onClick={this.handleClickReporting}>BI/Reporting Analyst</button>
            <h3><center>Please Choose a Job Title</center></h3>
            </div>
        )
    }

}

export default Landscape;    