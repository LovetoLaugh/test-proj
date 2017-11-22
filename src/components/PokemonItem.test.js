import React from 'react';
import TestUtils from 'react-dom/test-utils';
import {shallow} from 'enzyme';
import PokemonItem from './PokemonItem';

describe('PokemonItem', () => {
let props = null;
beforeEach(function () {
  props={
    pokemon:{
      name:"bulbasur",
      url:"url"
    },
    showDashboard:jest.fn()
  }
});
afterEach(function () {
});

describe('render', () => {
  it('render the pokemon row', ()=> {
  const instance = TestUtils.renderIntoDocument(<PokemonItem {...props}/>);
  const pokemonRow = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'success');
  expect(pokemonRow.length).toBe(1);
});
});
});
