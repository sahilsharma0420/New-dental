import React from "react";
import {Smilesapi} from "./Smilesapi";
import "./index.css";
import Smilecard from "./Smilescard";

const Smile = () => {
   

    return (
        <>
            <div className="smiles">
            <center><h1>Happy Smiles</h1></center>
                <div className="smile-card">
                    <Smilecard details={Smilesapi}/>
                </div>
            </div>
        </>
    )
};
export default Smile;
