import React, { Component } from "react";
import "./PaymentMethod.css";

import CreditCard from "../CreditCard/CreditCard";
import NetBanking from "../NetBanking/NetBanking";
import UPI from "../UPI/UPI";
import NEFT from "../NEFT/NEFT";
export default class PaymentMethod extends Component {
  render() {
    return (
      <div className="container paymentmethod mt-5 hide">
        {/* PAYMNT MODE  */}
        <div className="container" >
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
              <div className="col-lg-12">
                <div className="ibox">
                  <div className="ibox-title h2 mb-3 text-center payment-text">
                    Payment method
                  </div>
                  <div className="ibox-content">
                    <div className="panel-group payments-method" id="accordion">
                      <CreditCard />
                      <NetBanking />
                      <UPI />
                      <NEFT />
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
