import React, { useContext } from "react";
import { ButtonContext } from "../buttonContext";

function Bands(){
    const {bandInfo} = useContext(ButtonContext)

    return(
        <div>
            <h1 className="bandsHeaderTitle">Bands</h1>
            {bandInfo.map(band => {
                return(
                    <div key={band.mbid} className='bandListDiv'>
                        <a
                            href={band.url}
                            rel="noreferrer"
                            target='_blank'
                            className="bandName"
                        >
                            {band.name}
                        </a>
                        <h3 className="bandListeners">Listeners: {band.listeners}</h3>
                        <button>Save to favorites</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Bands