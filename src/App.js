import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.components';




class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       monster: [],
       searchField: ''
    };


    // this.handleChnage = this.handleChnage.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
  .then(users => this.setState({ monster:users }))
  }

  handleChnage = e => {
    this.setState({searchField: e.target.value});
  }


  render() {
    const {monster, searchField} = this.state;
    const filteredMOnster = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        
          <SearchBox 
          placeholder='search monster'
          handleChnage={this.handleChnage}
          
          />
        
       <CardList monster={filteredMOnster}/>
       {/* <Card/> */}
      
        
        
     
    </div>
    )
  }
}

export default App;
