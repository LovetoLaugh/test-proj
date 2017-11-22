import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';
import * as PokemonActions from '../actions/PokemonActions';

export default class PokedexApp extends Component {
  render() {
    return (
      <div>
        <MainSection />
      </div>
    );
  }

}
