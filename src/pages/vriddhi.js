import React from "react";
import { Helmet } from "react-helmet";

import style from "../styles/vriddhi/main.module.css";

import Navbar from "../components/navbar";
import { Link } from "gatsby";

function Index() {
  return (
    <main>
      <Helmet>
        <title>Vriddhi Arts Fest | Dvaya</title>
      </Helmet>
      <Navbar textcolor="black" />
      <div className={style.container}>
        <h1 className={style.heading1}>Coming Soon.</h1>
      </div>
    </main>
  );
}

export default Index;
