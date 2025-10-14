// BureauPartner.js

import React from 'react';
import './BureauPartner.css'; // Import CSS file for styling
import exe from "../../images/EXP.png";

const BureauPartner = () => {
    return (
        <div className="bureau-partner">
            <h1 className="bureau-heading">Bureau partner</h1>
            <div className="logo-container-b">
            <a href="https://www.experian.in/" target="_blank" rel="noopener noreferrer">
                <img src={exe} alt="Bureau Partner Logo" className="bureau-logo" />
            </a>
                        </div>
        </div>
    );
}

export default BureauPartner;
