import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Sahand</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="flex bg-slate-100 items-center p-3 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="text-xs sm:text-sm bg-transparent focus:outline-none w-24 sm:w-64"
            
          />
          <button type="submit" className="text-slate-600">
            <FaSearch />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
          </Link>
          <Link to="/profile">
            
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header;
