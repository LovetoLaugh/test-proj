import React, { Component, PropTypes } from 'react';
import PokemonList from './PokemonList';
import {connect} from 'react-redux';
import {dispatch} from 'redux';
import * as PokemonActions from '../actions/PokemonActions';
import PokemonModal from './pokemonModal.js';

const mapStateToProps= ( state={}, ownProps )=> {
	return {
		pokemonList: state.pokemon.pokemonList,
		limit: state.pokemon.limit,
		offset: state.pokemon.offset,
		selectedPokemon: state.pokemon.clickedPokemon,
		selectedName: state.pokemon.selectedName,
		pokemonAbilities: state.pokemon.pokemonAbilities
	}
};
class MainSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDashboard:false
		}
		this.nextSetOfPokemons = this.nextSetOfPokemons.bind(this);
		this.previousSetOfPokemons = this.previousSetOfPokemons.bind(this);
		this.unMountDashboard = this.unMountDashboard.bind(this);
		this.showAbilities = this.showAbilities.bind(this);
	}

  componentWillMount() {
		this.props.dispatch(PokemonActions.pokemonListServiceCall(this.props.limit, this.props.offset));
		this.props.dispatch(PokemonActions.limitOffSetUpdation());
  }

	componentWillReceiveProps(nextProps) {
		if(nextProps.selectedName.length>0 && !this.state.showDashboard) {
			const selectedPokemon = this.props.pokemonList.find((pokemonObject)=>pokemonObject.name === nextProps.selectedName)
			const index = this.props.pokemonList.indexOf(selectedPokemon);
			const selectedPokemonIndex = (index + (this.props.offset - 20)) + 1;
			this.props.dispatch(PokemonActions.selectedPokemon(selectedPokemonIndex))
			this.setState({showDashboard:true});
		}
		else if(nextProps.selectedName.length === 0 && this.state.showDashboard){
			this.setState({showDashboard:false});
		}
	}

  render() {
    const {pokemon={}, searchTerm='', caughtPokemon=[], pokemonList=[], selectedPokemon={}} = this.props;

    return (
			<div>
      <section className="main">
        <h1>Pokemon List</h1>
        <PokemonList
					pokemonList={pokemonList}
					showDashboard={(name)=>{
						if(name) {
						this.props.dispatch(PokemonActions.selectedPokemonName(name));
					}
					}
				}/>
      </section>
			<section >
				<button onClick={()=>this.nextSetOfPokemons()}>next</button>
				{this.props.offset>20 && <button onClick={()=>this.previousSetOfPokemons()}>previous</button>}
			</section>
			{this.state.showDashboard && <PokemonModal unMountDashboard={this.unMountDashboard}
																									selectedPokemon={selectedPokemon}
																									showAbilities={this.showAbilities}
																									pokemonAbilities={this.props.pokemonAbilities}/>}
			</div>
    );
  }
	nextSetOfPokemons() {
		this.props.dispatch(PokemonActions.pokemonListServiceCall(this.props.limit, this.props.offset));
		this.props.dispatch(PokemonActions.limitOffSetUpdation());
	}
	previousSetOfPokemons() {
		this.props.dispatch(PokemonActions.pokemonListServiceCall(this.props.limit, this.props.offset-40));
		this.props.dispatch(PokemonActions.previousLimitOffSetUpdation());
	}
	unMountDashboard() {
		this.props.dispatch(PokemonActions.selectedPokemonName(""));
	}
	showAbilities(url) {
		this.props.dispatch(PokemonActions.pokemonAbilities(url));
	}
}
export default connect(mapStateToProps)(MainSection);
//actions={actions} />
