import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { getAll} from '../data/pets'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    this.onChangeType = this.onChangeType.bind(this);
    this.onFindPetsClick = this.onFindPetsClick.bind(this);
    this.onAdoptPet = this.onAdoptPet.bind(this); 
  }

  onFindPetsClick(event) {
    let optionalSearchType = '';
    if (this.state.filters.type !== 'all') {
      optionalSearchType = "?type=" + this.state.filters.type;
    }
    fetch("/api/pets" + optionalSearchType).then( resp => resp.json()).then( json => this.setState({pets: json}))
  }

  onChangeType(event) {
    this.setState({
      filters: {
        type: event.target.value
      }
    });
  }

  onAdoptPet(petId) {
    let currPet = this.state.pets.find(pet => pet.id === petId);
    console.log("Current Pet: ", currPet)
    let currPetIdx = this.state.pets.indexOf(currPet); 
    let updatedPets = this.state.pets.slice(); 
    console.log(updatedPets)
    console.log("IDX:", currPetIdx)
    updatedPets[currPetIdx].isAdopted = true;
    this.setState({
      pets: updatedPets
    });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
