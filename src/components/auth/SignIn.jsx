import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(true);
  const signIn = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        console.log(userInfo.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  function signUp(e) {
    e.preventDefault();
    setEmail1("");
    setPassword1("");
    createUserWithEmailAndPassword(auth, email1, password1)
      .then((userInfo) => {
        console.log(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="text-center w-full min-w-[280px]">
      <div className="relative top-0 w-full p-5 items-center bg-gray-600 flex justify-center">
        <div className="flex flex-col justify-center items-center sm:flex-row gap-2 sm:gap-0">
          <button
            onClick={() => setLogged(true)}
            className="bg-gray-300/40 text-black p-2 rounded-md sm:mr-5 hover:opacity-80 hover:bg-gray-300/30 active:opacity-60"
          >
            Login
          </button>
          <button
            className="bg-gray-300/40 text-black p-2 rounded-md hover:opacity-80 hover:bg-gray-300/30 active:opacity-60"
            onClick={() => setLogged(false)}
          >
            Register
          </button>
        </div>
      </div>
      {logged ? (
        <form
          onSubmit={signIn}
          className="mx-auto max-w-[600px] flex flex-col items-center my-10 gap-2 py-10 border-2 bg-gray-800 rounded-lg shadow-lg shadow-blue-800 hover:scale-[101%] duration-300"
        >
          <h1 className="py-4 text-purple-800">Log in</h1>
          <input
            autoComplete="yes"
            className="outline-none border-2 border-purple-300 rounded-md pl-2 py-1 hover:shadow-md duration-200"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your Email"
            value={email}
          />
          <input
            autoComplete="yes"
            className="outline-none border-2 border-purple-300 rounded-md pl-2 py-1 hover:shadow-md duration-200"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="border-2 font-bold border-purple-400 text-purple-400 rounded-md px-3 py-1 bg-gradient-to-r  hover:from-pink-500 hover:to-purple-500 hover:shadow-xl duration-200 hover:text-white active:opacity-[.7]">
            Log in
          </button>
        </form>
      ) : (
        <div className="mx-auto max-w-[600px] flex flex-col items-center my-10 gap-2 py-10 border-2 bg-gray-800 rounded-lg shadow-lg shadow-blue-800 hover:scale-[101%] duration-300">
          <form
            onSubmit={signUp}
            className="mx-auto max-w-[1000px] flex flex-col items-center gap-2 py-10"
          >
            <h1 className="py-4 text-purple-800">Create Account</h1>
            <input
              className="outline-none border-2 border-purple-300 rounded-md pl-2 py-1 hover:shadow-md duration-200"
              onChange={(e1) => setEmail1(e1.target.value)}
              type="text"
              placeholder="Enter your Email"
              value={email1}
            />
            <input
              autoComplete="yes"
              className="outline-none border-2 border-purple-300 rounded-md pl-2 py-1 hover:shadow-md duration-200"
              type="password"
              placeholder="Create your Password"
              value={password1}
              onChange={(e1) => setPassword1(e1.target.value)}
            />
            <button
              type="submit"
              className="border-2 font-bold border-purple-400 text-purple-400 rounded-md px-3 py-1 bg-gradient-to-r  hover:from-pink-500 hover:to-purple-500 hover:shadow-xl duration-200 hover:text-white active:opacity-[.7]"
            >
              Create Account
            </button>
          </form>
        </div>
      )}
      <div>
        <span className="border-2 rounded-md p-2 text-red-800 border-red-500 bg-red-600/40">
          check console for errors
        </span>
      </div>
    </div>
  );
};
export default SignIn;
