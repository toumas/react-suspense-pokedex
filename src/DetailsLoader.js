import React from "react";
import { createResource } from "simple-cache-provider";
import { cache } from "./cache";

import { sleep } from "./utils";
import Api from "./Api";

const detailsResource = createResource(async () => {
  await sleep(1500);
  const mod = await import("./Details");
  return mod.default;
});

const LazyDetails = props => {
  const Details = detailsResource.read(cache);
  return <Details {...props} />;
};

const pokemonResource = createResource(name => {
  return Api.getPokemon(2500)(name);
});

const LazyPokemon = ({ name }) => {
  const Pokemon = pokemonResource.read(cache, name);
  return <pre>{JSON.stringify(Pokemon, null, 4)}</pre>;
};

const DetailsLoader = props => (
  <React.Fragment>
    <React.Placeholder>
      <LazyDetails {...props} />
    </React.Placeholder>
    <React.Placeholder delayMs={500} fallback={<div>Loading...</div>}>
      <LazyPokemon {...props} />
    </React.Placeholder>
  </React.Fragment>
);

export default DetailsLoader;
