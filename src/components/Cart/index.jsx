import { useNavigate } from "react-router-dom";

import Button from "../Utils/Button/Button";
import coin from "../../assets/img/coin.png"

import "./style.css";

const Cart = () => {
    const navigate = useNavigate();

    return (
        <div className="cartPage">
            <div className="cart">
                <h1>Meu Carrinho</h1>
                <div className="mainPage">
                    <div className="boxCart">
                        <div className="cart__item">
                            <div className="cart__item__name">
                                <h2>Nome do produto</h2>
                            </div>
                            <div className="cart__item__price">
                                <h2>Preço</h2>
                                <img className="coin" src={coin} alt="moeda" />
                            </div>
                        </div>

                        <div className="cart__item">
                            <div className="cart__item__name">
                                <h2>Nome do produto</h2>
                            </div>
                            <div className="cart__item__price">
                                <h2>Preço</h2>
                                <img  className="coin" src={coin} alt="moeda" />
                            </div>
                        </div>
                    </div>
                    <div className="totalPrice">
                        <div>
                            <p>000</p>
                            <img className="coin" src={coin} alt="moeda" />
                        </div>
                    </div>
                </div>
                
                <div className="actions">
                    <Button onClick={() => navigate("/all")}> Voltar </Button>
                    <Button onClick={() => navigate("/checkout")}> Finalizar </Button>
                </div>
            </div>
        </div>
    )
}

export default Cart;