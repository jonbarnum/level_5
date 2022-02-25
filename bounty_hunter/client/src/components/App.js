import React, { useEffect, useState } from "react";
import BountyForm from "./BountyForm";
import axios from 'axios'
import Bounty from "./Bounty";

function App(){
    const [bounties, setBounties] = useState([])

    function getBounty(){
        axios.get('/bounties')
        .then(response => setBounties(response.data))
        .catch(error => console.log(error))
    }

    function addBounty(newBounty){
        axios.post('/bounties', newBounty)
        .then( response => {
            setBounties(prevBounty => [...prevBounty, response.data])
        })
        .catch(error => console.log(error))
    }

    function deleteBounty(bountyId){
        axios.delete(`/bounties/${bountyId}`)
        .then(response => {
            setBounties(prevBounty => prevBounty.filter(bounty => bounty._id !== bountyId))
        })
        .catch(error => console.log(error))
    }

    function editBounty(updates, bountyId){
        axios.put(`/bounties/${bountyId}`, updates)
        .then(response => {
            setBounties(prevBounty => prevBounty.map(bounty => bounty._id !== bountyId ? bounty : response.data))
        })
    }

    useEffect(() => {
        getBounty()
    }, [])

    return(
        <div>
            <BountyForm 
                submit={addBounty}
                buttonText='Add Bounty'
            />
            {bounties.map(bounty => 
                <Bounty 
                    {...bounty}
                    key={bounty.title}
                    deleteBounty={deleteBounty}
                    editBounty={editBounty}
                />)
            }
        </div>
    )
}

export default App