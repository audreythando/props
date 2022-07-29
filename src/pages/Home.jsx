import React from 'react';
import UserList from '../components/UserList/UserList';
import CardTwoInfo from './CardTwoInfo';


function Home() {

    let users = [
        {
            name: "Andrew",

        },
        {
            name: "John",


        },
        {
            name: "Peter",

        }
    ]

    let people = [
        {
            age: 13,
            email: 'andrew@123'

        },
        {
            age: 34,
            email: 'john@123'
        },

        {
            age: 64,
            email: 'peter@123'
        }
    ]

    return (
        <>
            <UserList data={people} />
        </>
    );

}

export default Home;
