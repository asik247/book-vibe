import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const usersData = useLoaderData();
    console.log(usersData);
    return (
        <div>
            <h1>ima hobe</h1>
        </div>
    );
};

export default Home;