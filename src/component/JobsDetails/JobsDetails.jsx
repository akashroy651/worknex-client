import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const JobsDetails = () => {
  const navigate = useNavigate();

  const data = useLoaderData();
  const jobDetails = data.result;
  console.log(jobDetails);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://worknex-server.vercel.app/models/${jobDetails._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "New Job Added",
              icon: "success",
              draggable: true,
            });
            navigate("/all-Jobs");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
      <h1>iuegcdb xjk</h1>
      <div className="max-w-5xl mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden mt-10 border border-gray-200">
        {/* Image Section */}
        <div className="relative">
          <img
            src={jobDetails.coverimage}
            alt={jobDetails.title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
            {jobDetails.category}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {jobDetails.title}
          </h1>

          {/* Posted By */}
          <p className="text-gray-500 font-medium mb-1">
            Posted By:{" "}
            <span className="text-primary font-semibold">
              {jobDetails.postedBy}
            </span>
          </p>
          <p className="text-gray-500 mb-4">Email:{jobDetails.userEmail} </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed md:text-lg">
            {jobDetails.summary}
          </p>

          {/* Action Button */}
          <div className="mt-6 mb-5 ">
            <Link to={`/jobsupdate/${jobDetails._id}`}>
              {" "}
              <button className="btn btn-primary hover:bg-green-100 hover:text-black w-full md:w-auto mr-5">
                Update Job
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="btn  hover:bg-amber-200 hover:text-black w-full md:w-auto"
            >
              Delete Now
            </button>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline w-full md:w-auto"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
