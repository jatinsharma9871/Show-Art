import { Route, Routes } from "react-router-dom"
import { Signin } from "./account/Signin"
import { Signup } from "./account/Signup"
import ProductDetails from "./productpage/product"
import { Home } from "./Home/Home"
// import {  } from "./Component/"

export const Router =()=>{

    return (
        <div>
            <Routes>
              
                <Route path="/:id" element={<ProductDetails/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Signup/>} />
                <Route path="/login" element={<Signin/>}/>
            </Routes>
        </div>
    )
}