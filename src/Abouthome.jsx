import React from "react";

const Abouthome = () => {
    return (
        <>
            <div className="abouthome">
                <center> <img className="abouthome-pic" src="https://dental-for-home.s3.us-west-2.amazonaws.com/logoMain.png" alt="logo" /></center>
                <div className="container-fluid">
                    <div className="row about-home1 ">
                        <div className="col-lg-6 col-md-12 abouttext1">
                            <h2>Who we are?</h2>
                            <p>Dental for home, bringing smiles at your doorstep, is the India’s first digital dental service platform providing dental services at your doorstep. At dental for home, we help you look after your own dental health effortlessly as well as take care of your loved ones too. You can have best dental treatments and other services easily at home- with just a few clicks away.!</p>
                        </div>
                    
                    <div className="col-lg-6 col-md-12">
                       <center> <img className="homeinnerpic1" src="../hospital.jpg" alt="about1" /></center>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                    <div className="row about-home2">
                        
                    
                    <div className="col-lg-6 col-md-12">
                    <center>   <img className="homeinnerpic2" src="../hospital.jpg" /></center>
                    </div>
                    <div className="col-lg-6 col-md-12 abouttext2">
                            <h2>What we do?</h2>
                            <p>Offer fast online access to dental treatments with convenient at home dentist facility. At dentalforhome.com, we have a wide range of dental services conveniently available and provided by our experienced and knowledgeable dentists. Since we also offer dental services at almost 50% off, online customers can expect significant savings. In short, 50% discount on all services as compared to market price!!!!!</p>
                            <p>Why to worry going to a dentist when they are just a call away!</p>
                        </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Abouthome;