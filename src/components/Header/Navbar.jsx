import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {

  

  const navLinks = <>
    <NavLink className={({isActive})=> (isActive? 'px-3 py-2 mr-3 rounded-sm font-semibold border text-green-400': 'px-3 py-2 mr-3 rounded-sm font-semibold')} to="/">Home</NavLink>
    <NavLink className={({isActive})=> (isActive? 'px-3 py-2 mr-3 rounded-sm font-semibold border text-green-400': 'px-3 py-2 mr-3 rounded-sm font-semibold ')} to="/readList">Listed Books</NavLink>
    <NavLink className={({isActive})=> (isActive? 'px-3 py-2 mr-3 rounded-sm font-semibold border text-green-400': 'px-3 py-2 mr-3 rounded-sm font-semibold')} to="/PagesToRead">Pages to read</NavLink>
    
    </>

  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">Boi Poka</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <a className="btn bg-green-500 text-white">Sign In</a>
        <a className="btn bg-blue-400 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
