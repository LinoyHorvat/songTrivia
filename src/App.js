import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "./components/Game";
import HomePage from "./components/HomePage";
import Rules from "./components/Rules";
import Navbar from "./components/Navbar";
import Results from "./components/Results";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/rules" exact component={Rules} />
          <Route path="/Game" exact component={Game}/>
          <Route path="/results" exact component={Results} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
