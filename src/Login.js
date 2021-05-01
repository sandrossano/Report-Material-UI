import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import Login from "./components/Login.jsx";
import App2 from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch />
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard" component={App2} />
        <Switch />
      </div>
      ,
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
