import React from "react";
import { createResource } from "simple-cache-provider";
import { cache } from "./cache";

import { sleep } from "./utils";
import Api from "./Api";

const titleResource = createResource(async () => {
  await sleep(1500);
  const mod = await import("./Title");
  return mod.default;
});

const TitleLoader = props => {
  const Title = titleResource.read(cache);
  return <Title {...props} />;
};

const pokemonResource = createResource(name => {
  return Api.getPokemon(2500)(name);
});

const PokemonLoader = ({ name }) => {
  const Pokemon = pokemonResource.read(cache, name);
  return <pre>{JSON.stringify(Pokemon, null, 4)}</pre>;
};

const Details = props => (
  <React.Fragment>
    <React.Placeholder>
      <TitleLoader {...props} />
    </React.Placeholder>
    <React.Placeholder delayMs={500} fallback={<div>Loading...</div>}>
      <PokemonLoader {...props} />
    </React.Placeholder>
  </React.Fragment>
);

export default Details;
