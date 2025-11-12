import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AddAJob = () => {

const { user } = use(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    const fromData = {
      postedBy: e.target.name.value,
      category: e.target.category.value,
      title: e.target.title.value,
      summary: e.target.description.value,
      coverimage: e.target.coverimage.value,
      userEmail: user.email
    };
   
    fetch('http://localhost:3000/models',{
        method: "POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(fromData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })


  };
  return (
    <div>
      <h1>Hi iam addjob</h1>
       <div className="max-w-md mx-auto bg-base-100 shadow-xl rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold text-center text-primary mb-5">
        Add Job
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <!-- Name --> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* <!-- Category --> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Category</span>
          </label>
          <select
            name="category"
            className="select select-bordered w-full"
         
            required
          >
            <option value="">
              Select a category
            </option>
            <option value="Web Development">Web Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Graphics Designing">Graphics Designing</option>
          </select>
        </div>

        {/* <!-- Title --> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter job title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* <!-- Image URL --> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Image URL</span>
          </label>
          <input
            type="url"
            name="coverimage"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* <!-- Description --> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Write a short description about the job"
            rows="4"
            required
          ></textarea>
        </div>

        {/* <!-- Submit Button --> */}
        <div className="form-control mt-4">
          <button type="submit" className="btn btn-primary w-full">
            Add Job
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddAJob;
