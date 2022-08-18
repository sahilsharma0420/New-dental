import React from "react";
import "./index.css";

const Achievement = () => {
    return(
        <>
            <div className="container-fluid">
            <center><div className="row achievement">
                <h1>Our Achievements</h1>
                   <div className="achievementpart col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <img src="../Dentalphoto/achie1.png" alt="ach1"/>
                        <p>19+ Clinics</p>
                    </div>
                    <div className="achievementpart col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <img src="../Dentalphoto/achie2.png" alt="ach2"/>
                        <p>5+ years of experience</p>
                    </div>
                    <div className="achievementpart col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <img src="../Dentalphoto/achie3.png" alt="ach3"/>
                        <p>10,000+ Smiles</p>
                    </div>
                    <div className="achievementpart col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <img src="../Dentalphoto/achie4.png" alt="ach4"/>
                        <p>50+ Dentistry<br/> Specialists</p>
                    </div>
                </div></center> 
            </div>
        </>
    );
};
export default  Achievement;
