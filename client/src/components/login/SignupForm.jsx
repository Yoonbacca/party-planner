import React from "react";
import { useState } from 'react';
import { useMutation} from '@apollo/client';
import { ADD_USER, LOGIN } from '../../utils/mutations'
import Field from './Field';
import PassField from './PassField';
import SubmitButton from './SubmitButton';
import SwitchButton from './SwitchButton';
import Auth from '../../utils/auth';


const SignupForm = ({ toggleLogin }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const [addUser, {error}] = useMutation(ADD_USER);

  const recaptchaRef = React.createRef();
  console.log(recaptchaRef.current);
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

    if (recaptchaRef.current === null || recaptchaRef.current.getValue() === "") {
      alert("Please verify you are not a robot")
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
        <PassField isConfirm={false} handleInputChange={handleInputChange} />
        <PassField isConfirm={true} handleInputChange={handleInputChange} />
        <SubmitButton isLogin={false} recaptchaRef={recaptchaRef} />
        <h2 className="text-2xl my-4">Already have an account?</h2>
        <SwitchButton isLogin={false} toggleLogin={toggleLogin} />
      </form>
    </div>
  )
}

export default SignupForm;