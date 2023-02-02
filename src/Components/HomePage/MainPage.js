import React, { Component } from 'react';
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import "./MainPage.css"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() { 
        return ( 
            <div className="mainpage">
                <div>
                    <AdvertisementOne/>
                </div>
            </div>
         );
    }
}
 
export default MainPage;