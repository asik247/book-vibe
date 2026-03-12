import React from 'react';
import { useLoaderData } from 'react-router';

const Rechart = () => {
    const studentData = useLoaderData();
    // console.log(studentData);
    return (
        <div>
            {
                studentData.map(student=>{
                    console.log(student);
                })
            }
        </div>
    );
};

export default Rechart;