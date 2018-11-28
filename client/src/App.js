import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Stores from "./pages/Stores";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./components/Style.css";

const App = () => (
  <Router>
    <div className = "full">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/stores" component={Stores}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
