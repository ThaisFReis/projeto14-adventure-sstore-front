import weapons from "../weapons/weapons"

import "./style.css"
import coin from "../../../assets/img/coin.png"
import cart from "../../../assets/img/shopping-cart.png"

const Weapons = () => {
    console.log(weapons)

    const listweapons = weapons.map((product) =>
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

    return(
        <div className="main_content">
           {listweapons} 
        </div>
    )
}

export default Weapons;