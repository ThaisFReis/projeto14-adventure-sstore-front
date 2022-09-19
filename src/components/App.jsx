import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import Login from "./Login/index.jsx";
import SingUp from "./SingUp/index.jsx"
import Home from "./Home/index.jsx";
import Cart from "./Cart/index.jsx";
import All from "./Categories/All/index"
import Weapons from "./Categories/Weapons/index.jsx";
import Foods from "./Categories/Foods/index.jsx";
import Equipment from "./Categories/Equipment/index.jsx";

import { AuthProvider } from './Contexts/auth';


const App = () => {
 
return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SingUp />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all" element={<All />} />
                <Route path="/weapons" element={<Weapons />} />
                <Route path="/foods" element={<Foods />} />
                <Route path="/equipment" element={<Equipment />} />
            </Routes>
        </AuthProvider>
    </Router>
);  
}

export default App;