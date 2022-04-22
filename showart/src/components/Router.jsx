import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Navbar } from "./Navbar"


export const Router =()=>{

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </div>
    )
}