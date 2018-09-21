import React from "react";
import { createResource } from "simple-cache-provider";
import { cache } from "./cache";

import Api from "./Api";
import { Link } from "@reach/router";

const pokemonsResource = createResource(() => Api.getPokemons(1500));

const Pokemons = () => {
  const pokemons = pokemonsResource.read(cache);
  return (
    <ul>
      {pokemons.results.map(p => (
        <li key={p.name}>
          <Link to={p.name}>{p.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Pokemons;
