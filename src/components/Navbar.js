import React, {Component} from 'react';
import './Navbar.css';




class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="topnav">
                    <a className="udemy" href="/">Udemy For Children</a>
                    <a className="active" href="/">Home</a>
                    <a className="about" href="/">About</a>
                    <a className="category" href="/">Categories</a>
                    <input type="text" placeholder="Search for courses"></input>
                    <a className="category" href="/">Teach for kids</a>
                    <a className="gray" href="/">SignUp</a>
                    <a className="blue" href="/">Login</a>
                    
            
                </nav>
            </div>

        )
    }
}





export default Navbar;