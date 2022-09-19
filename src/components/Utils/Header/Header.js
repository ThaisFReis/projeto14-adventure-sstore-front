import { useNavigate } from "react-router-dom";

import "./style.css"
import Costumer from "../../../assets/img/customer.png"
import Cart from "../../../assets/img/shopping-cart.png"

function Header(){
    const navigate = useNavigate();

    async function handleSubmit(e){
             navigate("/login");
     }

     async function openCart(e){
        navigate("/cart");
}

    return(
        <div className="header">
            <h1>Adventurer's Shop</h1>
            <div className="menu">
                <div>
                    <img src={Costumer} alt="login"  onClick={handleSubmit}/>
                </div>
                <div>
                    <img src={Cart} alt="Carrinho" onClick={openCart}/>
                </div>
            </div>
        </div>
    )
}

export default Header;