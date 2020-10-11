import React, { Component } from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import FinalPage from "./Components/FinalPage/FinalPage";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/finalpage" component={FinalPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
