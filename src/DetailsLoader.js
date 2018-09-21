import React from "react";
import { createResource } from "simple-cache-provider";
import { cache } from "./cache";

import { sleep } from "./utils";

const detailsResource = createResource(async () => {
  await sleep(1500);
  const mod = await import("./Details");
  return mod.default;
});

const LazyDetails = props => {
  const Details = detailsResource.read(cache);
  return <Details {...props} />;
};

const DetailsLoader = props => (
  <React.Placeholder delayMs={500} fallback={<div>Loading...</div>}>
    <LazyDetails {...props} />
  </React.Placeholder>
);

export default DetailsLoader;
