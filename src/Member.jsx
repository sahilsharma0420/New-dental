import React from "react";
import { Memberapi } from "./Memberapi";
import "./index.css";
import Membercard from "./Membercard";

const Member = () => {
   

    return (
        <>
           <center>  <div className="members">
            <center><h1>Our Team</h1></center>
                <div className="member-card">
                    <Membercard details={Memberapi}/>
                </div>
            </div></center> 
        </>
    )
};
export default Member;
