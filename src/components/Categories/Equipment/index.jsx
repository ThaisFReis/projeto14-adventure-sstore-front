import Header from "../../Utils/Header/Header"
import Categories from "../index";
import equipment from "./equipment.js"
import coin from "../../../assets/img/coin.png"
import cart from "../../../assets/img/shopping-cart.png"

import "../style.css"

function Equipment(){
    console.log(equipment)
    
    const listEquipment = equipment.map((equipment) =>
        <div className="card" key={equipment.id}>
            <div className="card_img">
                <img src={equipment.img} alt={equipment.img}/>
            </div>
            <div className="card_header">
                <p>{equipment.name}</p>
                <div className="price">
                    <div>
                        <p>{equipment.price}</p>
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
                    {listEquipment} 
                </div>
            </div>
    </>
)
}

export default Equipment;