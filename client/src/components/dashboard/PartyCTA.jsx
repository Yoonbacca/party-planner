import { FaPlusSquare } from "react-icons/fa";

const PartyCTA = ({ setPartyPlanning }) => {
    function handleClick() {
      setPartyPlanning(true);
    }

    return (
        <button className="flex flex-col mx-auto w-5/6 p-4 text-center bg-neutral-300/25 border-dashed border-4 border-neutral-300 rounded-lg shadow sm:p-8 hover:bg-neutral-500/25 hover:border-neutral-500 click:bg-red" onClick={handleClick}>
          <h5 className="mb-2 text-3xl font-bold text-white">New Party, who dis?</h5>
          <p className="mb-5 text-base text-white sm:text-lg ">Click here to start planning your party!</p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <FaPlusSquare className="text-6xl text-white " />
          </div>
      </button>
    )
}

export default PartyCTA;
