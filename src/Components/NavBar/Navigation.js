import React, { Component } from 'react';
import "./NavBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    
    render() { 
        return ( 
        <div className="navbar__component">
            Nav Bar
            <div className="navbar__logo"></div>
            <div className='navbar__locator'>
                <div className="navbar__locatorImage"></div>
                <div className='navbar_location'>US</div>
            </div>
        </div> );
    }
}
 
export default NavBar;