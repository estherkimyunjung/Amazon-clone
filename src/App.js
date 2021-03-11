import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Router path="/checkout">
            {/* Header */}
            <Header />
            <h1>CHECKOUT HERE</h1>
          </Router>
          <Router path="/">
            <Header />
            {/* Home */}
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
