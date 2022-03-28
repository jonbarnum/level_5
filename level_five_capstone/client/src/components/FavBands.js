import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../appContext";


function BandEditForm(band){
    const {bands, getBands} = useContext(AppContext)
    const [previewActive, setPreviewActive] = useState(false)
    const [editInputData, setEditInputData] = useState({
        genre: band.genre,
        img: band.img
    })

    function editHandleChange(event){
        event.preventDefault()
        const {name, value} = event.target
        setEditInputData(prevData => ({...prevData, [name]: value}))
    }
    

    function handleEditBand(event){
        event.preventDefault()
        let bandId = bands[event.target.parentElement.parentElement.id]
        axios.put(`http://localhost:8000/bands/${bandId._id}`, 
            {
                genre: editInputData.genre ? editInputData.genre : band.genre, 
                img: editInputData.img ? editInputData.img : band.img
            }
        )
        .then(response => {
            getBands()
        })
        .catch(error => console.log(error))
        setEditInputData({
            genre: '',
            img: ''
        })
    }


    function handleDeleteBand(event){
        event.preventDefault()
        let bandId = bands[event.target.parentElement.parentElement.parentElement.id]
        axios.delete(`http://localhost:8000/bands/${bandId._id}`)
        .then(() => {
            getBands()
        })
        .catch(error => console.log(error))
    }


    return(
        <div>
            <button onClick={() => setPreviewActive(!previewActive)}>Edit</button>
                {previewActive ? (
                    <form onSubmit={handleEditBand}>
                        <input
                            type='text'
                            value={editInputData.genre}
                            name='genre'
                            onChange={editHandleChange}
                            placeholder='Genre'
                        />
                        <input
                            type='text'
                            value={editInputData.img}
                            name='img'
                            onChange={editHandleChange}
                            placeholder='Bands Img'
                        />
                        <button>Save</button>
                        <button onClick={handleDeleteBand}>Delete</button>
                    </form>
                ): null }
        </div>
    )
}

function FavBands(){
    const {bands, getBands} = useContext(AppContext)

    useEffect(() => {
        getBands()
    }, [])

    return(
        <div className="favBands">
            <h1>Your Favorite Bands Are!!!</h1>
            {bands.map((band, index) => {
                return(
                    <div key={band.name} id={index} className='favBandDiv'>
                        <a
                            href={band.url}
                            rel="noreferrer"
                            target='_blank'
                            className="bandName"
                        >
                            {band.name}
                        </a>
                        <div>
                            {band.genre && 
                                <h3 className="favBandGenre">
                                    Genre: {band.genre}
                                </h3>
                            }
                            {band.img &&
                                <img className="favBandImage" src={`${band.img}`} alt='band' />
                            }
                        </div>
                        <BandEditForm band={band}/>
                    </div>
                )
            })}
        </div>
    )
}


export default FavBands

