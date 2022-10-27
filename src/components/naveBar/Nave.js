import React, { useContext, useState } from "react";
import { FaAsymmetrik, FaRegMoon, FaRegSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvaider";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Nave = () => {
  const [isTogold, setIsTogold] = useState(false);
  const { user, logout } = useContext(AuthContext);
  //logOut funcition //
  const handalLOgout = () => {
    logout()
      .then((res) => {})
      .catch((error) => {});
    toast.success("log out success");
  };

  return (
    <section className="bg-gray-300">
      <div className="w-11/12 mx-auto ">
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
                <li className="hover:text-red-500">
                  <Link to="/cources">Cources</Link>
                </li>
                <li className="hover:text-red-500">
                  <Link to="/faq">FAQ</Link>
                </li>
                <li className="hover:text-red-500">
                  <Link to="/blog">Blog</Link>
                </li>
                {user ? (
                  <>
                    <li className="">
                      <div className="">
                        {user?.photoURL ? (
                          <img
                            className="h-8 rounded-full"
                            src={user?.photoURL}
                            alt=""
                          />
                        ) : (
                          <FaUserCircle className="text-3xl "></FaUserCircle>
                        )}
                      </div>
                      <ul className="p-1 bg-gray-500 text-white">
                        <li>
                          <img
                            className="h-20 w-20 rounded-full"
                            src={user?.photoURL}
                            alt=""
                          />
                        </li>
                        <li>
                          <a>{user.displayName}</a>
                        </li>
                        <li>
                          <a>{user.email}</a>
                        </li>
                        <li className="">
                          <Link>
                            <button onClick={handalLOgout}>log out</button>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  <>
                    <div className="mr-5 hover:text-red-500 ">
                      <Link to="/login  ">Login</Link>
                    </div>
                  </>
                )}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              <FaAsymmetrik className="text-5xl text-red-700"></FaAsymmetrik>
              <div className="text-start leading-none">
                <small className="text-green-700">All-IT</small>
                <small className="block text-sm text-green-700">
                  Programming
                </small>
              </div>
            </Link>
          </div>
          <div className="navbar justify-end  hidden lg:flex">
            <ul className="menu  menu-horizontal p-0">
              <li className="hover:text-red-500">
                <Link to="/cources">Cources</Link>
              </li>
              <li className="hover:text-red-500">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="hover:text-red-500">
                <Link to="/blog">Blog</Link>
              </li>
              {user ? (
                <>
                  <li className="">
                    <div className="">
                      {user?.photoURL ? (
                        <img
                          className="h-8 rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                      ) : (
                        <FaUserCircle className="text-3xl "></FaUserCircle>
                      )}
                    </div>
                    <ul className="p-1  bg-gray-500 text-white">
                      <li>
                        <img
                          className="h-20 w-20 rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                      </li>
                      <li>
                        <a>{user.displayName}</a>
                      </li>
                      <li>
                        <a>{user.email}</a>
                      </li>
                      <li className="">
                        <Link>
                          <button onClick={handalLOgout}>log out</button>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <div className="mr-5 hover:text-red-500 ">
                    <Link to="/login">Login</Link>
                  </div>
                </>
              )}
            </ul>
          </div>

          <div>
            <button onClick={() => setIsTogold(!isTogold)}>
              {isTogold ? (
                <FaRegMoon className="text-3xl hover:text-green-500"></FaRegMoon>
              ) : (
                <FaRegSun className="text-3xl hover:text-green-500"></FaRegSun>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nave;
