/*
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { categoryContext } from "../Contexts/categoryContext"
*/
import React from "react"; 
import { useNavigate } from "react-router-dom";

import "./style.css"

function Categories(){
    const navigate = useNavigate();

    function handleClick(){
        console.log("clicked")
        navigate("/main")
    }
    /*
    const [categories, setCategories] = useState([]);
    const { setCategoryName } = useContext(categoryContext);
    const navigate = useNavigate();
*/
    return(
        <>
                <div className="categories">
                    <div className="categories__title" onClick={handleClick}>
                        <p>Todos</p>
                    </div>
                    <div className="categories__title" onClick={handleClick}>
                        <p>Armas</p>
                    </div>
                    <div className="categories__title" onClick={handleClick}>
                        <p>Equipamento</p>
                    </div>
                    <div className="categories__title" onClick={handleClick}>
                        <p>Comida</p>
                    </div>
                </div>
        </>
    )
}

export default Categories;