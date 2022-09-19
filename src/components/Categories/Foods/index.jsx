import Header from "../../Utils/Header/Header"
import Categories from "../index";
import foods from "./foods.js"
import coin from "../../../assets/img/coin.png"
import cart from "../../../assets/img/shopping-cart.png"

import "../style.css"

function Foods(){
    console.log(foods)
    
    const listFoods = foods.map((foods) =>
        <div className="card" key={foods.id}>
            <div className="card_img">
                <img src={foods.img} alt={foods.img}/>
            </div>
            <div className="card_header">
                <p>{foods.name}</p>
                <div className="price">
                    <div>
                        <p>{foods.price}</p>
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