import axios from "axios";
import { ButtonContext } from "../buttonContext";
import React, { useEffect, useState, useContext } from "react";

function BandEditForm(){
    const [previewActive, setPreviewActive] = useState(false)
    const {handleChange} = useContext(ButtonContext)
    const [genre, setGenre] = useState('')


    return(
        <div>
            <button onClick={() => setPreviewActive(!previewActive)}>Edit</button>
            {/* <button onClick={}>Delete</button> */}
                {previewActive ? (
                    <form>
                        <input
                            type='text'
                            // value={}
                            name='genre'
                            // onChange={}
                            placeholder='Genre'
                        />
                        <input
                            type='text'
                            // value={}
                            name='url'
                            // onChange={}
                            placeholder='Bands URL'
                        />
                        <input
                            type='text'
                            // value={}
                            name='img'
                            // onChange={}
                            placeholder='Bands Img'
                        />
                    </form>
                ): null }
        </div>
    )
}

function FavBands(event, index){
    const {inputData, handleChange} = useContext(ButtonContext)
    const [bands, setBands] = useState([])

    function getbands(){
        axios.get('http://localhost:8000/bands/')
        .then(response => setBands(response.data))
        .catch(error => console.log(error))
    }



    useEffect(() => {
        getbands()
    }, [])

    return(
        <div>
            <h1>Your Favorite Bands Are!!!</h1>
            {bands.map((band, index) => {
                return(
                    <div key={band.name}>
                        <h1>{band.name}</h1>
                        <BandEditForm />
                    </div>
                )
            })}
        </div>
    )
}


export default FavBands

