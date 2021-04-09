import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import HistorySection from "../components/sfiPage/HistorySection";
import UnitSection from "../components/sfiPage/UnitSection";
import ProgramSection from "../components/sfiPage/ProgramSection";

import "../styles/sfi.css";

import Footer from "../components/pageFooter";

class Sfi extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHistory: true,
      showPrograms: false,
      showUnit: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showHistory":
        this.setState({
          showHistory: !this.state.showHistory,
          showPrograms: false,
          showUnit: false,
        });
        break;
      case "showPrograms":
        this.setState({
          showPrograms: !this.state.showPrograms,
          showHistory: false,
          showUnit: false,
        });
        break;
      case "showUnit":
        this.setState({
          showUnit: !this.state.showUnit,
          showHistory: false,
          showPrograms: false,
        });
        break;
    }
  }

  render() {
    const { showHistory, showPrograms, showUnit } = this.state;

    return (
      <main>
        <Helmet>
          <title>Sfi Geci | Dvaya</title>
        </Helmet>
        <Navbar />
        <div id="pageBg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="1440"
            height="560"
            preserveAspectRatio="none"
            viewBox="0 0 1440 560"
          >
            <g mask='url("#SvgjsMask1000")' fill="none">
              <path
                id="firstWave"
                d="M -290.8324656920323,413 C -194.83,355.4 -2.83,141.6 189.1675343079677,125 C 381.17,108.4 477.17,319.2 669.1675343079677,330 C 861.17,340.8 957.17,155.8 1149.1675343079678,179 C 1341.17,202.2 1571,431.6 1629.1675343079678,446 C 1687.33,460.4 1477.83,290 1440,251"
                stroke-width="2"
              ></path>
              <path
                id="secondWave"
                d="M -754.852304407538,114 C -658.85,180.8 -466.85,418.2 -274.85230440753793,448 C -82.85,477.8 13.15,268.8 205.14769559246207,263 C 397.15,257.2 493.15,422 685.147695592462,419 C 877.15,416 1014.18,269.6 1165.147695592462,248 C 1316.12,226.4 1385.03,298.4 1440,311"
                stroke-width="2"
              ></path>
              <path
                id="thirdWave"
                d="M -376.3313029171089,243 C -280.33,271.8 -88.33,413.6 103.66869708289104,387 C 295.67,360.4 391.67,119.2 583.6686970828911,110 C 775.67,100.8 871.67,329.2 1063.668697082891,341 C 1255.67,352.8 1468.4,148.4 1543.668697082891,169 C 1618.93,189.6 1460.73,389 1440,444"
                stroke-width="2"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1000">
                <rect width="1440" height="560" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>
        <div className="container">
          <div className="head-rectangle">
            <h1>SFI GECI</h1>
          </div>

          <div className="button-section">
            <button
              id="historyButton"
              className= {showHistory ? "active" : null}
              onClick={() => this.hideComponent("showHistory")}
            >
              History
            </button>
            <button
              id="programsButton"
              className= {showPrograms ? "active" : null}
              onClick={() => this.hideComponent("showPrograms")}
            >
              Active Programs
            </button>
            <button
              id="unitButton"
              className= {showUnit ? "active" : null}
              onClick={() => this.hideComponent("showUnit")}
            >
              2019-20 Unit
            </button>
          </div>
          {showHistory && <HistorySection />}
          {showPrograms && <ProgramSection />}
          {showUnit && <UnitSection />}
        </div>
        <hr />
        <Footer/>
      </main>
    );
  }
}
export default Sfi;
