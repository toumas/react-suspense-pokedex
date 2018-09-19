import React from "react";
import { createCache, createResource } from "simple-cache-provider";
import { cache } from "./cache";
import { Link } from "@reach/router";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Lazy load!
const getThing = createResource(
  () => sleep(1000).then(() => import("./Thing").then(mod => mod.default)),
  thing => thing
);

const Thing = props => {
  const Comp = getThing.read(cache, props);
  return <Comp {...props} />;
};

function Home() {
  return (
    <React.Fragment>
      <h1>Suspense</h1>
      <Link to="foo">Foo</Link>
      <React.Placeholder delayMs={500} fallback={<div>🌀 'Loading....'</div>}>
        <Thing />
      </React.Placeholder>
    </React.Fragment>
  );
}

export default Home;
