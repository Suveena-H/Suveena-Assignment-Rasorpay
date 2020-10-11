import React, { Component } from "react";
import "./CreditCard.css";
import FinalPage from "../FinalPage/FinalPage";
import {Redirect} from "react-router-dom";
export default class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditvalid:false,
      cardName: "",
      cardNumber: "",
      expMDate: "",
      expYDate: "",
      cvv: "",
      formErrors: {},
    };
  }

  handleFormValidation() {
    const { cardName, cardNumber, expMDate, expYDate, cvv } = this.state;
    let formErrors = {};
    let formIsValid = true;

    //CARD NAME
    if (!cardName) {
      formIsValid = false;
      formErrors.cardNameErr = "Card Name is required.";
    } else if (cardName.length < 5) {
      formIsValid = false;
      formErrors.cardNameErr = "Minimum 4 charactors are required.";
    }
    //CARD NUMBE
    var cardno = cardNumber.replace(/[^0-9]/gi, "");
    console.log(cardno);
    if (!cardNumber) {
      formIsValid = false;
      formErrors.cardNoErr = "Card Number is required.";
    } else if (!/\d{15,16}(~\W[a-zA-Z])*$/.test(cardNumber)) {
      formIsValid = true;
      formErrors.cardNoErr = "Enter a valid .";
    }
    //EXPIRY DATE
    if (!expMDate) {
      formIsValid = false;
      formErrors.expDateMErr = "Expiry date is required.";
    } else if (!expMDate.match(/^(0[1-9]|1[012])\/\d{2}$/)) {
      formIsValid = false;
      formErrors.expDateMErr = "Expiry date is imp  required.";
    }
    if (!cvv) {
      // CVV
      formIsValid = false;
      formErrors.cvvErr = "cvv is required.";
    } else if (cvv.length < 3) {
      formIsValid = false;
      formErrors.cvvErr = "Enter a valid cvv.";
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }
  // HANDLE ONCLICK
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  // HANDLE SUBMIT
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleFormValidation()) {
      alert("You have been successfully registered.");
      this.setState({
        creditvalid:true
      })
    }
  
  };
  render() {
    if(this.state.creditvalid){
      return <Redirect to="finalpage"/>
    }
    const {
      cardNameErr,
      cardNoErr,
      expDateMErr,
      cvvErr,
    } = this.state.formErrors;
    
    return (
      <div className="panel panel-default mx-4">
        <div className="panel-heading">
          <div className="pull-right">
            <i
              className="fa fa-cc-amex"
              style={{ fontSize: "25px", color: "blue" }}
            ></i>
            <i
              className="fa fa-cc-visa"
              style={{ fontSize: "25px", color: "darkblue" }}
            ></i>
            <i
              className="fa fa-cc-mastercard"
              style={{ fontSize: "25px", color: "#e45018" }}
            ></i>
          </div>
          <h5 className="panel-title">
            <button
              data-toggle="collapse"
              className="border-0"
              data-target="#creditcard"
            >
              Credit Card/Debit Card
            </button>
          </h5>
        </div>
        <div id="creditcard" className="panel-collapse collapse creditcard">
          <div className="panel-body ">
            <div className="tab-content">
              <form onSubmit={this.handleSubmit}>
                {/* CARD OWNER */}
                <div className="form-group">
                  {" "}
                  <label>
                    <h4>Card Owner</h4>
                  </label>{" "}
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Card Owner Name"
                    value={this.state.cardName}
                    onChange={this.handleChange}
                    className={
                      cardNameErr ? " showError form-control" : "form-control"
                    }
                  />
                  {cardNameErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {cardNameErr}
                    </div>
                  )}
                </div>
                {/* CARD NUMBER */}
                <div className="form-group">
                  {" "}
                  <label>
                    <h4>Card number</h4>
                  </label>
                  <div className="form-group">
                    <input
                      type="text"
                      name="cardNumber"
                      value={this.state.cardNumber}
                      onChange={this.handleChange}
                      maxLength="16"
                      placeholder="Eg:0000 0000 0000 0000"
                      className={
                        cardNoErr ? "showError form-control" : "form-control"
                      }
                    />
                    {cardNoErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {cardNoErr}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="form-group">
                      <label>
                        <span>
                          <h4>Expiration Date</h4>
                        </span>
                      </label>
                      <div className="form-group">
                        <div className="row expiryDate">
                          <div className="col-lg-10 col-10">
                            <input
                              type="text"
                              name="expMDate"
                              className={
                                expDateMErr
                                  ? "showError form-control"
                                  : " form-control"
                              }
                              placeholder="MM/YY"
                              minLength="5"
                              maxLength="5"
                              value={this.state.expMDate}
                              onChange={this.handleChange}
                            />

                            {expDateMErr && (
                              <div style={{ color: "red", paddingBottom: 10 }}>
                                {expDateMErr}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group mb-4">
                      <label>
                        <h4>
                          CVV <i className="fa fa-question-circle d-inline"></i>
                        </h4>
                      </label>
                      <input
                        type="password"
                        name="cvv"
                        placeholder="&#9679;&#9679;&#9679;"
                        className={
                          cvvErr ? "showError form-control" : " form-control"
                        }
                        className="form-control"
                        maxLength="3"
                        value={this.state.cvv}
                        onChange={this.handleChange}
                      />
                      {cvvErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {cvvErr}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
