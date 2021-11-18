import './App.css';
import { CardList } from './components/card-list/card-list.componet';
import { SearchBox } from './components/search-box/search-box.component';
import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state={
      monsters:[  ],
      searchFeild:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }

  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase()))
    return (
      <div className="App">
        
        <h2>Monsters Rolodex</h2>

        <SearchBox 
        placeholder='search monsters' 
        handlechange={e=> this.setState({searchFeild:e.target.value})}
        />

        <CardList monsters={filteredMonsters} />
 
      </div>
    );
  }

}

export default App;
