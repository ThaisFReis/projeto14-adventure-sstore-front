import Header from "../../Utils/Header/Header"
import Categories from "../index";
import weapons from "./weapons.js"
import coin from "../../../assets/img/coin.png"
import cart from "../../../assets/img/shopping-cart.png"

import "../style.css"

function Weapons(){
    console.log(weapons)
    
    const listWeapons = weapons.map((weapons) =>
        <div className="card" key={weapons.id}>
            <div className="card_img">
                <img src={weapons.img} alt={weapons.img}/>
            </div>
            <div className="card_header">
                <p>{weapons.name}</p>
                <div className="price">
                    <div>
                        <p>{weapons.price}</p>
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
                    {listWeapons} 
                </div>
            </div>
    </>
)
}

export default Weapons;