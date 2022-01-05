import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "./components/Game";
import HomePage from "./components/HomePage";
import Rules from "./components/Rules";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import { useState, useEffect } from "react";

export default function App() {
  const [appScore, setAppScore] = useState(0);
  // useEffect(() => {
  //   console.log(`from App ${appScore}`)
  // },[appScore])
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {console.log(`from App ${appScore}`)}
          <Route path="/" exact component={HomePage} />
          <Route path="/rules" exact component={Rules} />
          <Route path="/Game">
            <Game setAppScore={setAppScore} appScore={appScore} />
          </Route>
          <Route path="/results">
            <Results appScore={appScore} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
