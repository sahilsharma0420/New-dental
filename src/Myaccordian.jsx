import React,{useState} from "react";
import "./index.css";


const Myaccordian = ({ question, answer }) => {
    const [show, setshow] = useState(false);
    return (
        <>
    <div className="quesans">
            <div className="main-heading-faq">
                <h5 className="question">{question}</h5>
                <p   onClick={() => setshow(!show)}>{show ? "➖" : "➕"}</p>
            </div>
       <div className="faq-answer">
            {show && <p >{answer}</p>}
            </div>    
            </div>
        </>
   
    )
}
export default Myaccordian;