import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";


const ModelsCard = () => {
//   const data = useLoaderData();
// console.log("Loader data:", data);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/modelscard")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <p>Loading...</p>;

   function shortenText(text, wordLimit = 10) {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}


  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
       {
        data.map((card) => <div key={card._id} className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl  transition 
    duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
          <figure>
            <img
              
              src={card.coverimage}
              alt="Shoes"
            />
          </figure>
          <div className="card-body justify-start text-center ">
            <h2 className="card-title text-center">{card.title}</h2>
            <p className="text-center">{shortenText(card.summary, 10)} </p>
            <div className="card-actions justify-end">
             {/* <Link to={`/jobsdetails/${card._id}`}> <div className="badge badge-outline">View Details</div></Link> */}
      {/* <div className="badge badge-outline">Products</div> */}
            </div>
          </div>
        
        </div>)
       }
      <div className="col-span-full mt-5">
    <Link to="/all-Jobs"><button className="btn btn-primary">All Jobs</button></Link>
  </div>
    </div>
  );
};

export default ModelsCard;
