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
            <div className="navbar__logo"></div>
            <div className='navbar__locator'>
                <div className="navbar__locatorImage"></div>
                <div className='navbar__location'>US</div>
            </div>
            <div className="navbar__searchcomponent">
                <div className="navbar__dropdown">
                    <select>
                        <option value="">All</option>
                        <option value="">Alexa</option>
                        <option value="">Baby</option>
                        <option value="">Beauty</option>
                        <option value="">Books</option>
                        <option value="">Clothes</option>
                    </select>
                </div>
                <div>
                    <input type="text" className="navbar__searchbox" />
                </div>
                <div className="navbar__searchboxdiv">
                    <div className="navbar__searchicon"></div>
                </div>
            </div>
        </div> );
    }
}
 
export default NavBar;