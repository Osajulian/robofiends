import React, { Component } from 'react';
import CardList from '../components/card-list/card-list'
import SearchBox from '../components/search-box/searchBox'
import Scroll from '../components/scroll/scroll'
import ErrorBoundary from '../containers/error-boundary'
import './App.css';
// import { robots } from './robots'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }

  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({
      robots: users
    }))
  }

  render() {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !robots.length ? <h1>Loading</h1> :
         (
          <div className="tc">
            <h1 className="f1">RoboFiends</h1>
            <SearchBox
              searchChange={this.onSearchChange} />
              <Scroll>
              <ErrorBoundary>
                <CardList robots={filteredRobots} />              
              </ErrorBoundary>
              </Scroll>
          </div>
      );
    
  }
  
}

export default App;
