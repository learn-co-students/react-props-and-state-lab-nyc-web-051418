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
  	  getAll().map( pet => <Pet pet={pet}/>)
  	)
  }


  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
