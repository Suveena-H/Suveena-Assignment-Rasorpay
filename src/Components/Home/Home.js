import React, { Component } from "react";
import DonationForm from "../DonationForm/DonationForm";
import "./Home.css"
import PaymentMethod from "../PaymentMethod/PaymentMethod";
export default class Home extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="main-text text-center pt-3 text-primary">
          <h2>Donation Page for Educational Trust</h2>
        </div>
        <DonationForm />
       
      </div>
    );
  }
}
