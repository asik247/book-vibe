import React from 'react';
import { useLoaderData } from 'react-router';
import MyBarChart from './MyBarChart';

const Rechart = () => {
    const studentData = useLoaderData();
    // console.log(studentData);
    return (
        <div>
            {
                studentData.map(student=><MyBarChart key={student.id} student={student}></MyBarChart>)
            }
        </div>
    );
};

export default Rechart;