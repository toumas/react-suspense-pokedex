import { resolve } from "path";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const pokemons = {
  count: 949,
  previous: null,
  results: [
    {
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      name: "bulbasaur"
    },
    {
      url: "https://pokeapi.co/api/v2/pokemon/2/",
      name: "ivysaur"
    },
    {
      url: "https://pokeapi.co/api/v2/pokemon/3/",
      name: "venusaur"
    },
    {
      url: "https://pokeapi.co/api/v2/pokemon/4/",
      name: "charmander"
    },
    {
      url: "https://pokeapi.co/api/v2/pokemon/5/",
      name: "charmeleon"
    },
    {
      url: "https://pokeapi.co/api/v2/pokemon/6/",
      name: "charizard"
    },
    {
      url: "https://pokeapi.co/api/v2/pokemon/7/",
      name: "squirtle"
    },
    {
      url: "https://pokeapi.co/api/v2/pokemon/8/",
      name: "wartortle"
    },
    {
      url: "https://pokeapi.co/api/v2/pokemon/9/",
      name: "blastoise"
    }
  ],
  next: "https://pokeapi.co/api/v2/pokemon/?limit=9&offset=9"
};

class Api {
  getPokemons = async time => {
    await sleep(time);
    return pokemons;
  };
}

export default new Api();
