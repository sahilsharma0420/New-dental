import React from "react";
import { Serviceapi } from "./Serviceapi";
import "./index.css";
import Servicecard from "./Servicecard";

const Service = () => {


    return (
        <>
            <div className="services">
            <center><h1>Services</h1></center>
                <div className="service-card">
                    <Servicecard details={Serviceapi}/>
                </div>
            </div>
        </>
    )
};
export default Service;
