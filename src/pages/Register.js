import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handalLoginFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
  };
  return (
    <div className="">
      <div className="w-full mx-auto  max-w-md p-8 space-y-3 rounded-xl  text-black">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form
          onSubmit={handalLoginFrom}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Full Name"
              className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Photo Url
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your Photo Url"
              className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400"
            />
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400"
          >
            Register
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline  text-blue-400"
          >
            go to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
