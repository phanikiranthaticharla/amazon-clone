import React, { Component } from 'react';
import "./NavBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    
    render() { 
        return ( 
        <div>
            <div className="navbar__component">
                <div className="navbar__logo"></div>
                <div className='navbar__locator'>
                <div className="navbar__locatorImage"></div>
                <div className="navbar__hello">
                    <div className="navbar__hello_text">Hello</div>
                    <div className='navbar__location'>Select your address</div>
                </div>
                </div>
                <div className="navbar__searchcomponent">
                    <div class="navbar__selector">
                        <select className="navbar__dropdown">
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Books">Books</option>
                            <option value="Clothes">Clothes</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className="navbar__searchbox" />
                    </div>
                    <div className="navbar__searchboxdiv">
                    <div className="navbar__searchicon"></div>
                    </div>
                </div>
                <div className="navbar__text navbar__signin">
                    <div style={{ fontsize: "14px" }}>Hello, Sign In</div>
                    <div style={{ fontWeight: 'bold'}}>
                        Accounts & Lists
                    </div>
                </div>
                <div className="navbar__text navbar__returns">
                    <div style={{ fontsize: "14px" }}>Returns</div>
                    <div style={{ fontWeight: 'bold' }}>& Orders</div>
                </div>
                <div className="navbar__text navbar__cart">
                    <div src="" className="cart__image"  alt="img"></div>
                    <div className="cart__number_items">0</div>
                    <div className="navbar__text_cart">Cart</div>
                </div>        
            </div>
            <div className="navigation__footer">
                <div className="navbar__footer_text">Clinic</div>
                <div className="navbar__footer_text">Amazon Basics</div>
                <div className="navbar__footer_text">Prime</div>
                <div className="navbar__footer_text">Pet Supplies</div>
                <div className="navbar__footer_text">Beauty & Personal Care</div>
                <div className="navbar__footer_text">Amazon Home</div>
                <div className="navbar__footer_text">Coupons</div>
                <div className="navbar__footer_text">Health & Household</div>
                <div className="navbar__footer_text">Find a Gift</div>
                <div className="navbar__footer_text">#FoundItOnAmazon</div>
                <div className="navbar__footer_text">Celebrate Black History Month</div>               
            </div>                
        </div>);
    }
}
 
export default NavBar;