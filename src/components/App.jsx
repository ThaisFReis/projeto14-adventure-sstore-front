import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import Login from "./Login/index.js";
import SingUp from "./SingUp/index.js"
import Home from "./Home/index.js";

import { AuthProvider } from './Contexts/auth';


const App = () => {
 
return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SingUp />} />
            </Routes>
        </AuthProvider>
    </Router>
);  
}

export default App;