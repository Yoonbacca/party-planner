import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations'
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IconContext } from "react-icons";

const LoginForm = ({ toggleLogin }) => {

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    try {
      const addedUser = await addUser({
        variables: userFormData
      });
      console.log(addedUser)
      // const { token, user } = addedUser.data.addUser;
      // console.log(user);
      // Auth.login(token);
    } catch(err) {
      console.log(err)
    }
  }

  return (
      <div className="w-full lg:w-1/2 py-16 px-12">
      <h2  className="text-3xl mb-4">Login</h2>
      <p className="mb-4">
        A world of perfectly planned parties is at your fingertips.
      </p>
      <form onSubmit={handleFormSubmit}>
      <IconContext.Provider
  value={{style: { position: 'absolute', color: 'lightgray', marginLeft: '4px' , marginTop: '8px' }}}
  >
        <div className="mt-5">
            <FaEnvelope />
          <input type="text" placeholder="Email" className="border border-gray-400 py-1 pl-6 pr-2 w-full rounded"></input>
        </div>
        <div className="mt-5">
          <FaLock />
          <input type="password" placeholder="Password" className="border border-gray-400 py-1 pl-6 pr-2 w-full rounded"></input>
        </div>
        <div className="mt-5">
          <button className="w-full bg-purple-500 border-2 border-purple-500 hover:bg-purple-600 py-3 text-center text-white rounded">Login</button>
        </div>
        </IconContext.Provider>
        <h2 className="text-2xl my-4">Don't have an account?</h2>
        <div className="mt-5">
        <button onClick={toggleLogin} className="w-full bg-white hover:bg-gray-100 border-2 border-purple-500 py-3 text-center text-purple-500 rounded">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;