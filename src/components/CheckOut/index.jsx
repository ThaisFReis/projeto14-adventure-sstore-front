import { useNavigate } from "react-router-dom";

import Button from "../Utils/Button/Button";
import "./style.css"

function CheckOut(){
    const navigate = useNavigate();

    return(
        <div className="mainPage">
            <div className="checkOutPage">
            <h1>Seu pedido foi finalizado!</h1>
            <div className="actions">
                <Button onClick={() => navigate("/all")}> Voltar </Button>
            </div>
        </div>
        </div>
    )
}

export default CheckOut;