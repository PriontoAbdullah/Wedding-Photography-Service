import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import loginImage from "../../images/gallery/login.jpg";
import logo from "../../images/logo.png";
import {
  createUserWithEmailAndPassword,
  handleGoogleSignIn,
  initializeLoginFramework,
  setJWTToken,
  signInWithEmailAndPassword,
} from "./LoginManager";

const Login = () => {
  const { setLoggedInUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);

  const { register: registerSignIn, handleSubmit: handleSignIn } = useForm();
  const { register: registerSignUp, handleSubmit: handleSignUp } = useForm();

  const history = useHistory();
  const { pathname, ...location } = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => pathname === "/login", [pathname]);

  // Google Sign In
  const googleSignIn = () => {
    initializeLoginFramework();
    const loading = toast.loading("Please wait...");
    handleGoogleSignIn()
      .then((res) => {
        toast.dismiss(loading);
        handleResponse(res);
      })
      .catch((err) => {
        toast.dismiss(loading);
        toast.error(err.message);
      });
  };

  // Sign In with Email and Password
  const onSubmit = (data) => {
    initializeLoginFramework();
    const loading = toast.loading("Please wait...");
    const { name, email, password } = data;

    // For Login
    if (newUser && name && email && password) {
      createUserWithEmailAndPassword(name, email, password)
        .then((res) => {
          res.name = name;
          toast.dismiss(loading);
          handleResponse(res);
        })
        .catch((err) => {
          toast.dismiss(loading);
          toast.error(err.message);
        });
    }

    // For Registration
    if (!newUser && email && password) {
      signInWithEmailAndPassword(email, password)
        .then((res) => {
          toast.dismiss(loading);
          handleResponse(res);
        })
        .catch((err) => {
          toast.dismiss(loading);
          toast.error(err.message);
        });
    }
  };

  // Set with JWT token
  const handleResponse = (res) => {
    setLoggedInUser(res);

    setJWTToken();
    history.replace(from);
    toast.success("Successfully Logged In!");
  };

  // Show admin credentials modal
  const showAdminCredentials = () => {
    toast.custom((notify) => (
      <div
        className={`${
          notify.visible
            ? "animate-enter transition duration-500 ease-in-out transform "
            : "transition duration-500 ease-in-out transform  animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto opacity-90 flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img className="h-10 w-10 rounded-full" src={logo} alt="logo" />
            </div>
            <div className="ml-3 flex-1 font-body">
              <p className="text-base font-medium text-gray-900">
                Login As An Admin
              </p>
              <p className="mt-1 text-sm text-gray-800 font-semibold">
                <span className="text-red-accent-700">Email: </span>
                test@test.com{" "}
                <span className="text-red-accent-700"> Password: </span>{" "}
                #2021dev
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(notify.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Ok
          </button>
        </div>
      </div>
    ));
  };

  return (
    <section className="h-full sm:h-screen grid grid-cols-1 gap-0 lg:grid-cols-12">
      <div className="h-full sm:h-screen w-full col-span-1 p-4 mx-auto lg:col-span-4 xl:p-8 sm:w-2/4 lg:w-full">
        <Link to="/" className="inline-flex items-center cursor-pointer">
          <img src={logo} alt="logo" className="object-contain w-10" />
          <span className="ml-2 text-base lg:text-xl font-display font-bold tracking-wide leading-snug text-gray-800 uppercase">
            Wedding <span className="text-red-accent-700"> Photography</span>
          </span>
        </Link>

        {/* Log in Component */}
        {!newUser ? (
          <div>
            <h1 className="mt-6 text-xl font-display font-semibold tracking-tight sm:text-2xl title-font text-gray-900">
              Log in to your account
            </h1>
            <form className="mt-4" onSubmit={handleSignIn(onSubmit)}>
              <div>
                <label className="font-body block text-base font-semibold leading-relaxed tracking-tight text-gray-800">
                  Email Address
                </label>
                <input
                  {...registerSignIn("email", { required: true })}
                  type="email"
                  placeholder="Your Email "
                  className="login-input"
                />
              </div>
              <div className="mt-4">
                <label className="font-body block text-base font-semibold leading-relaxed tracking-tight text-gray-800">
                  Password
                </label>
                <input
                  {...registerSignIn("password", { required: true })}
                  type="password"
                  placeholder="Your Password"
                  minLength="6"
                  className="login-input"
                />
              </div>
              <div className="mt-2 text-right">
                <Link
                  to="/"
                  className="font-body text-sm font-medium leading-relaxed text-gray-700 hover:text-red-accent-700 focus:text-red-900"
                >
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" className="email-button">
                Login with Email
              </button>

              {/* Google Signin */}
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
                  className="google-button"
                  onClick={googleSignIn}
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
            </form>

            <p className="font-body font-semibold mt-6 text-center">
              Need an account?{"  "}
              <span
                className="font-semibold text-red-500 hover:text-red-900 cursor-pointer"
                onClick={() => setNewUser(!newUser)}
              >
                Sign Up
              </span>
            </p>
            <p
              className="font-body font-semibold mt-6 text-center text-red-500 hover:text-red-900 cursor-pointer"
              onClick={showAdminCredentials}
            >
              Login as an Admin?
            </p>
          </div>
        ) : (
          // Sign in Component
          <div>
            <h1 className="mt-6 text-xl font-display font-semibold tracking-tight sm:text-2xl title-font text-gray-900">
              Cerate a new account
            </h1>
            <form className="mt-4" onSubmit={handleSignUp(onSubmit)}>
              <div>
                <label className="font-body block text-base font-semibold leading-relaxed tracking-tight text-gray-800">
                  Your Name
                </label>
                <input
                  {...registerSignUp("name", { required: true })}
                  type="text"
                  minLength="6"
                  placeholder="Your Name"
                  className="login-input"
                />
              </div>
              <div className="mt-4">
                <label className="font-body block text-base font-semibold leading-relaxed tracking-tight text-gray-800">
                  Email Address
                </label>
                <input
                  {...registerSignUp("email", { required: true })}
                  type="email"
                  placeholder="Your Email "
                  className="login-input"
                />
              </div>
              <div className="mt-4">
                <label className="font-body block text-base font-semibold leading-relaxed tracking-tight text-gray-800">
                  Password
                </label>
                <input
                  {...registerSignUp("password", { required: true })}
                  type="password"
                  placeholder="Your Password"
                  minLength="6"
                  className="login-input"
                />
              </div>

              <div className="mt-6">
                <button type="submit" className="email-button">
                  Signup with Email
                </button>
              </div>
            </form>

            <p className="font-body font-semibold mt-6 text-center">
              Already have an account? {"  "}
              <span
                className="font-semibold text-red-500 hover:text-red-900 cursor-pointer"
                onClick={() => setNewUser(!newUser)}
              >
                Sign In
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Login Image */}
      <div className="col-span-1 lg:col-span-8 pt-8 lg:pt-0">
        <img
          src={loginImage}
          alt="login"
          className="object-cover w-full h-64 min-h-full bg-gray-100"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Login;
