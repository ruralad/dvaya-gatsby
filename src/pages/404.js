import React from "react";
import { Helmet } from "react-helmet";

import style from "../styles/notebank.module.css";

import Navbar from "../components/navbar";
import { Link } from "gatsby";

function Index() {
  return (
    <main>
      <Helmet>
        <title>404 | Dvaya</title>
      </Helmet>
      <Navbar />
      <div className={style.notebank_container}>
        <div className={style.notebank_box}>
          <h1 className={style.fourhead}>Oops! 😢</h1>
          <div className={style.gobutton}>
            <Link className={style.goback} to="/">
              home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
