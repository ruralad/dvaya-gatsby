import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import NotificationBar from "../components/notificationbar";

import style from "../styles/index.module.css";

import backgroundImage from "../images/college_frontview_compressed.webp";

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main className={style.containermain}>
      <Helmet>
        <title>Dvaya | Sfi Gec Idukki</title>
        <meta charset="UTF-8" />
        <meta name="title" content="Dvaya | Sfi Geci" />
        <meta
          name="description"
          content="Official website of Students Federation Of India Government Engineering College Idukki  Unit."
        />
        <meta
          name="keywords"
          content="SFI, GECI,Students federation of india, blog, sfi blog, sfi geci blog, sfi geci, sfi protest, gec idukki, government engineering college idukki, dvaya,sfi geci website"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Helmet>
      <img
        className={style.background_image}
        alt="college-frontview"
        src={backgroundImage}
      />

      <NotificationBar />
      <Navbar />
      <section className={style.indexsection}>
        <h1>തുടങ്ങാൻ ഇതിലും നല്ല സ്ഥലം വേറെ ഇല്ല</h1>
      </section>
      {/* <footer>
      <div>
        <img
          className="sfilogo"
          src={sfilogo}
          alt="sfigeciLogo"
        />
        <p>
          Students Federation of India <br />
          GECI Unit
        </p>
      </div>
    </footer> */}
    </main>
  );
}

export default Index;
