import React from 'react';
import { useLoaderData } from 'react-router';
import AllJobs from './AllJobs';

const Jobs = () => {
     const data = useLoaderData();
    console.log(data)
    return (
        <div>
            {
                data.map(alljob => <AllJobs key={alljob._id}></AllJobs> )
            }
        </div>
    );
};

export default Jobs;