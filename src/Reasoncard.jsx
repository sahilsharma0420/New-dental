import React from "react";
import  "./index.css";

const Reasoncard = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className="card-reason" key={index}>
                    <div className="card-image-reason">
                        <img src={value.img} alt="not found"/><span className="card-title-reason">{value.title}</span>
                    </div>
                <div>
            
                <p className="description-reason">{value.description}</p>
                </div>
                </div>
            ))};
        </>
    );
};
export default  Reasoncard;
