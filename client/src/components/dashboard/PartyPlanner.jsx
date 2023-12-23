import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { GET_USER } from '../../utils/queries';
import { ADD_PARTY } from '../../utils/mutations'
import { Datepicker } from 'flowbite-react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';

const PartyPlanner = ({ setPartyPlanning }) => {
    const [formData, setFormData] = useState({name: '', description: '', date: '', time: '', location: '', guestList: ''});
    const format = 'HH:mm:a';
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
                <div className="flex flex-row">
                  <Datepicker id="datepicker" name="date" minDate={new Date(Date.now())} onSelectedDateChanged={handleDateChange} />
                  <TimePicker.RangePicker id="timepicker" name="time" minuteStep={15} defaultValue={dayjs('12:08', format)} format={format} />
                </div>
              </div>
              
            </form>
        </div>
    </>
    )
}

export default PartyPlanner;


{/* <div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div> */}
