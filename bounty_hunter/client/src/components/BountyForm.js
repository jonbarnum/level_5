import React, { useState } from "react";

function BountyForm(props){


    const initialInputs = {
        firstName: props.firstName || '',
        lastName: props.lastName || '',
        bountyAmount: props.bountyAmount || '',
        isAlive: props.isAlive || '',
        isJedi: props.isJedi || ''
    }

    const [input, setInput] = useState(initialInputs)

    function handleChange(event){
        const {name, value} = event.target
        setInput(prevInput => ({...prevInput, [name]: value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        props.submit(input, props._id)
        setInput(initialInputs)
    }

    return(
        <form className="bountyForm" onSubmit={handleSubmit}>
            <input
                type='text'
                name="firstName"
                value={input.firstName}
                onChange={handleChange}
                placeholder='First Name'
                required
                className="bountyFormInput"
            />
            <input
                type='text'
                name="lastName"
                value={input.lastName}
                onChange={handleChange}
                placeholder='Last Name'
                required
                className="bountyFormInput"
            />
            <input
                type='text'
                name="bountyAmount"
                value={input.bountyAmount}
                onChange={handleChange}
                placeholder='Bounty Amount'
                required
                className="bountyFormInput"
            />
            <input
                type='text'
                name="isAlive"
                value={input.isAlive}
                onChange={handleChange}
                placeholder='Dead or Alive?'
                required
                className="bountyFormInput"
            />
            <input
                type='text'
                name="isJedi"
                value={input.isJedi}
                onChange={handleChange}
                placeholder='Jedi or Sith?'
                required
                className="bountyFormInput"
            />
            <button className="editButtons">{props.buttonText}</button>
        </form>
    )
}

export default BountyForm