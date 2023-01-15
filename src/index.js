import React from 'react';
import ReactDOM from 'react-dom/client';
import './commons/index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./commons/components/NavBar";
import {Footer} from "./commons/components/Footer";
import {Rooms} from "./pages/Rooms";




function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Rooms/>}/>
                <Route path="/rooms" element={<Rooms/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /> </React.StrictMode>);

