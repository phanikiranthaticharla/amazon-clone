import React from 'react';
import "./AdvertisementOne.css"

function AdvertisementOne(props) {
    return (
        <div className="AdvertisementOne__main">
            <div className="AdvertisementOne__header">
            Explore Alexa on your Samsung TV
            </div>
            <div className="AdvertisementOne__body">
            <img src="https://ik.imagekit.io/cbh8zu7mn/XCM_CUTTLE_1420616_2272876_US_CUTTLE_758x608_2X_en_US._SY608_CB625592401_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675302538875" width="300px" />
            </div>
            <div className="AdvertisementOne__footer">
                See what Alexa can do
            </div>
        </div>
    );
}

export default AdvertisementOne;