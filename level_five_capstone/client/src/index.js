import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {ButtonContextProvider} from './buttonContext'

ReactDOM.render(
    <ButtonContextProvider>
        <Router>
            <App/>
        </Router> 
    </ButtonContextProvider>,
    document.getElementById('root')
)