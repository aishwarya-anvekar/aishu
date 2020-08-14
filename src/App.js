import React from 'react';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state= {
      robots: [],
      searchField:''
    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  handleChange = e  => {
    this.setState({ searchField: e.target.value });
  }


  render() {
    const { robots,searchField } = this.state;
    const filterRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <h1>Robo World</h1>
        <SearchBox
        placeholder='search robots'
        handleChange={this.handleChange}
        />


        <CardList robots={filterRobots} />
      </div>
    );
  }
}

export default App;
