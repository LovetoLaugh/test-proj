import React, { Component, PropTypes } from 'react';
import PokemonItem from './PokemonItem';
import {dispatch} from 'redux';
import * as PokemonActions from '../actions/PokemonActions';

export default class PokemonList extends Component {
  render() {
    const {pokemon, caughtPokemon, pokemonList=[]} = this.props;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList.map(pokemonObject =>
            <PokemonItem
              key={pokemonObject.name}
              pokemon={pokemonObject}
              showDashboard={this.props.showDashboard}/>
          )}
        </tbody>
      </table>
    );
  }
}
