// App.js

import React, { Component } from 'react';
import Calculations from './Calculations';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      calculations: [
        { id: 1, title: 'Tactical Marine Bolters', toHit: 3, strength: 4, attacks: 10, ap: 0, damage: 1 },
      ]
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Warhammer Damage Calcuator</h1>
        {!this.state.calculations.length && <h2>No calculations yet, add some!</h2> }
        <Calculations calculations={this.state.calculations} />
      </main>
    )
  }
}

export default App;
