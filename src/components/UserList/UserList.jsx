import React from 'react';
import UserCard from '../UserCard/UserCard';
import "./UserList.css";
// import CardTwo from '../CardTwo/CardTwo'


function UserList({ data }) {
  return (
    <div className='user-list'>
      {
        data.map(user => {
            return <UserCard key={user.age} data={user}/>;     
        })
      }
        </div>
  )
      }
     
export default UserList