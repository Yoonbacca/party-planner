import { useState } from 'react';
import { useMutation} from '@apollo/client';
import { ADD_USER, LOGIN } from '../../utils/mutations'
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IconContext } from "react-icons";

const SignupForm = ({ toggleLogin }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

  const checkPasswords = () => {
    return (formData.password === formData.confirmPassword)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!checkPasswords()) {
      alert("Passwords do not match")
      return
    }
    try {
      const addedUser = await addUser({
        variables: formData
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
      <h2  className="text-3xl mb-4">Sign up</h2>
      <p className="mb-4">
        Create your account. A world of perfectly planned parties is at your fingertips.
      </p>
      <form onSubmit={handleFormSubmit}>
      <IconContext.Provider
  value={{style: { position: 'absolute', color: 'lightgray', marginLeft: '4px' , marginTop: '8px' }}}
  >
        <div className="mt-5">
            <FaUserAlt />
          <input type="text" name="name" placeholder="Name" autoComplete="given-name" onChange={handleInputChange} className="border border-gray-400 py-1 pl-6 pr-2 w-full rounded"></input>
        </div>
        <div className="mt-5">
            <FaEnvelope />
          <input type="text" name="email" placeholder="Email" autoComplete="email"  onChange={handleInputChange} className="border border-gray-400 py-1 pl-6 pr-2 w-full rounded"></input>
        </div>
        <div className="mt-5">
          <FaLock />
          <input type="password" name="password" placeholder="Password"  onChange={handleInputChange} className="border border-gray-400 py-1 pl-6 pr-2 w-full rounded"></input>
        </div>
        <div className="mt-5">
          <FaLock />
          <input type="password" name="confirmPassword"placeholder="Confirm Password"  onChange={handleInputChange} className="border border-gray-400 py-1 pl-6 pr-2 w-full rounded"></input>
        </div>
        <div className="mt-5">
          <button className="w-full bg-purple-500 border-2 border-purple-500 hover:bg-purple-600 py-3 text-center text-white rounded">Sign up</button>
          <div className="text-xs">By signing up, you agree to the <a href="#" className="text-purple-500 font-semibold">Terms of Service</a> and <a href="#" className="text-purple-500 font-semibold">Party Policy</a>.</div>
        </div>
        </IconContext.Provider>
        <h2 className="text-2xl my-4">Already have an account?</h2>
        <div className="mt-5">
        <button onClick={toggleLogin} className="w-full bg-white hover:bg-gray-100 border-2 border-purple-500 py-3 text-center text-purple-500 rounded">Login</button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm;