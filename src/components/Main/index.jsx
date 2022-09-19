import Header from "../Utils/Header/Header"
import Categories from "../Categories/index.jsx"
import MainContent from "./MainContent/index"

import "./style.css"

function Home(){
    return (
        <>
        <Header />
        <Categories />
        <div className="main">  
                <MainContent />
        </div>
        </>
    )
}

export default Home;