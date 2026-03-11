// import React, { Suspense } from 'react';
// import { useLoaderData } from 'react-router';
import { useEffect, useState } from 'react';
import Books from '../Books/Books';
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
        </div>
    );
};

export default Home;