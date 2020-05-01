import React, {Component} from 'react';
import './StudentSection.css'


class StudentSection extends Component{
    constructor(){
        super()
        this.state={
            // imagebody: require('../images/learningone.jpg' ),  

        }
    }

    render(){
        const images = require('../images/learningone.jpg');
        const secStyle = {
        width: '100%',
        margin: "auto",
        height: '70vh',
        backgroundImage: `linear-gradient(135deg, #50A68480 30%, #115E6780 90%),url(${images})`,
        opacity: '0.9',
        backgroundSize: 'cover' ,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }
        return(
            <div>
                <div className="sectionbody">
                    <div className="imagebody">
                        <img className="learn" src={images} alt="maths" style={secStyle}/>
                    </div>
                    <div className="studentone">
                        <h2 className="raise">
                            We are raising a learning Generation
                        </h2>
                        <p className="raisepara">Children can grow, learn to become confident in whatever they set their mind to do.
                            We take learning seriously in our community
                        </p>
                        <button className="btn">Get Started</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default StudentSection