import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";

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
    <main>
      <Helmet>
        <title>Dvaya | Sfi Gec Idukki</title>
      </Helmet>
      <img
        className={style.background_image}
        alt="college-frontview"
        src={backgroundImage}
      />
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
