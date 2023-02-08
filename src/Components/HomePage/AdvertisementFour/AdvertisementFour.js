import React from 'react';
import "./AdvertisementFour.css";

function AdvertisementFour(props) {
    return (
        <div className="AdvertisementFour__main">
        <div className="AdvertisementFour__header">
        Pickup where you left
        </div>
        <div className="AdvertisementFour__body">
        <img src="https://ik.imagekit.io/cbh8zu7mn/Designing_Data-Intensive.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675306918422" className="Advertisement_FourImages" />
        <img src="https://ik.imagekit.io/cbh8zu7mn/System_Design_Interview.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675306918387" className="Advertisement_FourImages" />
        <img src="https://ik.imagekit.io/cbh8zu7mn/Fundamentals_of_Data_Engineering.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675306918226" className="Advertisement_FourImages" />
        <img src="https://ik.imagekit.io/cbh8zu7mn/Fundamanetals_of_Software_Architecture.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675306918326" className="Advertisement_FourImages" />
        </div>
    </div>
    );
}

export default AdvertisementFour;