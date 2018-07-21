import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  handleSetState = (data) => {
    this.setState({
      pets: data
    })
  }
handleClick = (event) => {
const userSelection = this.state.filters.type
if (userSelection === "all"){
  fetch("/api/pets").then(r => r.json()).then(data => this.handleSetState(data))
}else if (userSelection === "cat") {
  fetch('/api/pets?type=cat').then(r => r.json()).then(data => this.handleSetState(data))
}else if (userSelection === "dog") {
  fetch('/api/pets?type=dog').then(r => r.json()).then(data => this.handleSetState(data))
}else if (userSelection === "micropig") {
fetch('/api/pets?type=micropig').then(r => r.json()).then(data => this.handleSetState(data))
}
}

handleChangeType = (event) => {
  const filters = {type:event.target.value}
this.setState({
  filters
})
}

onAdoptPet = (event) => {
  const pets= [...this.state.pets].map(pet =>{
   return pet.id === event.target.id ? Object.assign({}, pet, {isAdopted: true}) : pet
  })
this.setState({
  pets
})
}

  render() {
    // console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
