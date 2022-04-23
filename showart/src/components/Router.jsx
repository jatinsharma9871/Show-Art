import { Route, Routes } from "react-router-dom"
<<<<<<< HEAD
import ProductDetails from "./productpage/product"
=======
import { Signup } from "./auth/Signup"
import { Home } from "./Home/Home"
>>>>>>> 831a20b0255dd8fd615e6e254be879af9cf57807


export const Router =()=>{

    return (
        <div>
            <Routes>
<<<<<<< HEAD
                <Route path="/" element={"home"}/>
                <Route path="/:id" element={<ProductDetails/>}/>
=======
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Signup/>} />
>>>>>>> 831a20b0255dd8fd615e6e254be879af9cf57807
            </Routes>
        </div>
    )
}