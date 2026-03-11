import React from 'react';
import { useLoaderData } from 'react-router';
import Books from '../Books/Books';
const Home = () => {
    const usersData = useLoaderData();
    console.log(usersData)
        ;
    return (

        <div>
            <h1>ima hobe</h1>
            {
                usersData.map(user=><Books key={user.id} user={user}></Books>)
            }
        </div>
    );
};

export default Home;