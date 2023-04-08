import React, { useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between  p-4 bg-gray-200 rounded">
        <Link to="/" className="flex">
          <BoltIcon className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold">nextPage</h1>
        </Link>

        <ul
          className={`md:flex gap-5  text-lg ${
            isMenuOpen
              ? "hidden"
              : "flex-col md:flex-row ms-10 bg-white md:bg-gray-200 p-3 rounded-lg md:rounded-none shadow-lg md:shadow-none"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "default"
              }
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "default"
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden cursor-pointer">
          <span>
            {!isMenuOpen === true ? (
              <XMarkIcon className="w-5 h-5 text-blue-600" />
            ) : (
              <Bars3BottomRightIcon className="w-5 h-5 text-blue-600" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
