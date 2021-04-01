import React, { useEffect, useState } from "react";

import "../src/styles/navbar.css";


function Navbar() {
  return (
    <div id="navBar">
      <div id="dvayaBox">
        <img src="./assets/dvayaLogo.webp" alt="DvayaLogo" />
        <span>
          DVAYA <br />
          Portal To Geci
          <br />
        </span>
      </div>
      <div id="rightNav">
        <div id="nav-drawer">
          <input id="nav-input" type="checkbox" className="nav-unshown" />
          <label id="nav-open" for="nav-input">
            <span></span>
          </label>
          <label className="nav-unshown" id="nav-close" for="nav-input"></label>
          <div id="nav-content">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="sfi">
                <a href="/sfi">Sfi Geci</a>
              </li>
              <li className="sfi">
                <a href="/notebank">Notebank</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/antiraggingcell">Anti-Ragging Cell</a>
              </li>
            </ul>
            <div className="bottom">
              <img onclick="goTo('sfi-insta')" src="./assets/instagram.svg" />
              <img onclick="goTo('sfi-fb')" src="./assets/facebook.svg" />
              <p>Dvaya, from Sfi Geci</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
