import React, {Component} from 'react';
import './Navbody.css';

class Navbody extends Component{
    constructor(){
        super()
        this.state={
            imageLoc: require('../images/loc.png' ), 
            imageLike: require('../images/like.jpg' ), 
            imagebulb: require('../images/bulb.png' ), 
        }
    }
    render(){
        return(
            <div className="mainone">
                {/* <div className="section">
                    <h1 className="text">Explore 100,000 online courses of fresh topics</h1>
                    <h1 className="text">Expert teachers from all around the world</h1>
                    <h1 className="text">Children can learn on their schedule</h1>
                    
                    
                </div> */}
            </div>
        )
    }
}



export default Navbody
