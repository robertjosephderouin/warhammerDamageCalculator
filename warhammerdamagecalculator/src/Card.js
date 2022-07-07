// Card.js

import React from 'react';
import './Card.css';

const Card = ({ title, toHit, id, strength, attacks, ap, damage }) => {

    function calculateToHitModifier(toHit) {
        return (toHit - 1) / 6
    }

    function calculateSuccesfulHits(toHit, attacks) {
        return attacks - (calculateToHitModifier(toHit) * 10)
    }

    function calculateSaveModifier(save, ap) {
        return (save + ap) / 
    }

    function calculateDeadSpaceMarines(hits, strength, ap, damage) {
        return 
    }

    return (
      <div className='card'>
        <h3>Title: {title}</h3>
        <p>To Hit: {toHit}</p>
        <p>Strength: {strength}</p>
        <p>Attacks: {attacks}</p>
        <p>Armor Penetration: {ap}</p>
        <p>Damage: {damage}</p>
        <p>Hits: {calculateSuccesfulHits(toHit, attacks)}</p>
        <button>🗑</button>
      </div>
    )
  }

export default Card;