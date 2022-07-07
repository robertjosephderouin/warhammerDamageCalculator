// Calculations.js

import React from 'react';
import Card from './Card';
import './Calculations.css';

const Calculations = ({calculations}) => {

    const calculationCards = calculations.map(calculation => {
      return (
        <Card
          title={calculation.title}
          toHit={calculation.toHit}
          strength={calculation.strength}
          attacks={calculation.attacks}
          ap={calculation.ap}
          damage={calculation.damage}
          id={calculation.id}
          key={calculation.id}
        />
      )
    })
  
    return (
      <div className='calculations-container'>
        {calculationCards}
      </div>
    )
  }

export default Calculations;