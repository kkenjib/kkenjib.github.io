import React from "react";
import PortraitNew from "./PortraitNew.js";
import Landscape from "./Landscape.js";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {portrait:true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            return {
                portrait: !prevState.portrait
            }
        })
    }

    render () {
        if (this.state.portrait) {
            return (
                <div>    
                    <div style={{paddingBottom:5}}><strong>Choose Page Orientation</strong></div>
                    <button onClick={this.handleClick}>
                        Switch to Landscape
                    </button>
                    <PortraitNew />
                </div>
            )
        }
        return (
                <div>
                    <div style={{paddingBottom:5}}><strong>Choose Page Orientation</strong></div>
                    <button onClick={this.handleClick}>
                        Switch to Portrait
                    </button>
                    <Landscape />
                </div>
            )
    }

}

export default About;