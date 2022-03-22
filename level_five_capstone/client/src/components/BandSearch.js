import React, { useContext } from "react";
import { ButtonContext } from "../buttonContext";

function BandSearch(){
    const {handleSearch, inputData, handleChange} = useContext(ButtonContext)
    return(
        <div className="bandSearchDiv">
            <form 
                className="bandSearchForm"
                onSubmit={handleSearch}
            >
                <label
                    className="bandSearchLabel"
                >
                    Search for your: 
                </label>
                {/* <select className="bandSeachSelector">
                    <option 
                        value='band'
                    >
                        Band
                    </option>
                    <option 
                        value='genre'
                    >
                        Genre
                    </option>
                </select> */}
                <input
                    type='text'
                    name='artist'
                    placeholder=' Favorite Band'
                    className="bandSearchInput"
                    value={inputData.artist}
                    onChange={handleChange}
                />
                <button
                    className="searchButton"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default BandSearch