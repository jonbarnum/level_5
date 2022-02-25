import React, { useState } from "react";

function BountyForm(props){
    const initInputs = {
        firstName: props.firstName || '',
        lastName: props.lastName || '',
        bountyAmount: props.bountyAmount || 0,
    }

    const [input, setInputs] = useState(initInputs)

    function handleChange(event){
        const {name, value} = event.target
        setInputs(prevInput => ({...prevInput, [name]: value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        props.submit(input, props._id)
        setInputs(initInputs)
    }


    return(
        <form className="bountyForm" onSubmit={handleSubmit}>
            <input
                type='text'
                name="firstName"
                value={input.firstName}
                onChange={handleChange}
                placeholder='First Name'
                className="bountyFormInput"
            />
            <input
                type='text'
                name="lastName"
                value={input.lastName}
                onChange={handleChange}
                placeholder='Last Name'
                className="bountyFormInput"
            />
            <select 
                name="livingStatus" 
                className="bountyFormInput">
                    <option 
                        name="alive"
                        value={input.alive}>
                            Alive
                    </option>
                    <option 
                        name="dead"
                        value={input.dead}>
                            Dead
                    </option>
            </select>
            <input
                type='number'
                name="bountyAmount"
                value={input.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
                className="bountyFormInput"
            />
            <select 
                name="moralStatus" 
                className="bountyFormInput">
                    <option 
                        name="jedi"
                        value={input.jedi}>
                            Jedi
                    </option>
                    <option 
                        name="sith"
                        value={input.sith}>
                            Sith
                    </option>
            </select>
            <button>{props.buttonText}</button>
        </form>
    )
}

export default BountyForm