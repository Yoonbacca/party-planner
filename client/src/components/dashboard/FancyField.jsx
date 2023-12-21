const FancyField = ({ inputType, handleInputChange }) => {

    return (
        <div className="mt-5 flex">
          <span className="flex justify-around items-center">
          </span>
          <input type="text" name={inputType.toLowerCase()} placeholder={inputType} onChange={handleInputChange} className="border border-gray-400 py-1 px-9 w-full rounded">dfd</input>
        </div>
    )
}

export default FancyField;