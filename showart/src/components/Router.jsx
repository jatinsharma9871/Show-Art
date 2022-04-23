import { Route, Routes } from "react-router-dom"
import { Signin } from "./account/Signin"
import { Signup } from "./account/Signup"
import { Home } from "./Home/Home"


export const Router =()=>{

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Signup/>} />
                <Route path="/login" element={<Signin/>}/>
            </Routes>
        </div>
    )
}