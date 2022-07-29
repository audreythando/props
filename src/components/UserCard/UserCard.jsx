import React from 'react';
import CardTwo from '../CardTwo/CardTwo';
import "./UserCard.css";

function UserCard({ data }) {
    console.log('%c%s', 'color: #00a3cc', data);
    return (
        <div className='user-card'>
            <CardTwo info={data}/>
        </div>
    );
}

export default UserCard;
