// import React, { Suspense } from 'react';
// import { useLoaderData } from 'react-router';
// import { useEffect, useState } from 'react';
import axios from 'axios';
import Books from '../Books/Books';
import { Suspense } from 'react';
// import axios from 'axios';
const Home = () => {
    // const usersData = useLoaderData();
    // console.log(usersData)
    //     ;

    // old way data load;
    // const promiseData = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())

    // useEffect useing data load;
    // const [users,setUsers] = useState([]);
    // useEffect(()=>{
    //     const promiseUsers =async ()=>{
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const data =await res.json();
    //         setUsers(data);
    //         console.log(data);
    //     }
    //     promiseUsers()
    // },[])

    // Axios using data load.
    const promiseUsers = axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(promiseUsers);

    return (

        <div>
            {/* <h1>All Users {usersData.length}</h1> */}
            {/* {
                usersData.map(user=><Books key={user.id} user={user}></Books>)
            } */}


            {/* old way data load */}
            {/* <Suspense fallback={<h1>Loaddin..</h1>}>
             <Books promiseData={promiseData}></Books>
           </Suspense> */}

            {/* <Books users={users}></Books> */}
           <Suspense>
             <Books promiseUsers={promiseUsers}></Books>
           </Suspense>
        </div>
    );
};

export default Home;