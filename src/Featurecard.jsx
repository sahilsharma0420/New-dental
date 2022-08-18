import React from "react";
import "./index.css";

const Featurecard = (props) => {
    return (
        <>
            {props.details.map((value,index) => (
                <div className="card" key={index}>
                    <div className="card-image">
                        <img src={value.img} alt="not found"/>
                    </div>
                <div>
                <p className="card-title">{value.title}</p>
                </div>
                </div>
            ))};
        </>
    );
};
export default Featurecard;
