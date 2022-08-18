import React from "react";
import { Reasonapi } from "./Reasonapi";
import "./index.css";
import Reasoncard from "./Reasoncard";

const Reason = () => {
    

    return (
        <>
            <div className="reasons">
            <center><h1>Why Dental for Home?</h1></center>
                <div className="reason-card">
                    <Reasoncard details={Reasonapi}/>
                </div>
            </div>
        </>
    )
};
export default Reason;
