import { useState } from 'react';
import PartyCTA from "./PartyCTA";
import PartyPlanner from "./PartyPlanner";

const PartyCard = () => {
    const [partyPlanning, setPartyPlanning] = useState(false);

    return (
        <>
        {partyPlanning ? (<PartyPlanner />) : (<PartyCTA setPartyPlanning={setPartyPlanning} />)}
        </>
    )
}

export default PartyCard;