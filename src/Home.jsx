import React from "react";
import "./index.css";
import Faq from "./Faqq";
import Foot from "./Footer";
import Footerbase from "./Footerbase";
import Location from "./Location";
import Joint from "./Joint.jsx";
import Achievement from "./Achievement";
import Service from "./Service";
import Feature from "./Feature";
import Smile from "./Smiles";
import Reason from "./Reason";
import Main from "./Main";


const Home = () => {
    return (
        <>
         <Main />
           <Feature />
            <Service />
            <Location />
            <Reason />
            <Achievement />  
            <Joint />
            <Smile />
            <Faq />
            <Foot/>
            <Footerbase/>
     
           
        </>

    );
};
export default Home;
