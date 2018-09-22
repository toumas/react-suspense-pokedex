export const allPokemons = {
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

export const pokemons = {
  bulbasaur: {
    base_experience: 64,
    height: 7,
    held_items: [],
    id: 1,
    is_default: true,
    location_area_encounters: "/api/v2/pokemon/1/encounters",
    name: "bulbasaur",
    order: 1,
    weight: 69
  },
  ivysaur: {
    base_experience: 142,
    height: 10,
    held_items: [],
    id: 2,
    is_default: true,
    location_area_encounters: "/api/v2/pokemon/2/encounters",
    name: "ivysaur",
    order: 2,
    weight: 130
  },
  venusaur: {
    base_experience: 236,
    height: 20,
    held_items: [],
    id: 3,
    is_default: true,
    location_area_encounters: "/api/v2/pokemon/3/encounters",
    name: "venusaur",
    order: 3,
    weight: 1000
  },
  charmander: {
    base_experience: 62,
    height: 6,
    held_items: [],
    id: 4,
    is_default: true,
    location_area_encounters: "/api/v2/pokemon/4/encounters",
    name: "charmander",
    order: 5,
    weight: 85
  },
  charmeleon: {
    base_experience: 142,
    height: 11,
    held_items: [],
    id: 5,
    is_default: true,
    location_area_encounters: "/api/v2/pokemon/5/encounters",
    name: "charmeleon",
    order: 6,
    weight: 190
  },
  charizard: {
    base_experience: 240,
    height: 17,
    held_items: [],
    id: 6,
    is_default: true,
    location_area_encounters: "/api/v2/pokemon/6/encounters",
    name: "charizard",
    order: 7,
    weight: 905
  },
  squirtle: {
    base_experience: 63,
    height: 5,
    held_items: [],
    id: 7,
    is_default: true,
    location_area_encounters: "/api/v2/pokemon/7/encounters",
    name: "squirtle",
    order: 10,
    weight: 90
  },
  wartortle: {
    base_experience: 142,
    height: 10,
    held_items: [],
    id: 8,
    is_default: true,
    location_area_encounters: "/api/v2/pokemon/8/encounters",
    name: "wartortle",
    order: 11,
    weight: 225
  },
  blastoise: {
    base_experience: 239,
    height: 16,
    held_items: [],
    id: 9,
    is_default: true,
    location_area_encounters: "/api/v2/pokemon/9/encounters",
    name: "blastoise",
    order: 12,
    weight: 855
  }
};
