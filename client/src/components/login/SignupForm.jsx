import { useState } from 'react';
import { useMutation} from '@apollo/client';
import { ADD_USER, LOGIN } from '../../utils/mutations'
import Field from './Field';
import PassField from './PassField';
import Auth from '../../utils/auth';


const SignupForm = ({ toggleLogin }) => {
  const [passType, setPassType] = useState("password");
  const [hidePass, setHidePass] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const [addUser, {error}] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  
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
      
      const { token, user } = addedUser.data.addUser;
      console.log(user);
      Auth.login(token);

    } catch(err) {
      console.error(err)
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
  
  const checkPasswords = () => {
    return (formData.password === formData.confirmPassword)
  }

  return (
      <div className="w-full lg:w-1/2 py-16 px-12">
      <h2  className="text-3xl mb-4">Sign up</h2>
      <p className="mb-4">
        Create your account. A world of perfectly planned parties is at your fingertips.
      </p>
      <form onSubmit={handleFormSubmit}>
        <Field inputType={"Name"} handleInputChange={handleInputChange} />
        <Field inputType={"Email"} handleInputChange={handleInputChange} />
        <PassField confirmPass={false} handleInputChange={handleInputChange} />
        <PassField confirmPass={true} handleInputChange={handleInputChange} />
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