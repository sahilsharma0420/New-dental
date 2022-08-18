import React from "react";
import "./index.css";

const Footerbase = () => {
    return(
        
        <>
        <div className="footerbase">
        <div className="footercopy">
            <img className="footimg" src="https://cdn-icons.flaticon.com/png/128/1621/premium/1621133.png?token=exp=1659598274~hmac=fc93de6f3a04d1fe82fecc841469020b" alt="copyright images"/>
            <h4 className="foottext" >Dental For Home</h4>
            </div>
        <div className="copyright">

        <p>Copyright {(new Date().getFullYear())}. Dental For Home. All rights reserved</p>

        </div>
        </div>
        
        
        </>
    );
};
export default  Footerbase;
