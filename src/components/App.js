import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./Login/index.js";
import SingUp from "./SingUp/index.js"
import Home from "./Home/index.js";

import UserContext from "../Contexts/UserContext";


function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  return (
    <UserContext.Provider value={{
      user, setUser,
      token, setToken
      }}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SingUp" element={<SingUp />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    )
}

export default App;