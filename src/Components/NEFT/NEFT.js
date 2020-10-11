import React, { Component } from "react";

export default class NEFT extends Component {
  render() {
    return (
      <>
        <div className="panel panel-default m-4">
          <div className="panel-heading">
            <div className="pull-right">
              <i className="fa fa-university" style={{ fontSize: "20px" }}></i>
            </div>
            <h5 className="panel-title">
              <button
                data-toggle="collapse"
                className="border-0"
                data-target="#neft"
              >
                NEFT/RTGS
              </button>
            </h5>
          </div>
          <div id="neft" className="panel-collapse collapse">
            <div className="panel-body">
              <div id="net-banking" className="tab-pane pt-2">
                <div className="tab-pane" id="nav-tab-bank">
                  <h4 className="text-uppercase">Bank account details</h4>
                  <dl className="param mt-5">
                    <dt className="h4">Bank Name: </dt>
                    <dd> THE WORLD BANK</dd>
                  </dl>
                  <hr style={{ border: "1px solid black" }} />
                  <dl className="param">
                    <dt className="h4">Account Number: </dt>
                    <dd> 12345678912345</dd>
                  </dl>
                  <hr style={{ border: "1px solid black" }} />
                  <dl className="param">
                    <dt className="h4">IBAN: </dt>
                    <dd> 123456789</dd>
                  </dl>
                  <hr style={{ border: "1px solid black" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
