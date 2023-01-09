import React from 'react';
import ReactDOM from 'react-dom/client';
import './commons/index.css';
import {BrowserRouter, Routes} from "react-router-dom";
import {NavBar} from "./commons/components/NavBar";
import {Footer} from "./commons/components/Footer";



function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>

            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /> </React.StrictMode>);

