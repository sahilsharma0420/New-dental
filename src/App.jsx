import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route ,Navigate } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Faq from "./Faq";
import Pricing from "./Pricing";
import Login from "./Login";


const App = () => {
    return (
        <div>
        <div>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Pricing" element={<Pricing />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/FAQ" element={<Faq />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/*" element={<Navigate to="/"/>} />
                </Routes>
            </div>
            


        </div>
    );
    };
export default App;
