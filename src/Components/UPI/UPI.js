import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./UPI.css";
export default class UPI extends Component {
  state = {
    creditvalid: false,
    value: "",
  };
  handleUI = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleModel = (e) => {
    console.log(this.state.value);
    e.preventDefault();
    const{value}=this.state;
    if (value === "") {
      document.querySelector(".errors").style.display = "block";
      document.querySelector(".errors").innerHTML  ="Please enter a valid UPI ID";
    } else {
      this.setState({
        creditvalid:true
      })
    }
  };
  render() {
    const { value } = this.state;
    if (this.state.creditvalid) {
      return <Redirect to="finalpage" />;
    }
    return (
      <>
        {" "}
        <div className="panel panel-default m-4">
          <div className="panel-heading">
            <div className="pull-right">
              <i
                className="fa fa-mobile-phone"
                style={{ fontSize: "28px" }}
              ></i>
            </div>
            <h5 className="panel-title">
              <button
                data-toggle="collapse"
                className="border-0"
                data-target="#upi"
              >
                UPI ID
              </button>
            </h5>
          </div>
          <div id="upi" className="panel-collapse collapse">
            <div className="panel-body">
              <div id="upi" className="tab-pane pt-2">
                <form onClick={this.handleModel}>
                  <div className="form-row align-items-center">
                    <div className="col-auto">
                      <label>UPI ID (Google Pay, BHIM, PhonePe & more)</label>
                      <input
                        type="number"
                        className="form-control mb-2 uiid"
                        id="inlineFormInput"
                        placeholder="Enter your UPI ID"
                        value={this.state.value}
                        onChange={this.handleUI}
                      />
                    </div>
                    <div className="col-auto">
                      <button type="submit" className="btn btn-primary mt-4">
                        Verify
                      </button>
                    </div>

                    {/* modal */}
                  </div>
                  <p className="errors h5">error</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
