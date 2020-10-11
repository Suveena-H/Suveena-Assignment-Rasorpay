import React, { Component } from "react";
import "./DonationForm.css";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import { Redirect } from "react-router-dom";
class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      name: "",
      email: "",
      mobile: "",
      dob: "",
      amount: "",
      panno: "",
      formErrors: {},
    };
  }

  //NAME VALIDATION START
  handleFormValidation() {
    const { name, email, mobile, dob, amount, panno } = this.state;
    let formErrors = {};
    let formIsValid = true;
    //NAME VALIDATION
    if (!name) {
      formIsValid = false;
      formErrors["nameErr"] = "Name is required.";
    } else if (name.length < 3) {
      formIsValid = false;
      formErrors["nameErr"] =
        "Domain Name should have only letters and must be 3 characters long!.";
    } else if (!name.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      formErrors["nameErr"] = "Name is charactors.";
    }

    // EMAIL VALIDATION
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!email) {
      formIsValid = false;
      formErrors["emailErr"] = "Email is required.";
    } else if (!reg.test(email)) {
      formIsValid = false;
      formErrors["emailErr"] = "Enter the valid email with @ and ..";
    }
    // MOBILE NUMBER VALIDATION
    var valid = /^\d{10}$/;
    if (!mobile) {
      formIsValid = false;
      formErrors["mobileErr"] = "Mobile Number is required.";
    } else if (!mobile.match(valid)) {
      formIsValid = false;
      formErrors["mobileErr"] =
        "Please enter a phone number so we can call if there are any issues with delivery..";
    }
    //DOB VALIDATION
    var todayDate = dob.slice(0, 4);
    var real = new Date().getFullYear();

    if (!dob) {
      formIsValid = false;
      formErrors["dobErr"] = "Date of Birth is required.";
    } else if (todayDate > real) {
      formIsValid = false;
      formErrors["dobErr"] = "Enter a valid Date of Birth.";
    }
    if (!amount) {
      formIsValid = false;
      formErrors["amountErr"] = "Donation Amount is required.";
    }
    // PAN NUMBER VALIDATION 
    var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    if (!panno) {
      formIsValid = false;
      formErrors["pannoErr"] = "PAN  is required.";
    } else if (!regex.test(panno.toUpperCase())) {
      formIsValid = false;
      formErrors["pannoErr"] = "Enter a valid Pan No.";
    }
    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleFormValidation()) {
      alert("Form is Successfully Completed");
      document.querySelector(".hide").classList.add("show");
    }
  };

  render() {
    const {
      nameErr,
      emailErr,
      mobileErr,
      dobErr,
      amountErr,
      pannoErr,
    } = this.state.formErrors;

    return (
      <>
        <div className="container">
          <div className=" col-lg-12 mt-4  donation-form ">
            <h2 className="text-center donation-text">Donation form</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="main ">
                {/* NAME START */}
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name of Donor"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className={
                      nameErr ? " showError form-control" : "form-control"
                    }
                  />
                  {nameErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {nameErr}
                    </div>
                  )}
                </div>
                {/* NAME END */}
                {/* EMAIL START */}
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email ID"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className={
                      emailErr ? " showError form-control" : "form-control"
                    }
                  />
                  {emailErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {emailErr}
                    </div>
                  )}
                </div>
                {/* EMAIL END */}

                {/* MOBILE NUMBER START */}
                <div className="form-group">
                  <input
                    type="number"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={this.state.mobile}
                    onChange={this.handleChange}
                    maxLength="10"
                    className={
                      mobileErr ? " showError form-control" : "form-control"
                    }
                  />
                  {mobileErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {mobileErr}
                    </div>
                  )}
                </div>
                {/* MOBILE NUMBER END */}
                {/* DOB START */}
                <div className="form-group">
                  <input
                    type="date"
                    name="dob"
                    placeholder="DD-MM-YY"
                    value={this.state.dob}
                    pattern="\d{1,2}/\d{1,2}/\d{4}"
                    onChange={this.handleChange}
                    className={
                      dobErr ? " showError form-control" : "form-control"
                    }
                  />
                  {dobErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {dobErr}
                    </div>
                  )}
                </div>
                {/* DOB END */}
                {/* DONATION AMOUNT START */}
                <div className="form-group">
                  <input
                    type="number"
                    name="amount"
                    placeholder="Donation Amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                    className={
                      amountErr ? " showError form-control" : "form-control"
                    }
                  />
                  {amountErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {amountErr}
                    </div>
                  )}
                </div>
                {/* DONATION AMOUNT END */}
                {/* PAN NO START */}
                <div className="form-group pandetail">
                  <input
                    type="text"
                    name="panno"
                    placeholder="Pan Detail"
                    value={this.state.panno}
                    onChange={this.handleChange}
                    className={
                      pannoErr
                        ? " showError form-control text-uppercase"
                        : "form-control text-uppercase"
                    }
                  />
                  {pannoErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {pannoErr}
                    </div>
                  )}
                </div>
                {/* PAN NO END */}
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
        <PaymentMethod />
      </>
    );
  }
}
export default DonationForm;
