import React, { useState } from "react";
import "./index.css";

const Foot = () => {
    const [show, setshow] = useState(false);
    const [show1, setshow1] = useState(false);
    const [show2, setshow2] = useState(false);
    const [show3, setshow3] = useState(false);
    const [show4, setshow4] = useState(false);
    const [show5, setshow5] = useState(false);
    const [show6, setshow6] = useState(false);
    
    return (
        <>

           <div className="footmain1">
                <div className="footer1 " >
                    <h4>Dental for home</h4>
                    <p>About</p>
                    <p>Guiding Principles</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Contact</p>
                    <p>Blog</p>

                </div>
                <div className="footer2 ">
                    <h4>For Patients</h4>
                    <p>Ask free health questions</p>
                    <p>Search for doctors</p>
                    <p>Search for clinics</p>
                    <p>Read health articles</p>
                    <p>Read about medicines</p>
                    <p>Consult a doctor</p>
                    <p>Order medicines</p>
                    <p>Health app</p>
                </div>
                <div className="footer3 ">
                    <div>
                        <h4>For Doctors</h4>
                        <p>DFH Consult</p>
                        <p>DFH Health feed</p>
                        <p>DFH Profile</p>
                        <p>DFH Pro App</p>
                        <br />
                    </div>
                    <div>
                        <h4>For Clinic</h4>
                        <p>DFH Prime</p>
                        <p>Ray for DFH</p>
                        <p>DFH Reach</p>

                    </div>
                </div>
                <div className="footer4 ">
                    <h4>For Hospitals</h4>
                    <p>DFH Prime</p>
                    <p>Insta by DFH</p>
                    <p>Qikwell by DFH</p>
                    <p>DFH Profile</p>
                    <p>DFH Reach</p>
                </div>
                <div className="footer5 ">
                    <h4>More</h4>
                    <p>Help</p>
                    <p>Developers</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Subscribers</p>
                    <p>Sitemap</p>
                </div>
                <div className="footer6 ">
                    <h4>Social</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Linkedin</p>
                    <p>Youtube</p>
                    <p>Github</p>
                </div>
            </div>
          <div className="footmain2">
                <div className="footmain2-1">
                <div className="dropdown-ques">
                    <h2 className="footer-question">Dental for Home</h2>
                    
                    <p onClick={() => setshow(!show)}>{show ? "➖" : "➕"}</p>
                </div>
                <div className="dropdown-ans" >
                {show && <div >
                        <p>About</p>
                        <p>Guiding Principles</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Contact</p>
                        <p>Blog</p>

                    </div>}
                    </div>
                    </div>
                    <div className="footmain2-1">
                   <div className="dropdown-ques">
                    <h2 className="footer-question">For Patients</h2>
                    
                    <p onClick={() => setshow1(!show1)}>{show1 ? "➖" : "➕"}</p>
                </div>
                <div className="dropdown-ans">
                {show1 && <div  >
                        <p>Ask free health questions</p>
                        <p>Search for doctors</p>
                        <p>Search for clinics</p>
                        <p>Read health articles</p>
                        <p>Read about medicines</p>
                        <p>Consult a doctor</p>
                        <p>Order medicines</p>
                        <p>Health</p>

                    </div>}
                    </div>
                    </div>
                    <div className="footmain2-1">
                   <div className="dropdown-ques">
                    <h2 className="footer-question">For Doctors</h2>
                    
                    <p onClick={() => setshow2(!show2)}>{show2 ? "➖" : "➕"}</p>
                </div>
                <div className="dropdown-ans" >
                {show2 &&
                    <div>
                        <p>DFH Consult</p>
                        <p>DFH Health</p>
                        <p>DFH Profile</p>
                        <p>DFH Pro App</p>
                    </div>}
                    </div>
                    </div>
                    <div className="footmain2-1">
                    <div className="dropdown-ques">
                    <h2 className="footer-question">For Clinic</h2>
                    
                    <p onClick={() => setshow3(!show3)}>{show3 ? "➖" : "➕"}</p>
                </div>
                <div className="dropdown-ans" >
                {show3 && <div>
                    
                        <p>DFH Prime</p>
                        <p>Ray for DFH</p>
                        <p>DFH Reach</p>
</div>}
                    </div>
                    </div>
                   <div className="footmain2-1">
                    <div className="dropdown-ques">
                    <h2 className="footer-question">For Hospitals</h2>
                    
                    <p onClick={() => setshow4(!show4)}>{show4 ? "➖" : "➕"}</p>
                </div>
                <div className="dropdown-ans">
                {show4 && <div>
                    
                        <p>Read health articles</p>
                        <p>Read about medicines</p>
                        <p>Consult a doctor</p>
                        <p>Order medicines</p>
                        <p>Health</p>
</div>}
                    </div>
                    </div>
          <div className="footmain2-1">
                    <div className="dropdown-ques">
                    <h2 className="footer-question">More</h2>
                    
                    <p onClick={() => setshow5(!show5)}>{show5 ? "➖" : "➕"}</p>
                </div>
                <div className="dropdown-ans" >
                {show5 && <div>
                    
                        <p>Search for clinics</p>
                        <p>Read health articles</p>
                        <p>Read about medicines</p>
                        <p>Consult a doctor</p>
                        <p>Order medicines</p>
                        <p>Health</p>

                    </div>}
                    </div>
                    </div>
                       <div className="footmain2-1">
                    <div className="dropdown-ques">
                    <h2 className="footer-question">Social</h2>
                    
                    <p onClick={() => setshow6(!show6)}>{show6 ? "➖" : "➕"}</p>
                </div>
                <div className="dropdown-ans">
                {show6 && <div>
                    
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Linkedin</p>
                        <p>Youtube</p>
                        <p>Github</p>

                    </div>}
                    </div>
                    </div>


            </div>
     
        </>
    )
}

export default Foot;