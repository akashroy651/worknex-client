import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const JobsDetails = () => {

    const navigate = useNavigate();

    const data = useLoaderData();
    const jobDetails =data.result;
    console.log(jobDetails)

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
            <span className="text-primary font-semibold">{jobDetails.postedBy}</span>
          </p>
          <p className="text-gray-500 mb-4">Email:{jobDetails.userEmail} </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed md:text-lg">
            {jobDetails.summary}
          </p>

          {/* Action Button */}
          {/* <div className="mt-6">
            <button className="btn btn-primary w-full md:w-auto">
              Apply Now
            </button>
          </div> */}
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline w-full md:w-auto">
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
