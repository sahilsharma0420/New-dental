import React from "react";
import { NavLink, Link } from "react-router-dom";
import Reactphone from "./Reactphone";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import Contact from "./Contact";
import About from "./About";
const Login = () => {
    return (
        <>
            <div className="newloginmain">
                 <div className="loginleft">
               <center><img className="loginimg" src="https://dental-for-home.s3.us-west-2.amazonaws.com/logoMain.png" alt="location"></img></center> 
               <center> <h1 className="loginhead"><b>Dental</b> For Home</h1></center> 
                <center> <h3 className="loginwel"><i>Hello!Welcome back</i></h3></center> 
                <Reactphone/>
                <center><button className="otp"><b>Get OTP</b></button></center>
                <center><div><h6 className="loginotp">OR</h6></div></center>
                <center><div><button className="googlebutton"><svg className="googlelogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fbbb00" d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"/><path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"/><path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"/><path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"/></svg><span className="loginpage-text">Sign In with Google</span></button></div></center>
                <center><div ><button className="facebookbutton"><svg className="facebooklogo" xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1" viewBox="0 0 1024 1024"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"/><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"/></svg><span className="loginpage-text">Login Via Facebook</span></button></div></center>
                </div>
                <div className="loginright">
                    <ul>
                 
                        <li><NavLink to="/About" style={{textDecoration:"none",color:"rgb(9, 65, 100)"}} >About</NavLink></li>
                        <li><NavLink  to="/Contact" style={{textDecoration:"none",color:"rgb(9, 65, 100)"}}>Contact</NavLink></li>
                    </ul>
                </div>
              
            </div>
            <div className="loginsmall">
            <div className="loginsmallleft">
               <center><img className="loginsmallimg" src="https://dental-for-home.s3.us-west-2.amazonaws.com/logoMain.png" alt="location"></img></center> 
               <center> <h1 className="loginsmallhead"><b>Dental</b> For Home</h1></center> 
                <center> <h3 className="loginsmallwel"><i>Hello!Welcome back</i></h3></center> 
                <Reactphone/>
                <center><button className="otpsmall"><b>Get OTP</b></button></center>
                <center><div><h6 className="loginsmallotp">OR</h6></div></center>
                <center><div><button className="googlesmallbutton"><svg className="googlesmalllogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fbbb00" d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"/><path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"/><path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"/><path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"/></svg><span className="loginpage-text">Sign In with Google</span></button></div></center>
                <center><div ><button className="facebooksmallbutton"><svg className="facebooksmalllogo" xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1" viewBox="0 0 1024 1024"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"/><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"/></svg><span className="loginpage-text">Login Via Facebook</span></button></div></center>
                </div>
            </div>
        </>
    );
};
export default Login;
