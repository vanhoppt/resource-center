import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {

  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {

      })
      .catch(err => {

      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
