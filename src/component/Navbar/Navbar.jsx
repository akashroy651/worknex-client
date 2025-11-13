// import React, { use } from "react";
// import { Link, NavLink } from "react-router";
// import { AuthContext } from "../../contexts/AuthContext";

import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { use } from "react";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
//   console.log("User photo:", user?.photoURL);
  // const {photoURL} = user
  const handleSignOut = () => {
    signOutUser().then().catch();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-Jobs">All Jobs</NavLink>
      </li>
      {/* <li><NavLink to="/Register">Register</NavLink></li> */}

      {user && (
        <>
          <li>
            <NavLink to="/addjob">Add A Job</NavLink>
          </li>
          <li>
            <NavLink to="/myaddedjobs">My Added Jobs</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">worknex</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* <div className="navbar-end">
          {
            user ?
            
            <a onClick={handleSignOut} className="btn btn-primary">Sign Out</a> :
                
              <button className="btn"><Link to="/register">Login</Link></button>
          }
        </div> */}

       <div className="navbar-end flex items-center gap-4">
  {user ? (
    <div className="flex items-center gap-3">
      {/* 🧠 User Photo with Tooltip */}
      <div className="relative group inline-block">
        <img
          src={user?.photoURL || "https://i.ibb.co/2d3s5Jt/default-user.png"}
          alt={user?.displayName || "User"}
          className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer transition-transform duration-300 group-hover:scale-110"
        />

        {/* Tooltip */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
          <p className="font-semibold">{user?.displayName || "Unknown User"}</p>
        </div>
      </div>

      {/* 🚪 Sign Out Button */}
      <button onClick={handleSignOut} className="btn btn-primary btn-sm">
        Sign Out
      </button>
    </div>
  ) : (
    <Link to="/register">
      <button className="btn btn-sm btn-primary">Login</button>
    </Link>
  )}
</div>

      </div>
    </div>
  );
};

export default Navbar;
