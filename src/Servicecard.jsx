import React from "react";
import  "./index.css";

const Servicecard = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className="card-service" key={index}>
                    <div className="card-image-service">
                        <img src={value.img} alt="not found"/>
                    </div>
                <div >
                <p className="card-title-service">{value.title}</p>
                <p className="description-service">{value.description}</p>
                </div>
                </div>
            ))};
        </>
    );
};
export default  Servicecard;
