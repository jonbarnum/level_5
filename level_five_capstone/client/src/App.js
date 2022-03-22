import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import BandSearch from "./components/BandSearch";
import FavBands from "./components/FavBands";
import Albums from "./components/Albums";
import Footer from "./Footer";
import './stylesheet.css'

function App(){
    return(
        <div>
            <Header />
            <Routes>
                <Route path="/bandSearch" element={<BandSearch />} />
                <Route path="/favBands" element={<FavBands />} />
                <Route path="/albums" element={<Albums />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App