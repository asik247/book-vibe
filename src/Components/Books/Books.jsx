// import { use } from "react";

import { use } from "react";



const Books = ({promiseUsers}) => {
    // console.log(users);
//   console.log(promiseData);
//   const allUsers = use(promiseData);
//   console.log(allUsers);
    // console.log(data);

    // axios useing load data;
    const allDats = use(promiseUsers)
    // console.log(allDats.data);
    const data = allDats.data;
    console.log(data);
    return (
        <div>
            <h1>All Booksssssssssss</h1>
        </div>
    );
};

export default Books;