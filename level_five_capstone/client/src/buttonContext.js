import React, { useState } from "react";
import axios from "axios";

const ButtonContext = React.createContext()

function ButtonContextProvider(props){
    const [bandInfo, setBandInfo] = useState([])
    const [inputData, setInputData] = useState({
        artist: ''
    })

    function handleChange(event){
        event.preventDefault()
        const {name, value} = event.target
        setInputData(prevData => ({...prevData, [name]: value}))//do i need this?
    }

    function handleSearch(event){
        event.preventDefault()
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${inputData.artist}&api_key=cb41d576aa71567c76b75feab99d7dcd&format=json`)
        .then(response => {
            setBandInfo(response.data)
            //response.data.res
            console.log(response.data)
        })
        .catch(error => console.log(error))
        //setInputData back to empty string after search
    }
    
    return(
        <ButtonContext.Provider value={{
                handleSearch,
                bandInfo,
                handleChange,
                inputData
            }}
        >
            {props.children}
        </ButtonContext.Provider>
    )
}

export {ButtonContextProvider, ButtonContext}