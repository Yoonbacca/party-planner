import React, { useState, useMutation } from 'react';

const PartyPlanner = ({ setPartyPlanning }) => {
    const [formData, setFormData] = useState({name: '', description: '', date: '', time: '', location: '', guestList: ''});

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

    return (
    <>
        <div className="flex flex-col mx-auto w-5/6 p-4 border bg-white border-neutral-300 rounded-lg shadow sm:p-8 ">
            <form>
                <input className="mb-5 text-base text-black sm:text-lg" type="text" placeholder="Party Name" />
            </form>
        </div>
    </>
    )
}

export default PartyPlanner;