import { POKEMON_LIST,
  POKEMON_LIST_FAILED,
   LIMIT_OFFSET_UPDATION,
   SELECTED_POKEMON,
   SELECTED_POKEMON_NAME,
  POKEMON_ABILITIES,
PREVIOUS_LIMIT_OFFSET_UPDATION} from '../constants/ActionTypes';
import { Pokemon } from '../constants/Pokemon';
import pokemonApi from '../API/api.js';

const initialState = {
  pokemonList: [],
  limit: 20,
  offset:0,
  selectedName:'',
  clickedPokemon:{},
  pokemonAbilities:[]
};

export default function pokemon(state = initialState, action) {
  switch (action.type) {
    case POKEMON_LIST:
    var newPokemons = action.pokemon.results;
    var newState = {
      ...state,
      pokemonList: newPokemons
    }
     return Object.assign({}, state, newState);

     case POKEMON_LIST_FAILED:
     return {
        ...state,
     }

     case LIMIT_OFFSET_UPDATION:
     var newState = {
       ...state,
       offset: state.offset + 20,
     }
     return Object.assign({}, state, newState);

     case SELECTED_POKEMON:
     var selectedPokemon = action.pokemon;
     var newState = {
       ...state,
       clickedPokemon: selectedPokemon
     }
     return Object.assign({}, state, newState);

     case SELECTED_POKEMON_NAME:
     var newState = {
       ...state,
       selectedName: action.name
     }
     return Object.assign({}, state, newState);

     case POKEMON_ABILITIES:
     var newAbilities = state.pokemonAbilities
     newAbilities.push(action.pokemon);
     var newState = {
       ...state,
       pokemonAbilities: newAbilities
     }
     return Object.assign({}, state, newState);

     case PREVIOUS_LIMIT_OFFSET_UPDATION:
     var newState = {
       ...state,
       offset: state.offset - 20,
     }
     return Object.assign({}, state, newState);

     default:
     return state;
  }
}
