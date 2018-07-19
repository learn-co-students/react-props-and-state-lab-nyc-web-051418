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
    this.onChangeType = this.onChangeType.bind(this);
    this.onFindPetsClick = this.onFindPetsClick.bind(this);
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
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
