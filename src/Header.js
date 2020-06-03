import React from "react";

import logo from './logo.png';
import './index.css';

function Header() {
        return (
            <header id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5">
                        <img src={logo} alt="KB logo" height="54" width="96">
                        </img>
                        Kenji Bierig 
                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-2">HOME</div>
                                <div className="col-lg-5">ABOUT</div>
                            </div>                        
                        </div>              
                    </div>
                </div>
            </header>

        )
}

export default Header