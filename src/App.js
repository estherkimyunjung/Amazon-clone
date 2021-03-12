import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Router path="/checkout">
            {/* Header */}
            <Checkout />
          </Router>
          <Router path="/">
            {/* Home */}
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
