import React from "react";

import sfilogo from "../images/gecisfiLOGO.webp";

import "../styles/navbar.css";


function Footer(){
    return(
        <footer>
          <img src={sfilogo} alt="sfigeci-Logo" />
          <div className="about">
            <p>Students Federation Of India</p>
            <p>Government Engineering College Idukki</p>
            <p>Copyright © 2020 Sfi Geci</p>
          </div>
        </footer>
    );
}

export default Footer;