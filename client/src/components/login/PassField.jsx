import { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const PassField = ({ isConfirm, handleInputChange }) => {
  const [passType, setPassType] = useState("password");
  const [hidePass, setHidePass] = useState(true);

  function togglePass() {
    if (passType === "password") {
      setPassType("text");
    } else {
      setPassType("password");
    }
    setHidePass(!hidePass);
  }

  return (
      <div className="mt-5 flex">
        <span className="flex justify-around items-center">
          <FaLock color="lightgray" className="absolute ml-10 " />
        </span>
        {isConfirm ? 
        (<input type={passType} name="confirmPassword" placeholder="Confirm Password" onChange={handleInputChange} className="border border-gray-400 py-1 px-9 w-full rounded" />
        ) : (
        <input type={passType} name="password" placeholder="Password" onChange={handleInputChange} className="border border-gray-400 py-1 px-9 w-full rounded" />
        )}
        <span className="flex justify-around items-center cursor-pointer" onClick={togglePass}>
          {hidePass?(<FaEye color="lightgray" className="absolute mr-10" />):(<FaEyeSlash color="gray" className="absolute mr-10" />)}
        </span>
      </div>
    )
}


export default PassField;