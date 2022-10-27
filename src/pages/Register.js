import { useContext, React, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvaider";

const Register = () => {
  const [error, setError] = useState("");
  const { register, user, updateNamePhoto } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //regis for email and pass
  const handalLoginFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 8) {
      setError("pass Word at lest 8 Digit");
      return;
    }
    register(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        handalUpdateProfile(name, photo);
        toast.success("your profile updater");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

    console.log(name, photo, email, password);
  };
  const handalUpdateProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateNamePhoto(profile)
      .then((res) => {})
      .catch((error) => console.log(error));
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
          <small className="text-red-500">{error}</small>
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
