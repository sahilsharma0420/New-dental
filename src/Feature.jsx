import React from "react";
import { Featureapi } from "./Featureapi";
import "./index.css";
import Featurecard from "./Featurecard";

const Feature = () => {
   
    return (
        <>
            <div className="features">
            <center><h1>Our Features</h1></center>
                <div className="feature-card">
                    <Featurecard details={Featureapi}/>
                </div>
            </div>
        </>
    )
};
export default Feature;
