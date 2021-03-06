import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/header.js";
import { Home } from "./components/home.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
