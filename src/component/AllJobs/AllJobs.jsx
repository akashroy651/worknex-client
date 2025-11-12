import React from "react";
import { Link, useLoaderData } from "react-router";

const AllJobs = () => {
  const data = useLoaderData();
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {data.map((alljob) => (
        <div key={alljob._id} className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl  transition 
    duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
          <figure>
            <img
              //   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              src={alljob.coverimage}
              alt="Shoes"
            />
          </figure>
          <div className="card-body justify-start text-center ">
            <h2 className="card-title text-center">{alljob.title}</h2>
            <p className="text-center">{alljob.summary} </p>
            <div className="card-actions justify-end">
             <Link to={`/jobsdetails/${alljob._id}`}> <div className="badge badge-outline">View Details</div></Link>
      {/* <div className="badge badge-outline">Products</div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllJobs;
