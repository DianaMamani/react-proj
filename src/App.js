import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      movies:[
        {
          id:'asc',
          name: 'Scarlett Letter'
        },
        {
          id:'asc2',
          name:'Fast and Furius'
        }
      ]
    }
  }
  render(){
    return (
      <div className="App">
        {this.state.movies.map(movie => <h1 key= {movie.id}>{movie.name}</h1>)}
      </div>
    );  
  }
}

export default App;
