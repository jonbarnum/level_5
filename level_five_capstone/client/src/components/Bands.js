import React, { useContext } from "react";
import { ButtonContext } from "../buttonContext";
import axios from "axios";

function Bands(){
    const {bandInfo, setSavedBand} = useContext(ButtonContext)

    function addBand(event){
        event.preventDefault()
        let newBand = bandInfo[event.target.parentElement.id]
        axios.post("http://localhost:8000/bands/", {name: newBand.name, url: newBand.url})
        .then(response => {
            setSavedBand(prevBands => [...prevBands, response.data])
            console.log(response.data)
        })
        .catch(error => console.log(error))
    }

    return(
        <div>
            <h1 className="bandsHeaderTitle">Bands</h1>
            {bandInfo.map((band, index) => {
                return(
                    <div key={band.name} id={index} className='bandListDiv'>
                        <a
                            href={band.url}
                            rel="noreferrer"
                            target='_blank'
                            className="bandName"
                        >
                            {band.name}
                        </a>
                        <h3 className="bandListeners">Listeners: {band.listeners}</h3>
                        <button onClick={addBand}>Save to favorites</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Bands