import React, {Component} from 'react';
import './Card.css'



class Card extends Component{
    constructor(props){
        super(props)
        this.state={
            imageUrl: require('../images/create.jpeg' ),
            imageEnglish: require('../images/english.jpg' ), 
            imagePhysic: require('../images/physics.jpg' ), 
            imagemusic: require('../images/music.jpg' ), 
        }
    }
    render(){
        return(
            <div className="card">
                <div className="cardbody">
                    <img className="maths" src={this.state.imageUrl} alt="maths"/>
                    <h2 className="paraone">Complete Maths Guide-(Go from Basics to Advanced)</h2>
                    <p className="number">800 students enrolled</p>
                    <p className="content">10 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                <div className="cardbody">
                    <img className="maths" src={this.state.imagePhysic} alt="maths"/>
                    <h2 className="paraone">Complete Physical Education Guide</h2>
                    <p className="number">700 students enrolled</p>
                    <p className="content">8 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                <div className="cardbody">
                    <img className="maths" src={this.state.imageEnglish} alt="maths"/>
                    <h2 className="paraone">Grow Your Diction With Our English Program</h2>
                    <p className="number">1000 students enrolled</p>
                    <p className="content">10 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                <div className="cardbody">
                    <img className="maths" src={this.state.imagemusic} alt="maths"/>
                    <h2 className="paraone">Learn The Basic Concepts Of Music</h2>
                    <p className="number">900 students enrolled</p>
                    <p className="content">7 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                

            </div>
        )
    }
}

export default Card