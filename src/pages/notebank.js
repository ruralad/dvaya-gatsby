import React from "react";
import { Helmet } from "react-helmet";

import style from "../styles/notebank.module.css";

import Navbar from "../components/navbar";
import { Link } from "gatsby";

function Index() {
  return (
    <main>
      <Helmet>
        <title>NoteBank | Dvaya</title>
      </Helmet>
      <Navbar textcolor="black" />
      <div className={style.notebank_container}>
        <div className={style.notebank_box}>
          <h1 className={style.notebank_head}>Notebank</h1>
          <div className={style.notebank_yearbox}>
            <Link to="/notebank/firstyear">
              <div className={[style.notebox, style.activebox].join(" ")}>
                First Year
              </div>
            </Link>{" "}
            <div className={style.notebox}>Second Year</div>
            <div className={style.notebox}>Third Year</div>
            <div className={style.notebox}>Fourth Year</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
