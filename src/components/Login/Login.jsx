import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { singUpUser } = useContext(AuthContext);

  const handelLoggedIn = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    const confirm = from.password.value;
    console.log(email, password, confirm);

    singUpUser(email, password)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl my-5 text-center">Login</h2>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handelLoggedIn}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Confirm Password
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              LogIn
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <p className="text-center text-gray-500 text-xs my-3 font-semibold">
            Are you New to this website?{" "}
            <span className="text-red-700">
              <Link to="/singUp">SingUp</Link>
            </span>
          </p>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
