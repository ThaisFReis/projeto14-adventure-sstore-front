import "./style.css"
import Header from "../Utils/Header/Header"
import Categories from "./Categories"
import Products from "./Products"

function Home(){
    return (
        <div className="home">  
                <Header />
                <Categories />
                <Products />
        </div>
    )
}

export default Home;