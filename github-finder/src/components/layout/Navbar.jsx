import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="width-full bg-gray-800 text-white mb-4">
      <div className="flex justify-between container mx-auto align-center px-4 py-2">
        <div className="self-center">
          <FaGithub size={22} className="mr-2 inline" />
          <Link to="/" className="text-lg font-semibold">
            Github Finder
          </Link>
        </div>
        <div className="">
          <Link to="/" className="btn btn-ghost">
            HOME
          </Link>
          <Link to="/about" className="btn btn-ghost">
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
