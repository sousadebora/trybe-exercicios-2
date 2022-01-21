import React from 'react';
import './App.css';

const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  const frutas = ['Maçã', 'Banana', 'Goiaba', 'Manga']
  class App extends React.Component{
      render() {
          return(
            <ul>{ frutas.map(frutas => Task(frutas)) }</ul>
            );
          }
        }
    
        export default App;