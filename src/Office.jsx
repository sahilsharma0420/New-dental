import React from "react";
import { Officeapi } from "./Officeapi";
import "./index.css";
import Officecard from "./Officecard";

const Office = () => {


    return (
        <>
           <center><div className="office">
            <center><h1>Our Office Location</h1></center>
                <div className="office-card">
                    <Officecard details={Officeapi}/>
                </div>
            </div></center> 
        </>
    )
};
export default Office;
