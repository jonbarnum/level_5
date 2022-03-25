import React, { useState } from "react";
import axios from "axios";

const ButtonContext = React.createContext()

function ButtonContextProvider(props){
    const [bandInfo, setBandInfo] = useState([])
    const [inputData, setInputData] = useState({
        artist: '',
        genre: '',
        url: '',
        img: ''
    })
    const [savedBand, setSavedBand] = useState([])

    function handleChange(event){
        event.preventDefault()
        const {name, value} = event.target
        setInputData(prevData => ({...prevData, [name]: value}))
    }

    function handleSearch(event){
        event.preventDefault()
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${inputData.artist}&api_key=cb41d576aa71567c76b75feab99d7dcd&format=json&limit=10`)
        .then(response => {
            setBandInfo(response.data.results.artistmatches.artist)
        })
        .catch(error => console.log(error))
        setInputData({
            artist: ''
        })
    }

    // function addBand(newBand){
    //     axios.post('http://localhost:8000', newBand)
    //     .then(response => {
    //         setSavedBand(...prevBands => [...prevBands, response.data])
    //     })
    //     .catch(error => console.log(error))
    // }

    // function getBands(){
    //     axios.get('http://localhost:8000')
    //     .then(response => setSavedBand(response.data))
    //     .catch(error => console.log(error))
    // }
    
    return(
        <ButtonContext.Provider value={{
                handleSearch,
                bandInfo,
                handleChange,
                inputData,
                savedBand,
                setSavedBand
            }}
        >
            {props.children}
        </ButtonContext.Provider>
    )
}

export {ButtonContextProvider, ButtonContext}