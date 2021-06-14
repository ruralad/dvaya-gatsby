import React from "react";
import { Link } from "gatsby";

import style from "../styles/notificationbar.module.css";

class Navbar extends React.Component {
  render() {
    let navColor = "white";
    if (this.props.textcolor == "black") {
      navColor = "black";
    }
    return (
      <div className={style.not_container}>
        <Link to="/bloodbank">
          Click Here To Register For Sfi Geci Bloodbank.
        </Link>
      </div>
    );
  }
}

export default Navbar;
