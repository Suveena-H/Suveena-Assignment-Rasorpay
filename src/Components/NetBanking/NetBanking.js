import React, { Component } from "react";
import { BankLogo } from "./NetBankLogo";
import { Redirect } from "react-router-dom";
export default class NetBanking extends Component {
  state = {
    data: BankLogo,
    creditvalid:false,
  };
handlePayment=()=>{
   this.setState({
     creditvalid: true,
   });
}
render() {
   if (this.state.creditvalid) {
     return <Redirect to="finalpage" />;
   }
    const { data } = this.state;
    const option = data.map((item, id) => {
      return (
        <option key={id} value="">
          {item.name}
          {item.img}
        </option>
      );
    });
    return (
      <>
        <div className="panel panel-default m-4">
          <div className="panel-heading">
            <div className="pull-right">
              <i className="fa fa-mobile-phone" style={{ fontSize: "28px" }}></i>
            </div>
            <h5 className="panel-title">
              <button
                data-toggle="collapse"
                className="border-0"
                data-target="#netBank"
              >
                Net Banking
              </button>
            </h5>
          </div>
          <div id="netBank" className="panel-collapse collapse">
            <div className="panel-body">
              <div id="net-banking" className="tab-pane pt-2">
                <div className="form-group">
                  {" "}
                  <label>
                    <h4>Select your Bank</h4>
                  </label>{" "}
                  <select
                    className="form-control"
                    id="ccmonth"
                    defaultValue="{Bank}"
                  >
                    {option}
                  </select>
                </div>
                <div className="form-group">
                  <p>
                    {" "}
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.handlePayment}
                     
                    >
                      <i className="fas fa-mobile-alt mr-2"></i> Proceed Pyment
                    </button>
                  </p>
                </div>
                
                <p className="text-muted">
                  Note: After clicking on the button, you will be directed to a
                  secure gateway for payment. After completing the payment
                  process, you will be redirected back to the website to view
                  details of your order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
