import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../../components/navbar";
import Footer from "../../components/pageFooter";

import { Link } from "gatsby";
import { render } from "react-dom";

import style from "../../styles/ipl.module.css";

class Index extends React.Component {
  state = {
    loading: true,
    table: null,
  };
  async componentDidMount() {
    const url = "/api/ipl21event/iplread";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ table: data, loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <main>
          <Navbar textcolor="black" />
          <div className={style.loadingContainer}>
            <h3>loading</h3>
          </div>
        </main>
      );
    }

    if (!this.state.table) {
      return (
        <main>
          <Navbar textcolor="black" />
          <div className={style.loadingContainer}>
            <h3>server error :(</h3>
          </div>
        </main>
      );
    }
    if (this.state.table) {
      const data = this.state.table;
      return (
        <main className={style.tableCont}>
          <Helmet>
            <title>Events | Dvaya</title>
          </Helmet>
          <Navbar textcolor="black" />
          <h1 className={style.iplheader}>IPL JACKPOT RANKINGS</h1>
          <table className={style.table}>
            <tbody>
              <tr className={style.trow}>
                <th className={style.tableHead}>Rank</th>
                <th className={style.tableHead}>Name</th>
                <th className={style.tableHead}>Points</th>
              </tr>
              <tr className={style.trow} id="first">
                <td className={style.tcell}>1</td>
                <td className={style.tcell}>{data.tablestruct[0].playername}</td>
                <td className={style.tcell}>{data.tablestruct[0].playerpoints}</td>
              </tr>
              <tr className={style.trow} id="second">
                <td className={style.tcell}>2</td>
                <td className={style.tcell}>{data.tablestruct[1].playername}</td>
                <td className={style.tcell}>{data.tablestruct[1].playerpoints}</td>
              </tr>
              <tr className={style.trow} id="third">
                <td className={style.tcell}>3</td>
                <td className={style.tcell}>{data.tablestruct[2].playername}</td>
                <td className={style.tcell}>{data.tablestruct[2].playerpoints}</td>
              </tr>
              <tr className={style.trow} id="fourth">
                <td className={style.tcell}>4</td>
                <td className={style.tcell}>{data.tablestruct[3].playername}</td>
                <td className={style.tcell}>{data.tablestruct[3].playerpoints}</td>
              </tr>
              <tr className={style.trow} id="fifth">
                <td className={style.tcell}>5</td>
                <td className={style.tcell}>{data.tablestruct[4].playername}</td>
                <td className={style.tcell}>{data.tablestruct[4].playerpoints}</td>
              </tr>
              <tr className={style.trow} id="sixth">
                <td className={style.tcell}>6</td>
                <td className={style.tcell}>{data.tablestruct[5].playername}</td>
                <td className={style.tcell}>{data.tablestruct[5].playerpoints}</td>
              </tr>
              <tr className={style.trow} id="seventh">
                <td className={style.tcell}>7</td>
                <td className={style.tcell}>{data.tablestruct[6].playername}</td>
                <td className={style.tcell}>{data.tablestruct[6].playerpoints}</td>
              </tr>
              <tr className={style.trow} id="eigth">
                <td className={style.tcell}>8</td>
                <td className={style.tcell}>{data.tablestruct[7].playername}</td>
                <td className={style.tcell}>{data.tablestruct[7].playerpoints}</td>
              </tr>
              <tr className={style.trow} id="ninth">
                <td className={style.tcell}>9</td>
                <td className={style.tcell}>{data.tablestruct[8].playername}</td>
                <td className={style.tcell}>{data.tablestruct[8].playerpoints}</td>
              </tr>
              <tr className={style.trow} id="tenth">
                <td className={style.tcell}>10</td>
                <td className={style.tcell}>{data.tablestruct[9].playername}</td>
                <td className={style.tcell}>{data.tablestruct[9].playerpoints}</td>
              </tr>
            </tbody>
          </table>

        </main>
        
      );
    }
  }
}

export default Index;
