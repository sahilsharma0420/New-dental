import React from "react";
import "./index.css";

const Teamcard = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
                <div className="card-team" key={index}>
                    <div className="card-image-team">
                     <center>   <img src={value.img} alt="not found"/><span className="card-title-reason">{value.title}</span></center>
                    </div>
                <div>
               <center><h6 className="card-name-team">{value.name}</h6></center> 
               <center><p className="description-team">{value.description}</p></center> 
                </div>
                <div>
                    <center><svg className="director-logo" xmlns="http://www.w3.org/2000/svg" fill="#fff" aria-label="LinkedIn" viewBox="0 0 512 512"><rect width="512" height="512" fill="#0077b5" rx="15%"/><circle cx="142" cy="138" r="37"/><path stroke="#fff" stroke-width="66" d="M244 194v198M142 194v198"/><path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"/></svg></center>
                </div>
                </div>
                
            ))};
        </>
    );
};
export default Teamcard;
