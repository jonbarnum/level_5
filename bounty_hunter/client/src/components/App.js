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
        .then(response => {
            setBounties(prevBounties => prevBounties, response.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getBounty()
    }, [])

    return(
        <div>
            <BountyForm
                submit={addBounty}
                buttonText="Add Bounty"
            />
            {bounties.map(bounty =>
                <Bounty
                    {...bounty}
                    key={bounty._id}/>)
            }
        </div>
    )
}

export default App 