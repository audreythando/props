import React from 'react'

function CardTwo({ info }) {
  return (
    <div className='card-two'>
      <h1>{info.email}</h1>
      <h1>{info.age}</h1>
    </div>
  )
}

export default CardTwo