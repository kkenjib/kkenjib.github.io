import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.png";
import BlueBar from "./BlueBar.js";
import HomeContent from "./HomeContent.js";
import About from "./About.js";

class AppNew extends React.Component {
    constructor(props){
        super(props);
        this.state = {home:true,about:false};
        this.handleClickHome = this.handleClickHome.bind(this);
        this.handleClickAbout = this.handleClickAbout.bind(this);
    }

    handleClickHome () {
        this.setState({
            home:true,
            about:false,
        })
    }

    handleClickAbout () {
        this.setState({
            home:false,
            about:true,
        })
    }

    render () {
        if (this.state.home) {
            return (
                <div>
                    <header id="header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-8" style={{fontSize:25}}>
                                    <img src={logo} alt="KB logo" height="54" width="96">
                                    </img>
                                    Kenji Bierig 
                                </div>
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-lg-2"><button onClick={this.handleClickHome} style={{boxShadow:"None",background:"#FEB06E",border:0,borderRadius:"0px",color:"white"}}>HOME</button></div>
                                        <div className="col-lg-2"><button onClick={this.handleClickAbout} style={{boxShadow:"None",background:"None",border:0,borderRadius:"0px"}}>ABOUT</button></div>
                                    </div>                        
                                </div>              
                            </div>
                        </div>
                    </header>
                    <BlueBar />
                    <HomeContent />            
                </div>
            )
        }
        if (this.state.about) {
            return (
                <div>
                    <header id="header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-8" style={{fontSize:25}}>
                                    <img src={logo} alt="KB logo" height="54" width="96">
                                    </img>
                                    Kenji Bierig
                                </div>
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-lg-2"><button onClick={this.handleClickHome} style={{boxShadow:"None",background:"None",border:0,borderRadius:"0px"}}>HOME</button></div>
                                        <div className="col-lg-2"><button onClick={this.handleClickAbout} style={{boxShadow:"None",background:"#FEB06E",border:0,borderRadius:"0px",color:"white"}}>ABOUT</button></div>
                                    </div>                        
                                </div>              
                            </div>
                        </div>
                    </header>
                    <BlueBar />
                    <About />           
                </div>
            )
        }
    }
    
}

export default AppNew;