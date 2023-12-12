import { FaUserAlt, FaEnvelope } from "react-icons/fa";

const Field = ({ inputType, handleInputChange }) => {
    const isEmail = (inputType === "Email");

    return (
        <div className="mt-5 flex">
          <span className="flex justify-around items-center">
            {isEmail ? (<FaEnvelope color="lightgray" className="absolute ml-10 " />) : <FaUserAlt color="lightgray" className="absolute ml-10 " />}
          </span>
          <input type="text" name={inputType.toLowerCase()} placeholder={inputType} onChange={handleInputChange} className="border border-gray-400 py-1 px-9 w-full rounded"></input>
        </div>
    )
}


export default Field;