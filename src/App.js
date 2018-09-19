import React from "react";
import { hot } from "react-hot-loader";
import { Router, Route } from "router-suspense";

import Home from "./Home";
import Details from "./Details";

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/:name" component={Details} />
  </Router>
);

// Setup react-hot-loader for Parcel.
// This is removed in production automagically.
export default hot(module)(App);
