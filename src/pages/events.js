import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import { Link } from "gatsby";

function Index() {
  return (
    <main>
      <Helmet>
        <title>Events | Dvaya</title>
        <meta http-equiv="refresh" content="0 ; url=/events/ipljackpot" />
      </Helmet>
      <Navbar />
    </main>
  );
}

export default Index;
