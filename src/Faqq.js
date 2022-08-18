import React, { useState } from "react";
import { Faqq } from "./Faqapi";
import Myaccordian from "./Myaccordian";
import "./index.css";

const Faq = () => {
    const [faq, setfaq] = useState(Faqq);

    return (
        <>
             <section className="main-div">
            <center> <h1>FAQ</h1></center>
            {
                faq.map((curElem) => {
                    const id = curElem;
                    return < Myaccordian key={id} {...curElem} />
                })
            }
            </section>
        </>
    )
};
export default Faq;