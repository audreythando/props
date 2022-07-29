import React from 'react'
import CardTwoList from '../components/CardTwo/CardTwoList'

function CardTwoInfo() {
    let people = [
        {
            age: 13,
            email:'andrew@123'
            
        },

        {
            
            age: 34,
            email:'john@123'
        
        },

        {
            
            age: 64,
            email:'peter@123'
            
        }
    ]
  return (
    <CardTwoList info={people} />
  )
}

export default CardTwoInfo