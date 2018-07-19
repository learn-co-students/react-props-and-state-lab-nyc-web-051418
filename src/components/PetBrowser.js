import React from 'react'

import Pet from './Pet'
import { getAll} from '../data/pets'

class PetBrowser extends React.Component {
	constructor() {
		super();
		this.renderPets = this.renderPets.bind(this); 
	}

  renderPets() {
  	return(
  	  this.props.pets.map( pet => <Pet onAdoptPet={this.props.onAdoptPet} pet={pet}/>)
  	)
  }


  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
