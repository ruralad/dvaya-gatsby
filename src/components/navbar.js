import React from "react";

import "../styles/navbar.css";

import dvayaLogo from "../images/dvayaLogo.webp";
import instaLogo from "../images/instagram.svg";
import fbLogo from "../images/facebook.svg";

class Navbar extends React.Component {
  gotoPage(togolink) {
    if (togolink == "insta") {
      window.open("https://instagram.com/sfigeci","_blank")
    }
    else{
      window.open("https://www.facebook.com/SFIGECIunit","_blank");
    }
  }
  render() {
    return (
      <div id="navBar">
        <div id="dvayaBox" className={this.props.navtheme}>
          <img src={dvayaLogo} alt="DvayaLogo" />
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
            <label
              className="nav-unshown"
              id="nav-close"
              for="nav-input"
            ></label>
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
                <img
                  alt="instagram-logo"
                  src={instaLogo}
                  onClick={(e) => this.gotoPage("insta")}
                />
                <img
                  alt="facebook-logo"
                  src={fbLogo}
                  onClick={(e) => this.gotoPage("fb")}
                />
                <p>Dvaya, from Sfi Geci</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
