import { useState } from 'react';
import { useMutation} from '@apollo/client';
import { ADD_USER, LOGIN } from '../../utils/mutations'
import { FaUserAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";


const SignupForm = ({ toggleLogin }) => {
  const [passType, setPassType] = useState("password");
  const [hidePass, setHidePass] = useState(true);

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

  function togglePass() {
    if (passType === "password") {
        setPassType("text");
    } else {
        setPassType("password");
    }
    setHidePass(!hidePass);
}

  return (
      <div className="w-full lg:w-1/2 py-16 px-12">
      <h2  className="text-3xl mb-4">Sign up</h2>
      <p className="mb-4">
        Create your account. A world of perfectly planned parties is at your fingertips.
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-5 flex">
          <span className="flex justify-around items-center">
            <FaUserAlt color="lightgray" className="absolute ml-10" />
          </span>
          <input type="text" name="name" placeholder="Name" autoComplete="given-name" onChange={handleInputChange} className="border border-gray-400 py-1 px-9 w-full rounded"></input>
        </div>
        <div className="mt-5 flex">
          <span className="flex justify-around items-center">
            <FaEnvelope color="lightgray" className="absolute ml-10" />
          </span>
          <input type="text" name="email" placeholder="Email" autoComplete="email"  onChange={handleInputChange} className="border border-gray-400 py-1 px-9 w-full rounded"></input>
        </div>
        <div className="mt-5 flex">
          <span className="flex justify-around items-center">
            <FaLock color="lightgray" className="absolute ml-10 " />
          </span>
          <input type={passType} placeholder="Password" className="border border-gray-400 py-1 px-9 w-full rounded" />
          <span className="flex justify-around items-center cursor-pointer" onClick={togglePass}>
            {hidePass?(<FaEye color="lightgray" className="absolute mr-10" />):(<FaEyeSlash color="gray" className="absolute mr-10" />)}
          </span>
        </div>
        <div className="mt-5 flex">
          <span className="flex justify-around items-center">
            <FaLock color="lightgray" className="absolute ml-10 " />
          </span>
          <input type={passType} placeholder="Password" className="border border-gray-400 py-1 px-9 w-full rounded" />
          <span className="flex justify-around items-center cursor-pointer" onClick={togglePass}>
            {hidePass?(<FaEye color="lightgray" className="absolute mr-10" />):(<FaEyeSlash color="gray" className="absolute mr-10" />)}
          </span>
        </div>
        <div className="mt-5">
          <button className="w-full bg-purple-500 border-2 border-purple-500 hover:bg-purple-600 py-3 text-center text-white rounded">Sign up</button>
          <div className="text-xs">By signing up, you agree to the <a href="#" className="text-purple-500 font-semibold">Terms of Service</a> and <a href="#" className="text-purple-500 font-semibold">Party Policy</a>.</div>
        </div>
        <h2 className="text-2xl my-4">Already have an account?</h2>
        <div className="mt-5">
        <button onClick={toggleLogin} className="w-full bg-white hover:bg-gray-100 border-2 border-purple-500 py-3 text-center text-purple-500 rounded">Login</button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm;