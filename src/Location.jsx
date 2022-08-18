import React from "react";
import "./index.css";

const Location = () => {
    return(
        <>
        <div className="container-fluid">
         <div className="row location ">
            <div className="loctext col-lg-6 col-md-12">
            <h1>Our location</h1>
            <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quoerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
            <button className="explore-button">Explore </button>

            </div>
            <div className="locimg col-lg-6 col-md-12">
                <img className="map-image" src="https://dental-for-home.s3.us-west-2.amazonaws.com/images-removebg-preview.png" alt=""></img>
            </div>
         </div>
         </div>
        </>
    );
};
export default  Location;
