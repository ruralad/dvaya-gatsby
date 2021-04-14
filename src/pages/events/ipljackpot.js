import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../../components/navbar";
import { Link } from "gatsby";

function Index() {
  return (
    <main>
      <Helmet>
        <title>Events | Dvaya</title>
      </Helmet>
      <Navbar textcolor="black" />
    </main>
  );
}

export default Index;
