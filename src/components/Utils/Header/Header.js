import { useNavigate } from "react-router-dom";

import "./style.css"
import Costumer from "../../../assets/img/customer.png"
import Cart from "../../../assets/img/shopping-cart.png"

function Header(){
    const navigate = useNavigate();

    async function handleSubmit(e){
        /* e.preventDefault();
         try{
             const {data} = await axios.post("http://localhost:4000/Login", {email, password});
             setUser(data);*/
             navigate("/Login");
         /*}catch(error){
             console.log("Erro ao fazer login");
         }*/
     }

    return(
        <div className="header">
            <h1>Adventurer's Shop</h1>
            <div className="menu">
                <img src={Costumer} alt="login"  onClick={handleSubmit}/>
                <img src={Cart} alt="carrinho" />
            </div>
        </div>
    )
}

export default Header;