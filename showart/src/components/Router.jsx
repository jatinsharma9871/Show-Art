import { Route, Routes } from "react-router-dom"
import ProductDetails from "./productpage/product"
import { Signup } from "./auth/Signup"
import { Home } from "./Home/Home"


export const Router =()=>{

    return (
        <div>
            <Routes>
              
                <Route path="/:id" element={<ProductDetails/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Signup/>} />
            </Routes>
        </div>
    )
}