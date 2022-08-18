import React, { useState } from "react";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import {ImCross} from "react-icons/im"
import { NavLink } from "react-router-dom";

const Navbar = () => {
const [showMediaIcons, setShowMediaIcons] = useState(false);
function hidesidemenu(){
  setShowMediaIcons=false;
}
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
      <div className="logo">
        <img className="logopic" src="https://dental-for-home.s3.us-west-2.amazonaws.com/logoMain.png" alt="location"></img>
            
        </div>

        {/* 2nd menu part  */}
      <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink to="/New-dental">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">about</NavLink>
            </li>
            <li>
              <NavLink to="/Pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="/FAQ">FAQ</NavLink>
            </li>
          </ul>
        </div>
          <div className="login-home">
            <ul>
            <li>
             <button className="login-home-button"> <NavLink style={{color:"white"}} to="/Login">Log In</NavLink></button>
            </li>
            </ul>
          </div>
        

          {/* hamburget menu start  */}
        <div className="hamburger-menu">
            <button className="icon-button" onClick={() => setShowMediaIcons(!showMediaIcons) }>
              <GiHamburgerMenu />
            </button>
          </div>
    
      </nav>

    
       
{showMediaIcons &&

   <div className="slider-menu">
   <div className="slider-part1">
   <img className="side-logopic" src="https://dental-for-home.s3.us-west-2.amazonaws.com/logoMain.png " alt="location"></img>
   <span className="imcross">
    <button className="icon-button" onClick={()=>setShowMediaIcons(!showMediaIcons)}>
   <ImCross/></button></span>
       </div>
        <div className="slider-part2">
        <ul>
            <li>
              <div onClick={()=>hidesidemenu()}><NavLink  to="/New-dental">Home</NavLink></div>
            </li>
            <li>
              <div onClick={()=>hidesidemenu()}><NavLink  to="/About">About</NavLink></div>
            </li>
            <li>
              <div onClick={()=>hidesidemenu()}><NavLink  to="/Pricing">Pricing</NavLink></div>
            </li>
            <li>
              <div onClick={()=>hidesidemenu()}><NavLink  to="/Contact">Contact</NavLink></div>
            </li>
            <li>
              <div onClick={()=>hidesidemenu()}><NavLink  to="/FAQ">FAQ</NavLink></div>
            </li>
          </ul>
        </div>
        <div className="slider-part3">
            <ul>
            <li> 
             <button className="slider-button"> <NavLink onClick={()=>hidesidemenu()} style={{color:"white"}} to="/Login">Login</NavLink></button>
            </li>
            </ul>
          </div>
          
   </div>}

   </>
  );
  
};

export default Navbar;
