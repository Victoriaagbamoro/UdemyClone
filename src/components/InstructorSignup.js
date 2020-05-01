import React, {Component} from 'react';
import Header from './Header'
import Navbody from './Navbody'
import Mainbody from './Mainbody'
import Card from './Card'
import Card2 from './Card2'
import Section from './Section'
import { GoogleLogin } from 'react-google-login';
import StudentSection from './StudentSection'
// import StudentSignUp from './StudentSignUp'
// import StudentSignupage from './StudentSignupage'  
import Vector from './Vector'
import './InstructorSignup.css'

// import FontAwesome from 'react-fontawesome'
// import { Redirect } from 'react-router-dom';



class InstructorSignup extends Component{
    constructor(props){
        super(props)
        this.state={
            instructhead: 'Become an instructor today',
            instructpara: "Join the World's Largest online learning marketplace",

        }
        this.signUp = this.signUp.bind(this);

    }
    signUp(res){
        const googleresponse ={
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            providerId: 'Google'
        };
        console.log(googleresponse)
        this.props.history.push('/InstructorPage');

    }

    render(){
        // const inStyle = { background: "black"};
        const responseGoogle = (response) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
            this.signUp(response)

        }
        return(
            <div className="InstructorSignup"> 
                    <Header/>
                    <Navbody/>
                    <Mainbody/>
                    <Card/>
                    <Card2/>
                    <Section/>
                    <div className="instructSec">
                    <h2 className="instructone">{this.state.instructhead}</h2>
                    <p className="instructtwo">{this.state.instructpara}</p>

                    <GoogleLogin
                    className="your-custom-class"
                    clientId="265248569673-14o2h5fqpsn8ap2sq0dmpga4mibcrl29.apps.googleusercontent.com"
                    render={renderProps => (
                    <button className="btne" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    isSignedIn={true}
                    />
                    
                </div>
                <StudentSection/>
                <Vector/>
                
                

            </div>
        )
    }
}

export default InstructorSignup