import { sleep } from "./utils";
import { allPokemons, pokemons } from "./data";

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
