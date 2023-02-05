import React from 'react';
import ReactDOM from 'react-dom/client';
import './commons/css/root.css';
import './commons/css/all_tags.css';
import './commons/css/commons.css';
import './commons/css/index.css';
import './commons/css/index_mobile.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Rooms} from "./pages/Rooms";
import {MyRoutes} from "./data/MyRoutes";
import {CheckoutDetails} from "./pages/CheckoutDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={MyRoutes.HOME.routerLink} element={<Rooms/>}/>
                <Route path={MyRoutes.ROOMS.routerLink} element={<Rooms/>}/>
                <Route path={MyRoutes.room_checkout_detail.routerLink} element={<CheckoutDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /> </React.StrictMode>);

