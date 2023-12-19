const PartyPlanner = ({ setPartyPlanning }) => {

    return (
        <>
        <div className="flex flex-col mx-auto w-5/6 p-4 border bg-white border-neutral-300 rounded-lg shadow sm:p-8 ">
          <h5 className="mb-2 text-3xl font-bold text-black">Party Name</h5>
          <p className="mb-5 text-base text-black sm:text-lg ">Party Description</p>
          <p className="mb-5 text-base text-black sm:text-lg ">Date</p>
          <p className="mb-5 text-base text-black sm:text-lg ">Time</p>
          <p className="mb-5 text-base text-black sm:text-lg ">Location</p>
          <p className="mb-5 text-base text-black sm:text-lg ">Guest List</p>
      </div>
        </>
    )
}

export default PartyPlanner;