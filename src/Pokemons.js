import React from "react";
import { createCache, createResource } from "simple-cache-provider";
import { cache } from "./cache";

import Api from "./Api";

const pokemonsResource = createResource(() => Api.getPokemons(1500));

const Pokemons = () => {
  const pokemons = pokemonsResource.read(cache);
  return (
    <ul>
      {pokemons.results.map(p => (
        <li key={p.name}>{p.name}</li>
      ))}
    </ul>
  );
};

export default Pokemons;
