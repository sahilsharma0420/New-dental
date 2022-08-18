import React from "react";
import  "./index.css";

const Smilecard = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className="card-smile" key={index}>
                    <div className="card-image-smile">
                        <img src={value.img} alt="not found"/>
                    </div>
                <div>
                <p className="description-smile">{value.description}</p>
                <p className="card-name-smile">{value.name}</p>
                <p className="card-title-smile">{value.title}</p>
            </div>
                </div>
            ))};
        </>
    );
};
export default  Smilecard;
