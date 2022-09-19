import React from "react"; 
import { useNavigate } from "react-router-dom";

import "./index.css"    

function Categories(){
    const navigate = useNavigate();

    function handleClick(){
        console.log("clicked")
        navigate("/main")
    }
    return(
        <>
                <div className="categories">
                <div className="categories__title" 
                    onClick={() => {
                        navigate("/all");
              }}>
                        <p>Todos</p>
                    </div>
                    <div className="categories__title" 
                    onClick={() => {
                        navigate("/weapons");
              }}>
                        <p>Armas</p>
                    </div>
                    <div className="categories__title" 
                    onClick={() => {
                        navigate("/equipment");
              }}>
                        <p>Equipamento</p>
                    </div>
                    <div className="categories__title" 
                    onClick={() => {
                        navigate("/foods");
              }}>
                        <p>Comida</p>
                    </div>
                </div>
        </>
    )
}

export default Categories;