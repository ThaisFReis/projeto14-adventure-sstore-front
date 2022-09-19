import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../Utils/Header/Header"
import Categories from "../index";
import foods from "./foods.js"
import coin from "../../../assets/img/coin.png"
import cart from "../../../assets/img/shopping-cart.png"
import Img from "../../../assets/img/Comida/30.png"
import "../style.css"

function Foods(){
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get("https://projeto14-adventuresstore-back.herokuapp.com/products/category/Comida");
    
        promise.then((res) => {
          setProducts(res.data);
        });
        promise.catch((err) => {
          alert(err.response.data);
          navigate("/");
        });
      }, []);
    
    const listFoods = products.map((products) =>
        <div className="card" key={products.id}>
            <div className="card_img">
                <img src={Img} alt={products.img}/>
            </div>
            <div className="card_header">
                <p>{products.name}</p>
                <div className="price">
                    <div>
                        <p>11</p>
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
                    {listFoods} 
                </div>
            </div>
    </>
)
}

export default Foods;