import React, {Component} from 'react';
import './Card2.css'



class Card2 extends Component{
    constructor(props){
        super(props)
        this.state={
            imageUrl: require('../images/biology.jpg' ),
            imageEnglish: require('../images/integrated.jpg' ), 
            imagePhysic: require('../images/arts.png' ), 
            imagemusic: require('../images/Robotics.jpg' ), 
        }
    }
    render(){
        return(
            <div className="card">
                <div className="cardbody">
                    <img className="maths" src={this.state.imageUrl} alt="maths"/>
                    <h2 className="paraone">Beginner Guide To Biology</h2>
                    <p className="number">600 students enrolled</p>
                    <p className="content">10 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                <div className="cardbody">
                    <img className="maths" src={this.state.imagePhysic} alt="maths"/>
                    <h2 className="paraone">The Beauty Of Arts For Children</h2>
                    <p className="number">1000 students enrolled</p>
                    <p className="content">8 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                <div className="cardbody">
                    <img className="maths" src={this.state.imageEnglish} alt="maths"/>
                    <h2 className="paraone">Complete Guide to integrated Science</h2>
                    <p className="number">700 students enrolled</p>
                    <p className="content">10 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                <div className="cardbody">
                    <img className="maths" src={this.state.imagemusic} alt="maths"/>
                    <h2 className="paraone">Introduction to Robotics For Kids</h2>
                    <p className="number">1500 students enrolled</p>
                    <p className="content">10 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                

            </div>
        )
    }
}

export default Card2