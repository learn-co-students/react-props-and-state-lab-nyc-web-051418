import React from 'react'
import UUID from "uuid"
import Pet from './Pet'

class PetBrowser extends React.Component {

  handlePets = () => {

    return this.props.pets.map(pet=>{
      // console.log(pet)
      // debugger;
      return (<div key={UUID()}><Pet pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/> </div>)

    })
  }
  render() {
    return (<div className="ui cards">{this.handlePets()}</div>)
  }
}

export default PetBrowser
