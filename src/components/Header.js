import React, {Component} from 'react';
import './Header.css';







class Header extends Component{
    render(){
        const images = require('../images/Child1.jpg');
        const divStyle = {
        width: '100%',
        margin: "auto",
        height: '80vh',
        backgroundImage: `linear-gradient(135deg, #50A68480 30%, #115E6780 90%),url(${images})`,
        borderRadius: '5px',
        backgroundSize: 'cover' ,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        };
        return(
            <div className="main" style={divStyle}>
                <div className="header">
                    <h1 className="head">Children can learn on their schedule</h1>
                    <p className="para">Study any topic, anytime. Choose from thousands of expert-led courses now</p>
                    <input type="text" placeholder="What do you want to learn"></input>
                </div>
            </div>
            
        )
    }
}






export default Header
