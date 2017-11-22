import React from 'react';
import TestUtils from 'react-dom/test-utils';
import {shallow} from 'enzyme';
import PokemonList from './PokemonList';
import PokemonItem from './PokemonItem';
import { mount } from 'enzyme';

describe('PokemonList', () => {
let props = null;
beforeEach(function () {
  props={
    pokemonList:[{
      name:"bulbasur",
      url:"url"
    },
    {
      name:"bulbasur",
      url:"url"
    },
    {
      name:"bulbasur",
      url:"url"
    }
  ],
    showDashboard:jest.fn()
  }
});
afterEach(function () {
});

describe('render', () => {
  it('render the pokemon rows as per the list', ()=> {
  const instance = TestUtils.renderIntoDocument(<PokemonList {...props}/>);
  const pokemonItem = TestUtils.scryRenderedComponentsWithType(instance, PokemonItem);
  expect(pokemonItem.length).toBeGreaterThan(0);
});
});
});
