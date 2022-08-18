import React from "react";
import { Memberapi } from "./Memberapi";
import "./index.css";
import Membercard from "./Membercard";

const Member = () => {
   

    return (
        <>
            <div className="members">
            <center><h1>Our Team</h1></center>
                <div className="member-card">
                    <Membercard details={Memberapi}/>
                </div>
            </div>
        </>
    )
};
export default Member;
