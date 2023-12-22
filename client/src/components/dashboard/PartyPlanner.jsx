import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { GET_USER } from '../../utils/queries';
import { ADD_PARTY } from '../../utils/mutations'
import { Datepicker } from 'flowbite-react';

const PartyPlanner = ({ setPartyPlanning }) => {
    const [formData, setFormData] = useState({name: '', description: '', date: '', time: '', location: '', guestList: ''});

    const [addParty, {error}] = useMutation(ADD_PARTY);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
      console.log(formData)
    };

    const handleDateChange = (event) => {
      const selectedDate = new Date(event.toString()).toLocaleDateString('en-US');
      setFormData({ ...formData, date: selectedDate });
      console.log(formData)
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const addedParty = await addParty({
          variables: formData
        });
        
        const { token, user } = addedParty.data.addParty;
        Auth.login(token);
        
      } catch(err) {
        console.error(err)
      }
    }

    return (
    <>
        <div className="flex flex-col mx-auto p-4 border bg-white border-neutral-300 rounded-lg shadow sm:p-8 ">
        <h2 className="text-5xl mb-4">Party Planner</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mt-5 flex flex-col">
                <h2 className="text-2xl mb-1">Name</h2>
                <input className="flex-1 mb-5 text-base border text-black sm:text-lg" type="text" name="name" placeholder="Name" onChange={handleInputChange} />
              </div>
              <div className="mt-5 flex flex-col">
                <h2 className="text-2xl mb-1">Description</h2>
                <input className="flex-1 mb-5 text-base border text-black sm:text-lg" type="text" name="description" placeholder="Description" onChange={handleInputChange} />
              </div>              
              <div className="mt-5 flex flex-col">
                <h2 className="text-2xl mb-1">Date and Time</h2>
                <Datepicker id="datepicker" name="date" minDate={new Date(Date.now())} onSelectedDateChanged={handleDateChange} />

              </div>
            </form>
        </div>
    </>
    )
}

export default PartyPlanner;