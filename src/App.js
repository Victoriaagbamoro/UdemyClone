import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect
} 
from "react-router-dom";

import Navbar from './components/Navbar'
import InstructorSignup from './components/InstructorSignup'
import InstructorPage from './components/InstructorPage'
// import StudentSection from './components/StudentSection'
import StudentSignUp from './components/StudentSignUp'
import StudentSignupage from './components/StudentSignupage'
// import Vector from './components/Vector'
import Footer from './components/Footer'




  class App extends Component{
    render(){
      return (
        <div className="App">
          <Router>
            <Navbar/>
            <Switch>
              <Route  path="/" exact component={InstructorSignup}></Route>    
              <Route exact
              path="/InstructorPage" component={InstructorPage} ></Route>     
            </Switch>
            <StudentSignUp/>
            <StudentSignupage/>
            <Footer/>
          </Router>
        </div>
      );

  }
  
}


export default App;
