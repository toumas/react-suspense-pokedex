import React from "react";
import { hot } from "react-hot-loader";
import { Router } from "@reach/router";

import Home from "./Home";
import DetailsLoader from "./DetailsLoader";

const App = () => (
  <Router>
    <Home path="/" />
    <DetailsLoader path=":name" />
  </Router>
);

// Setup react-hot-loader for Parcel.
// This is removed in production automagically.
export default hot(module)(App);
