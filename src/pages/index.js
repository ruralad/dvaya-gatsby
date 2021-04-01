import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Navbar from "../../components/navbar";

import "../styles/index.css";
import "../styles/navbar.css";

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
        className="background-image"
        alt="college-frontview"
        src={backgroundImage}
      />
      <Navbar />

      <p>{date ? date : "Loading date..."}</p>
    </main>
  );
}

export default Index;
