import { Route, Routes } from "react-router-dom"
import ProductDetails from "./productpage/product"


export const Router =()=>{

    return (
        <div>
            <Routes>
                <Route path="/" element={"home"}/>
                <Route path="/:id" element={<ProductDetails/>}/>
            </Routes>
        </div>
    )
}