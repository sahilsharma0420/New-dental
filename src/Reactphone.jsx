import React from "react";
import { useState } from "react";
import 'react-phone-number-input/style.css';

import PhoneInput from "react-phone-number-input";
import "./index.css";

const Reactphone = () => {
    const [value, setValue] = useState();
    return (
        <center>     
            <PhoneInput
            className="reactphone"
            international
            defaultCountry="IN"
            value={value}
            onChange={setValue} />
          
            </center>

    )
};
export default Reactphone;