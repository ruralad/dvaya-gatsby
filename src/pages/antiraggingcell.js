import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";


function Index() {
  return (
    <main>
      <Helmet>
        <title>Anti-Ragging Cell | Dvaya</title>
      </Helmet>
      <Navbar />

    </main>
  );
}

export default Index;
