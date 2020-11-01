import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


//function App() {
// invece di una function, estendiamo la classe Component
// che ci permette attraverso constructor di avere lo stato
// con this.state

class App extends Component {
  
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  // il bind allo state lo fa la dichiarazione della arrow funtion 
  // se tu dichiarassi senza arrow-function il this sarebbe undefined nel componente.
  handleChange = e => {
    this.setState({searchField: e.target.value},);
  }

  render () {
        // vogliamo una costante per lo state al momento del render.
        // questa notazione di const è equivalente a
        // const monsters = this.state.monster;
        // const searchField = this.state.searchField;
        // scritta come la riga qui sotto è + compatta e semplice.
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(
          monster => monster.name.toLowerCase().includes(
            searchField.toLowerCase()
          )
        );
        return (<div className="App">
          <h1> Monster Rolodex</h1>
          <SearchBox placeholder='search monster' handlerChange={this.handleChange} />
          <CardList monsters={filteredMonsters} />
        </div>)
    }
}

export default App;
