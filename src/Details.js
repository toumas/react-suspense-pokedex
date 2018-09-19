import React from "react";

const Details = ({
  match: {
    params: { name }
  }
}) => <h1>Details for {name}</h1>;

export default Details;
