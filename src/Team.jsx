import React from "react";
import { Teamapi } from "./Teamapi";
import "./index.css";
import Teamcard from "./Teamcard";

const Team = () => {


    return (
        <>
            <div className="teams">
            <center><h1>Our Directors</h1></center>
                <div className="team-card">
                    <Teamcard details={Teamapi}/>
                </div>
            </div>
        </>
    )
};
export default Team;
