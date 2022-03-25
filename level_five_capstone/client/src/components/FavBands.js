import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../appContext";


function BandEditForm(){
    const {bands, setBands, getBands} = useContext(AppContext)
    const [previewActive, setPreviewActive] = useState(false)
    const [editInputData, setEditInputData] = useState({
        genre: '',
        url: '',
        img: ''
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
                genre: editInputData.genre, 
                url: editInputData.url, 
                img: editInputData.img 
            }
        )
        .then(response => {
            setBands(prevBand => prevBand.map(band => band._id !== bandId ? band : response.data))
        })
        .catch(error => console.log(error))
        setEditInputData({
            genre: '',
            url: '',
            img: ''
        })
    }

    function handleDeleteBand(event){
        event.preventDefault()
        let bandId = bands[event.target.parentElement.parentElement.parentElement.id]
        axios.delete(`http://localhost:8000/bands/${bandId._id}`)
        .then(response => {
            setBands(prevBand => prevBand.map(band => band._id !== bandId ? band : response.data))
        })
        .catch(error => console.log(error))
        // getBands()
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
                            value={editInputData.url}
                            name='url'
                            onChange={editHandleChange}
                            placeholder='Bands URL'
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
    const [hasImage, setHasImage] = useState(false)

    // useEffect(() => {
    //     getBands()
    // }, [])

    return(
        <div>
            <h1>Your Favorite Bands Are!!!</h1>
            {bands.map((band, index) => {
                return(
                    <div key={band.name} id={index}>
                        <a
                            href={band.url}
                            rel="noreferrer"
                            target='_blank'
                            className="bandName"
                        >
                            {band.name}
                        </a>
                        <div>
                            {/* <h3>
                                Genre: {band.genre}
                            </h3> */}
                            {/* <img src={hasImage ? '' : `${band.img}`} alt='band' /> */}
                        </div>
                        <BandEditForm />
                    </div>
                )
            })}
        </div>
    )
}


export default FavBands

