import React from "react";
import BountyForm from "./BountyForm";

function Bounty(props){
    const {
            firstName, 
            lastName, 
            livingStatus, 
            bountyAmount, 
            moralStatus,
            _id
        } = props
    return(
        <div>
            <BountyForm
                firstName={firstName}
                lastName={lastName}
                livingStatus={livingStatus}
                bountyAmount={bountyAmount}
                moralStatus={moralStatus}
                _id={_id}
            />
        </div>
    )
}

export default Bounty