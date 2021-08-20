import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../images/gallery/login.jpg";
import logo from "../../images/logo.png";

const Login = () => {
  return (
    <section className="h-full sm:h-screen grid grid-cols-1 gap-0 lg:grid-cols-12">
      <div className="h-full sm:h-screen w-full col-span-1 p-4 mx-auto lg:col-span-4 xl:p-8 sm:w-2/4 lg:w-full">
        <Link to="/" className="inline-flex items-center cursor-pointer">
          <img src={logo} alt="logo" className="object-contain w-10" />
          <span className="ml-2 text-base lg:text-xl font-display font-bold tracking-wide leading-snug text-gray-800 uppercase">
            Wedding <span className="text-red-accent-700"> Photography</span>
          </span>
        </Link>

        <h1 className="mt-6 text-xl font-display font-semibold text-black tracking-tight sm:text-2xl title-font text-gray-900">
          Log in to your account
        </h1>
        <form className="mt-4" action="#" method="POST">
          <div>
            <label className="font-body block text-base font-semibold leading-relaxed tracking-tight text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email "
              className="login-input"
            />
          </div>
          <div className="mt-4">
            <label className="font-body block text-base font-semibold leading-relaxed tracking-tight text-gray-800">
              Password
            </label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Your Password"
              minlength="6"
              className="login-input"
              required={true}
            />
          </div>
          <div className="mt-2 text-right">
            <a
              href="/"
              className="font-body text-sm font-medium leading-relaxed text-gray-700 hover:text-red-accent-700 focus:text-red-900"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="font-body block w-full px-4 py-3 mt-4 font-semibold text-white transition duration-500 ease-in-out transform bg-red-accent-700 rounded-lg hover:bg-red-900 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
          >
            Login with Email
          </button>
        </form>
        <div className="flex items-center justify-between  my-6 ">
          <span className="w-1/5 border-b lg:w-1/4" />
          <span className="text-xs text-center text-gray-700 font-medium font-body tracking-wider">
            Login with social accounts
          </span>
          <span className="w-1/5 border-b lg:w-1/4" />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="font-body inline-flex w-full px-20 sm:px-8 font-semibold transition duration-500 ease-in-out transform bg-white border rounded-lg border-gray-300 text-red-accent-700 hover:bg-red-accent-700 hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
          >
            <div className="px-10 flex items-center justify-center">
              <div className="py-3">
                <img
                  src="https://img.icons8.com/fluent/28/000000/google-logo.png"
                  alt="google-logo"
                />
              </div>
              <span className="ml-4"> Log in with Google </span>
            </div>
          </button>
        </div>
        <p className="font-body font-semibold mt-6 text-center">
          Need an account?{"  "}
          <span className="font-semibold text-red-500 hover:text-red-900 cursor-pointer">
            Sign Up
          </span>
        </p>
        <p className="font-body font-semibold mt-6 text-center text-red-400 hover:text-red-900 cursor-pointer">
          Login as an Admin?
        </p>
      </div>
      <div className="col-span-1 lg:col-span-8 pt-8 lg:pt-0">
        <img
          src={loginImage}
          alt="login_image"
          className="object-cover w-full h-64 min-h-full bg-gray-100"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Login;
