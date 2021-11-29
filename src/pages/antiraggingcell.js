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
            Shamseer K P <span>S7 ME</span>
            <a className={style.a} href="tel:+9179026 30020">79026 30020 </a>
          </li>
          <li className={style.li}>
            Athul T Sunil <span>S7 IT</span>
            <a className={style.a} href="tel:+9170257 49051">70257 49051 </a>
          </li>
          <li className={style.li}>
            Havin K H <span>S7 IT</span>
            <a className={style.a} href="tel:+9175618 61232">75618 61232 </a>
          </li>
          <li className={style.li}>
            Binay Binu <span>S7 EC </span>
            <a className={style.a} href="tel:+9170257 49051">70257 49051 </a>
          </li>
          <li className={style.li}>
            Sruthymol <span>S7 CS</span>
            <a className={style.a} href="tel:+9191888 37549">91888 37549 </a>
          </li>
          <li className={style.li}>
            Bineesh B S<span>S7 EEE</span>
            <a className={style.a} href="tel:+9181298 76370">81298 76370</a>
          </li>
          <li className={style.li}>
            Goutham Krishna S<span>S5 CS</span>
            <a className={style.a} href="tel:+9199466 70433">99466 70433 </a>
          </li>
          <li className={style.li}>
            Gokul Krishna<span>S5 IT</span>
            <a className={style.a} href="tel:+9175899 16635">75899 16635 </a>
          </li>
          <li className={style.li}>
            Bhavya R Krishna<span>S5 EEE</span>
            <a className={style.a} href="tel:+9182813 31889">82813 31889 </a>
          </li>
          <li className={style.li}>
            Ashlin George<span>S3 EEE</span>
            <a className={style.a} href="tel:+9162389 30115">62389 30115 </a>
          </li>
          <li className={style.li}>
            Theertha D<span>S3 IT</span>
            <a className={style.a} href="tel:+9183048 98295">83048 98295</a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Index;
