import * as types from '../constants/ActionTypes';
import * as pokemonApi from '../API/api.js';

export function pokemonListServiceCall(limit, offset) {
  return {
    type: types.POKEMON_FETCH_REQUESTED,
    source: {
      api: pokemonApi,
      method: 'pokemonList',
      args: [limit, offset],
      aliasedType: types.POKEMON_LIST
    }
  }
}

export function selectedPokemon(selectedPokemonIndex) {
  return {
      type: types.POKEMON_FETCH_REQUESTED,
      source: {
        api: pokemonApi,
        method: 'selectedPokemon',
        args:[selectedPokemonIndex],
        aliasedType: types.SELECTED_POKEMON
      }
  };
}

export function limitOffSetUpdation() {
  return {
    type: types.LIMIT_OFFSET_UPDATION
  }
}

export function previousLimitOffSetUpdation() {
  return {
    type: types.PREVIOUS_LIMIT_OFFSET_UPDATION
  }
}

export function selectedPokemonName(name) {
  return {
    type: types.SELECTED_POKEMON_NAME,
    name
  };
}

export function pokemonAbilities(url) {
  return {
    type: types.POKEMON_FETCH_REQUESTED,
    source:{
      api: pokemonApi,
      method: 'pokemonAbilities',
      aliasedType: types.POKEMON_ABILITIES,
      args: [url]
    }
  }
}
