import React, {useState} from "react";
import BountyForm from "./BountyForm";

function Bounty(props){
    const {firstName, lastName, bountyAmount, isAlive, isJedi, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="bounty">
            { !editToggle ?
                <>
                    <h1 className="bountyName">{`Name: ${firstName} ${lastName}: `}</h1>
                    <p className="bountyReward">{` They are a ${isJedi} and the bounty amount is $${bountyAmount}, ${isAlive}. `}</p>

                    <button 
                        className="editButtons"
                        onClick={() => props.deleteBounty(_id)}
                    >
                        Delete
                    </button>
                    <button
                        className="editButtons"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Edit
                    </button>
                </>
            :
                <>
                    <BountyForm 
                        firstName={firstName}
                        lastName={lastName}
                        bountyAmount={bountyAmount}
                        isAlive={isAlive}
                        isJedi={isJedi}
                        _id={_id}
                        buttonText='Submit Edit'
                        submit={props.editBounty}
                    />
                    <button
                        className="closeButton"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Close
                    </button>
                </>
            }
        </div>
    )
}

export default Bounty