import React, { Component } from 'react';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
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
                <div className="mainpage__advertisement_one">
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>

                </div>
            </div>
         );
    }
}
 
export default MainPage;