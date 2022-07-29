import React from 'react'
import CardTwo from './CardTwo'
import "./CardTwo.css";

function CardTwoList({info}) {
  return (
    <div className='card-info'>
    {
      info.map(people => {
          return <CardTwo key={people.email} info={people}/>;
      })
    }
  </div>
  )
}

export default CardTwoList