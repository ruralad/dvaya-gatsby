import React from "react";

import "../styles/navbar.css";

import dvayaLogo from "../images/dvayaLogo.webp";
import instaLogo from "../images/instagram.svg";
import fbLogo from "../images/facebook.svg";
import { Link } from "gatsby";

class Navbar extends React.Component {
  gotoPage(togolink) {
    if (togolink == "insta") {
      window.open("https://instagram.com/sfigeci", "_blank");
    } else {
      window.open("https://www.facebook.com/SFIGECIunit", "_blank");
    }
  }
  render() {
    let navColor = "white";
    if (this.props.textcolor == "black") {
      navColor = "black";
    }
    return (
      <div id="navBar">
        <div id="dvayaBox" className={this.props.navtheme}>
          <Link to="/">
            <img src={dvayaLogo} alt="DvayaLogo" />
          </Link>

          <span style={{ color: navColor }}>
            DVAYA <br />
            Portal To Geci
            <br />
          </span>
        </div>
        <div id="rightNav">
          <div id="nav-drawer">
            <input id="nav-input" type="checkbox" className="nav-unshown" />
            <label id="nav-open" htmlFor="nav-input">
              <span></span>
            </label>
            <label
              className="nav-unshown"
              id="nav-close"
              htmlFor="nav-input"
            ></label>
            <div id="nav-content">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="sfi">
                  <Link to="/sfi">Sfi Geci</Link>
                </li>
                <li className="sfi">
                  <Link to="/notebank">Notebank</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/antiraggingcell">Anti-Ragging Cell</Link>
                </li>
                <li>
                  <Link className="eventstext" to="/events">Events</Link>
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
