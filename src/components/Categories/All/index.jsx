import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../Utils/Header/Header"
import Categories from "../index";
import all from "./products"
import coin from "../../../assets/img/coin.png"
import cart from "../../../assets/img/shopping-cart.png"
import Img from "../../../assets/img/Equipamento/49.png"

import "../style.css"

function All(){
        const [products, setProducts] = useState([]);
        const [price, setPrice] = useState([]);
        const [img, setImg] = useState([]);

        const navigate = useNavigate();

        useEffect(() => {
            const promise = axios.get("https://projeto14-adventuresstore-back.herokuapp.com/products");
        
            promise.then((res) => {
              setProducts(res.data);
            });
            promise.catch((err) => {
              alert(err.response.data);
              navigate("/");
            });
          }, []);

    
        const listProducts = products.map((product) =>
            <div className="card">
                <div className="card_img">
                    <img src={Img} alt={product.name}/>
                </div>
                <div className="card_header">
                    <p>{product.name}</p>
                    <div className="price">
                        <div>
                            <p>5</p>
                            <img src={coin} alt="coin" />
                        </div>
                        <img className="btn" src={cart} alt="Add cart" />
                    </div>
                </div>
            </div>
        )

    return (
        <>
            <Header />
            <Categories />
            <div className="main">
                <div className="main_content">
                    {listProducts} 
                </div>
            </div>
        </>
    )
}

export default All;