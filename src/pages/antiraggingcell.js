import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";

import style from "../styles/antiragging.module.css";

function Index() {
  return (
    <main className={style.main}>
      <Helmet>
        <title>Anti-Ragging Cell | Dvaya</title>
      </Helmet>
      <Navbar />
      <h1 className={style.h1}>Anti-Ragging Cell</h1>
      <p className={style.p}>Touch the number to place a call</p>
      <section className={style.section}>
        <ul className={style.ul}>
          <li className={style.li}>
            Athul Raj K <span>S8 ME</span>
            <a className={style.a} href="tel:+9181296 97119">81296 97119 </a>
          </li>
          <li className={style.li}>
            Abhijith P A <span>S8 EC</span>
            <a className={style.a} href="tel:+9185477 74007">85477 74007 </a>
          </li>
          <li className={style.li}>
            Adarsh Murali <span>S8 CS</span>
            <a className={style.a} href="tel:+9195673 71256">95673 71256 </a>
          </li>
          <li className={style.li}>
            Jinsha Becker <span>S8 IT</span>
            <a className={style.a} href="tel:+9183049 09689">83049 09689 </a>
          </li>
          <li className={style.li}>
            Abhijith K <span>S8 CS</span>
            <a className={style.a} href="tel:+9195267 27913">95267 27913 </a>
          </li>
          <li className={style.li}>
            Sruthy V S <span>S8 EEE</span>
            <a className={style.a} href="tel:+9196567  30623">96567 30623</a>
          </li>
          <li className={style.li}>
            Athuljith T Sunil <span>S6 IT</span>
            <a className={style.a} href="tel:+9195261 81296">95261 81296 </a>
          </li>
          <li className={style.li}>
            Sruthymol <span>S6 CS</span>
            <a className={style.a} href="tel:+9191888 37549">91888 37549 </a>
          </li>
          <li className={style.li}>
            Aswin Raphael <span>S6 EEE</span>
            <a className={style.a} href="tel:+9197464 01067">97464 01067 </a>
          </li>
          <li className={style.li}>
            Delan V S <span>S4 EC</span>
            <a className={style.a} href="tel:+9180781 46721">80781 46721 </a>
          </li>
          <li className={style.li}>
            Nihal S J <span>S4 ME</span>
            <a className={style.a} href="tel:+9181380 94784">81380 94784 </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Index;
