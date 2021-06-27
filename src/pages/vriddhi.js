import React from "react";
import { Helmet } from "react-helmet";

import style from "../styles/vriddhi/main.module.css";

import Navbar from "../components/navbar";
import { Link } from "gatsby";
function Loading(props) {
  return (
    <main>
      <Helmet>
        <title>{props.loadState}</title>
      </Helmet>
      <div className={style.blog_loading}>
        <h1 className={style.heading1}>വൃദ്ധി</h1>

        <p className={style.load_state}>{props.loadState}</p>
      </div>
    </main>
  );
}
class Index extends React.Component {
  state = {
    loading: true,
    standings: null,
    results: null,
  };
  async componentDidMount() {
    const url = "/api/vriddhi/getStandings";
    const url2 = "/api/vriddhi/getResults";

    const response = await fetch(url, { method: "get", mode: "cors" });
    const data = await response.json();
    this.setState({ standings: data });

    const response2 = await fetch(url2, { method: "get", mode: "cors" });
    const data2 = await response2.json();
    this.setState({ results: data2, loading: false });

    console.log(data);
    console.log(data2);
  }

  render() {
    if (this.state.loading) {
      return (
        <main>
          <Loading loadState="loading..." />
          );
          <Helmet>
            <title>Vriddhi Arts Fest | Dvaya</title>
            <meta
              name="description"
              content="Vriddhi Latest Results And Point Table"
            />
            <meta name="robots" content="index, follow" />
            <meta
              http-equiv="Content-Type"
              content="text/html; charset=utf-8"
            />
            <meta name="language" content="English" />
          </Helmet>
        </main>
      );
    }

    if (!this.state.standings) {
      return <Loading loadState="couldn't reach the server" />;
    }
    if (this.state.standings) {
      const data = this.state.standings;
      const data2 = this.state.results;
      const length = data2.length;
      const updatedDate = new Date(data2[length - 1].createdAt);

      return (
        <main>
          <Helmet>
            <title>Vriddhi Arts Fest | Dvaya</title>
            <meta
              name="description"
              content="Vriddhi Latest Results And Point Table"
            />
            <meta name="robots" content="index, follow" />
            <meta
              http-equiv="Content-Type"
              content="text/html; charset=utf-8"
            />
            <meta name="language" content="English" />
          </Helmet>
          <Navbar textcolor="white" />
          <div className={style.container}>
            <div className={style.head}>
              <h1 className={style.heading1}>വൃദ്ധി</h1>
              <p className={style.heading1_subtitle}>online kalotsavam</p>
            </div>
            <div className={style.content}>
              <div className={style.table1}>
                <div className={style.standing}>
                  <table>
                    <tr>
                      <th>Dept</th>
                      <th>Points</th>
                    </tr>
                    <tr>
                      <td>{data.result.first}</td>
                      <td>{data.result.firstPoints}</td>
                    </tr>
                    <tr>
                      <td>{data.result.second}</td>
                      <td>{data.result.secondPoints}</td>
                    </tr>
                    <tr>
                      <td>{data.result.third}</td>
                      <td>{data.result.thirdPoints}</td>
                    </tr>
                    <tr>
                      <td>{data.result.fourth}</td>
                      <td>{data.result.fourthPoints}</td>
                    </tr>
                    <tr>
                      <td>{data.result.fifth}</td>
                      <td>{data.result.fifthPoints}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className={style.table2}>
                <div className={style.results_peek}>
                  <p>Latest Result</p>
                  <p className={style.latest_result_event}>
                    {data2[length - 1].eventName}
                  </p>
                  <div className={style.results_peek_stand}>
                    <p className={style.results_peek_position}>First</p>
                    <p className={style.results_peek_name}>
                      {data2[length - 1].firstAll}
                    </p>
                    <p className={style.results_peek_position}>Second</p>
                    <p className={style.results_peek_name}>
                      {data2[length - 1].secondAll}
                    </p>
                    <p className={style.results_peek_position}>Third</p>
                    <p className={style.results_peek_name}>
                      {data2[length - 1].thirdAll}
                    </p>
                  </div>
                </div>
                <Link to="/vriddhi/results">
                  <div className={style.results_button}>
                    <span>All Results</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className={style.aboutcontent}>
              <p>
                Last Updated On{" "}
                {updatedDate.toLocaleString("en-us", {
                  month: "long",
                  day: "numeric",
                })}{" "}
                {updatedDate.toLocaleTimeString()}
              </p>
              
            </div>
          </div>
        </main>
      );
    }
  }
}

export default Index;
