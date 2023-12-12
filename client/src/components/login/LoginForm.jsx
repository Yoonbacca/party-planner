import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations'
import Field from './Field';
import PassField from './PassField';
import Auth from '../../utils/auth';


const LoginForm = ({ toggleLogin }) => {
  const [passType, setPassType] = useState("password");
  const [hidePass, setHidePass] = useState(true);
  const [formData, setFormData] = useState({email: '', password: ''});

  const [login, { error }] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const userLogin = await login({
        variables: formData
      });

      const { token, user } = userLogin.data.login;
      console.log(user);
      Auth.login(token);
      
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
      <h2  className="text-3xl mb-4">Login</h2>
      <p className="mb-4">
        A world of perfectly planned parties is at your fingertips.
      </p>
      <form onSubmit={handleFormSubmit}>
        <Field inputType={"Name"} />
        <div className="mt-5 flex">
          <span className="flex justify-around items-center">
            <FaLock color="lightgray" className="absolute ml-10 " />
          </span>
          <input type={passType} name="password" placeholder="Password" onChange={handleInputChange} className="border border-gray-400 py-1 px-9 w-full rounded" />
          <span className="flex justify-around items-center cursor-pointer" onClick={togglePass}>
            {hidePass?(<FaEye color="lightgray" className="absolute mr-10" />):(<FaEyeSlash color="gray" className="absolute mr-10" />)}
          </span>
        </div>

        <div className="mt-5">
          <button className="w-full bg-purple-500 border-2 border-purple-500 hover:bg-purple-600 py-3 text-center text-white rounded">Login</button>
        </div>
        <h2 className="text-2xl my-4">Don't have an account?</h2>
        <div className="mt-5">
        <button onClick={toggleLogin} className="w-full bg-white hover:bg-gray-100 border-2 border-purple-500 py-3 text-center text-purple-500 rounded">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;