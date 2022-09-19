import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import Login from "./Login/index.jsx";
import SingUp from "./SingUp/index.jsx"
import Home from "./Home/index.jsx";
import Main from "./Main/index.jsx";
import Cart from "./Cart/index.jsx";

import { AuthProvider } from './Contexts/auth';


const App = () => {
 
return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SingUp />} />
                <Route path="/main" element={<Main />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </AuthProvider>
    </Router>
);  
}

export default App;