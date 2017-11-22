import React, { Component} from 'react';
import {Modal} from 'react-bootstrap';

export default class PokemonModal extends Component {

  constructor(props) {
		super(props);

		this.callAbilities = this.callAbilities.bind(this);
    this.checkAbilities = this.checkAbilities.bind(this);
	}
  render() {
    const {
        weight,
        abilities=[],
        forms=[],
        name='',
    } = this.props.selectedPokemon;
    const {
      pokemonAbilities=[]
    } = this.props;
    const abilitiesDisplay = abilities.map((abilityObject)=>{
      return (
        <li>
        <button onClick={()=>this.callAbilities(abilityObject.ability.url)}>
        {abilityObject.ability.name}
        </button>
        </li>
      );
    })
    const pokemonObject =  forms.map((formObject)=>formObject);
    const imgStyle = {
      width: 75 + "px",
      height: 50 + "px"
    }
    return (<Modal dialogClassName='dialog-box'
                   show={true}
							     onHide={this.props.unMountDashboard}>
				<Modal.Header>
					<Modal.Title>Name:{name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				    <div>
              Image:<img src={pokemonObject.url} alt="image not displayed" style={imgStyle}/>
            </div>
            <div>
              <p> Weight:{weight}</p>
            </div>
            <div>
            Abilities:
              <ul>
               {abilitiesDisplay}
              </ul>
            </div>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={this.props.unMountDashboard}>Close</button>
				</Modal.Footer>
			</Modal>)
  }
  callAbilities(url) {
    this.props.showAbilities(url);
  }
  checkAbilities(name) {
    var abilityExists = this.props.pokemonAbilities.find((abilityObject)=>abilityObject.name === name);
    return abilityExists?true:false
  }
}
