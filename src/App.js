import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/main.css";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/DeFi-Dashboard" exact component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
