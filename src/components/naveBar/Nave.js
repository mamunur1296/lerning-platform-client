import React, { useState } from "react";
import { FaAsymmetrik } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nave = () => {
  const [isTogold, setIsTogold] = useState(false);

  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar  ">
        <div className="navbar w-full ms-auto">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <FaAsymmetrik className="text-5xl"></FaAsymmetrik>
            <div className="text-start leading-none">
              <small>All-IT</small>
              <small className="block text-sm">Programming</small>
            </div>
          </Link>
        </div>
        <div className="navbar justify-end  hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/cources">Cources</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/cources">Profile</Link>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mr-5">
          <Link to="/login">Login</Link>
        </div>
        <div>
          <button onClick={() => setIsTogold(!isTogold)}>
            {isTogold ? "Light" : "dark"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nave;
