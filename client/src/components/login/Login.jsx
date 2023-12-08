import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div id="left-form" className="w-full lg:w-1/2 flex flex-col items-center justify-end  bg-no-repeat bg-cover bg-center">
              <h1 className="text-black text-3xl">Welcome!</h1>
                <p className="text-black text-m">To Pineapple Party Planner</p>
              <div>
                <p className="text-white"><a href="#" className="text-purple-500 font-semibold text-sm">(Say that 3 times fast)</a></p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2  className="text-3xl mb-4">Sign-up</h2>
              <p className="mb-4">
                Create your account. It's free and only takes a minute
              </p>
              <form action="#">
                <div className="mt-5">
                    <FaUserAlt  />
                  <input type="text" placeholder="Name" className="border border-gray-400 py-1 px-2 w-full rounded"></input>
                </div>
                <div className="mt-5">
                    <FaEnvelope />
                  <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full rounded"></input>
                </div>
                <div className="mt-5">
                  <FaLock />
                  <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full rounded"></input>
                </div>
                <div className="mt-5">
                  <FaLock />
                  <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full rounded"></input>
                </div>
                <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400"></input>
                  <span>
                    I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a> 
                  </span>
                </div>
                <div className="mt-5">
                  <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}

export default Login;