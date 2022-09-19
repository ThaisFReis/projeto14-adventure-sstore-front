import Header from "../../Utils/Header/Header"
import Categories from "../index";
import products from "./products"

import coin from "../../../assets/img/coin.png"
import cart from "../../../assets/img/shopping-cart.png"

import "../style.css"

function All(){
        console.log(products)
    
        const listProducts = products.map((product) =>
            <div className="card" key={product.id}>
                <div className="card_img">
                    <img src={product.img} alt={product.img}/>
                </div>
                <div className="card_header">
                    <p>{product.name}</p>
                    <div className="price">
                        <div>
                            <p>{product.price}</p>
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