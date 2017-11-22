import React, { Component, PropTypes } from 'react';
import {dispatch} from 'redux';
import * as PokemonActions from '../actions/PokemonActions';
import {connect} from 'react-redux';

export default class PokemonItem extends Component {
  constructor(props) {
		super(props);
		this.selectedPokemonName = this.selectedPokemonName.bind(this);
	}

  render() {
    const {pokemon} = this.props;
    const imgStyle = {
      width: 75 + "px",
      height: 50 + "px"
    }

    return (
      <tr className='success'>
        <td><button onClick={()=>this.selectedPokemonName(pokemon.name)}>{pokemon.name}</button></td>
        <td><img src={pokemon.url} alt="image not displayed" style={imgStyle}/></td>
      </tr>
    );
  }
  selectedPokemonName(name) {
    this.props.showDashboard(name);
  }
}
