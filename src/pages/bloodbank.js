import React from "react";
import { Helmet } from "react-helmet";

import style from "../styles/bloodbank.module.css";

import Navbar from "../components/navbar";

class Bloodbank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      dept: "CSE",
      group: "",
      semester: "S2",
      district: "Kasargod",
      showNext: false,
      finalise: false,
      success: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFinalSubmit = this.handleFinalSubmit.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handleDept = this.handleDept.bind(this);
    this.handleSemester = this.handleSemester.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleGroup = this.handleGroup.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ showNext: true });
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleMobile(event) {
    this.setState({ mobile: event.target.value });
  }
  handleDept(event) {
    this.setState({ dept: event.target.value });
  }
  handleSemester(event) {
    this.setState({ semester: event.target.value });
  }
  handleDistrict(event) {
    this.setState({ district: event.target.value });
  }
  handleGroup(event) {
    this.setState({ group: event.target.value });
  }
  handleFinalSubmit(event) {
    this.setState({ finalise: true });
    event.preventDefault();

    fetch("/api/bloodbankupdate", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: this.state.name,
        dept: this.state.dept,
        semester: this.state.semester,
        group: this.state.group,
        district: this.state.district,
        mobile: this.state.mobile,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result == "success") {
          this.setState({ success: true });
        }
      });
  }
  render() {
    return (
      <main>
        <Helmet>
          <title>Bloodbank | Dvaya</title>
        </Helmet>
        <Navbar textcolor="black" />
        <div className={style.hero}>
          <div className={style.container}>
            <div className={style.box1}>
              <div className={style.mini_box}>SFI GECI</div>
              <h1 className={style.heading}>Bloodbank Registration</h1>
              <div
                className={style.success}
                style={{
                  display:
                    this.state.finalise && !this.state.success
                      ? "block"
                      : "none",
                }}
              >
                submitting...
              </div>
              <div
                className={style.success}
                style={{
                  display: this.state.success ? "block" : "none",
                }}
              >
                Success✅! Thank you for being part of this campaign.
              </div>
            </div>
            <form
              className={style.form}
              onSubmit={this.handleSubmit}
              style={{ display: this.state.showNext ? "none" : "flex" }}
            >
              <p className={style.para}>enter your name and mobile number</p>
              <input
                type="text"
                required
                className={style.input}
                placeholder="Full Name"
                onChange={this.handleChange}
              />
              <input
                type="text"
                className={style.input}
                placeholder="Mobile Number"
                required
                onChange={this.handleMobile}
              />
              <input className={style.submit} type="submit" />
            </form>

            <form
              className={style.form}
              onSubmit={this.handleFinalSubmit}
              style={{
                display:
                  this.state.showNext && !this.state.finalise ? "flex" : "none",
              }}
            >
              <p className={style.para}>
                hi {this.state.name}, please fill the details to complete the
                registration
              </p>
              <div className={style.label}>Department</div>

              <select placeholder={this.state.dept} onChange={this.handleDept}>
                <option value="CSE">CSE</option>
                <option value="EC">EC</option>
                <option value="ME">ME</option>
                <option value="IT">IT</option>
                <option value="EEE">EEE</option>
              </select>

              <div className={style.label}>Semester</div>

              <select
                placeholder={this.state.semester}
                onChange={this.handleSemester}
              >
                <option value="S2">S2</option>
                <option value="S4">S4</option>
                <option value="S6">S6</option>
                <option value="S8">S8</option>
              </select>

              <div className={style.label}>District</div>
              <select
                placeholder={this.state.district}
                onChange={this.handleDistrict}
              >
                <option value="Kasargod">Kasargod</option>
                <option value="Kannur">Kannur</option>
                <option value="Wayanad">Wayanad</option>
                <option value="Kozhikode">Kozhikode</option>
                <option value="Malappuram">Malappuram</option>
                <option value="Palakkad">Palakkad</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Ernakulam">Ernakulam</option>
                <option value="Idukki">Idukki</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Pathanamthitta">Pathanamthitta</option>
                <option value="Alappuzha">Alappuzha</option>
                <option value="Kollam">Kollam</option>
                <option value="Trivandrum">Trivandrum</option>
              </select>
              <div className={style.label}>Blood Group</div>

              <input
                className={style.input2}
                type="text"
                placeholder="eg:A+ve,AB-ve..."
                onChange={this.handleGroup}
                required
              />

              <input className={style.submit} type="submit" />
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Bloodbank;
