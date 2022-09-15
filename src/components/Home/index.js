import "./style.css"
import Image from "../../assets/img/image.png"
import AddCart from "../../assets/img/add-shopping-cart.png"
import Header from "../Utils/Header/Header"

function Home(){
    return (
        <div className="body">  
                <Header />
                <>
                <div className="categories">
                    <p>Promoção</p>
                    <p>Categoria</p>
                    <p>Categoria</p>
                    <p>Categoria</p>
                </div>

                <div className="products">
                    <div className="product">
                        <div className="product-image">
                            <img src={Image} alt="product"/>
                        </div>
                        <div className="product-info">
                            <p>Nome do produto</p> 
                        </div>
                        <div className="product-price">
                            <p>R$ 00,00</p>
                        </div>
                        <div className="button-cart">
                            <img src={AddCart} alt="add cart"/>
                        </div>
                    </div>

                    <div className="product">
                        <div className="product-image">
                            <img src={Image} alt="product"/>
                        </div>
                        <div className="product-info">
                            <p>Nome do produto</p> 
                        </div>
                        <div className="product-price">
                            <p>R$ 00,00</p>
                        </div>
                        <div className="button-cart">
                            <img src={AddCart} alt="add cart"/>
                        </div>
                    </div>

                    <div className="product">
                        <div className="product-image">
                            <img src={Image} alt="product"/>
                        </div>
                        <div className="product-info">
                            <p>Nome do produto</p> 
                        </div>
                        <div className="product-price">
                            <p>R$ 00,00</p>
                        </div>
                        <div className="button-cart">
                            <img src={AddCart} alt="add cart"/>
                        </div>
                    </div>

                    <div className="product">
                        <div className="product-image">
                            <img src={Image} alt="product"/>
                        </div>
                        <div className="product-info">
                            <p>Nome do produto</p> 
                        </div>
                        <div className="product-price">
                            <p>R$ 00,00</p>
                        </div>
                        <div className="button-cart">
                            <img src={AddCart} alt="add cart"/>
                        </div>
                    </div>
                </div>

                </>
        </div>
    )
}

export default Home;