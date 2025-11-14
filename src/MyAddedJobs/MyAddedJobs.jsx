import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router';

const MyAddedJobs = () => {

     // description control
 function shortenText(text, wordLimit = 10) {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}




  const { user } = useContext(AuthContext); 

  console.log(user?.email)
  const [jobs, setJobs] = useState([]);
//   console.log('fghjk', jobs)
  const [loading, setLoading] = useState(true);

//   console.log("Logged user show:", user?.email);

  useEffect(() => {
    if (!user?.email) {
    //   console.log("User email missing!");
      return;
    }

    const url = `http://localhost:3000/myadd?email=${user.email}`;
    // console.log("Fetching:", url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("API response:", data);
        setJobs(data);
        setLoading(false);
      })
      .catch(err => console.error("Fetch error:", err));
  }, [user?.email]);

  if (loading) return <p className="text-center">Loading...</p>;





    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {jobs.map((jobs) => (
                <div key={jobs._id} className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl  transition 
            duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                  <figure>
                    <img
                      
                      src={jobs.coverimage}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body justify-start text-center ">
                    <h2 className="card-title text-center">{jobs.title}</h2>
                    <p className="text-center">{shortenText(jobs.summary, 10)} </p>
                    <div className="card-actions justify-end">
                     <Link to={`/jobsdetails/${jobs._id}`}> <div className="badge badge-outline">View Details</div></Link>
              {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
    );
};

export default MyAddedJobs;