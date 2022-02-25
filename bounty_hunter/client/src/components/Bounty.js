import React, {useState} from "react";
import BountyForm from "./BountyForm";

function Bounty(props){
    const {firstName, lastName, bountyAmount, isAlive, isJedi, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="bounty">
            { !editToggle ?
                <>
                    <h1>First Name: {firstName}</h1>
                    <h1>Last Name: {lastName}</h1>
                    <p>Bounty Amount: {bountyAmount}</p>
                    <p>Alive or Dead? {isAlive}</p>
                    <p>Jedi or Sith? {isJedi}</p>
                    <button 
                        // className="deleteButton"
                        onClick={() => props.deleteBounty(_id)}
                    >
                        Delete
                    </button>
                    <button
                        // className="editButton"
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