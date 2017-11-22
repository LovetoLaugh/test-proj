import ajax from '../utils/ajax.js';
import * as _ from 'lodash';
//import BootstrapData from '../bootstrap-data.js';

const pokemonApi = {
	pokemonList(limit, offset) {
		return ajax({
			url: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
			//url: `https://pokeapi.co/api/v2/pokemon/22`,
			method: 'GET',
			expectSuccessStatus: true
		});
	},
	selectedPokemon(selectedPokemonIndex) {
		return ajax({
			url: `https://pokeapi.co/api/v2/pokemon/${selectedPokemonIndex}`,
			method: 'GET',
			expectSuccessStatus: true
		});
	},
	pokemonAbilities(url) {
		return ajax({
			url: url,
			method: 'GET',
			expectSuccessStatus: true
		})
	}
};

export default pokemonApi;
