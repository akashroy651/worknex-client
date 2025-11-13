import React from "react";
import { Link, useLoaderData } from "react-router";

const AllJobs = () => {

  // home page description control
 function shortenText(text, wordLimit = 10) {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}



  const data = useLoaderData();
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {data.map((alljob) => (
        <div key={alljob._id} className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl  transition 
    duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
          <figure>
            <img
              
              src={alljob.coverimage}
              alt="Shoes"
            />
          </figure>
          <div className="card-body justify-start text-center ">
            <h2 className="card-title text-center">{alljob.title}</h2>
            <p className="text-center">{shortenText(alljob.summary, 10)} </p>
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
