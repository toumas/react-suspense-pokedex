import { sleep } from "./utils";
import { allPokemons, pokemons } from "./data";

export const getImagePath = name =>
  `https://img.pokemondb.net/artwork/large/${name}.jpg`;

class Api {
  getPokemons = async time => {
    await sleep(time);
    return allPokemons;
  };
  getPokemon = time => async name => {
    await sleep(time);
    return pokemons[name];
  };
}

export default new Api();
