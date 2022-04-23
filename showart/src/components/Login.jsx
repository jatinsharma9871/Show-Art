import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { login } from "../redux/login/action";


export const Login = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
       email:"",
       password:""
    })
    const {isAuthenticated} = useSelector(state=>state.login)
    const inputHandle = (e)=>{
         const {value, id} = e.target;
         setForm({...form, [id]:value});
    }

    const handleSubmit = ()=>{
        dispatch(login({email:form.email, password:form.password}))
    }

    if(isAuthenticated) return <Navigate to={'/'}/>
    return (
        <div className="login">
            <h1>Login</h1>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="email" placeholder="Enter Email Address"/><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="password" placeholder="Enter Password"/><br></br>
            <button onClick={()=>{handleSubmit()}}>Login</button>
            <h3 onClick={()=>navigate("/register")} style={{color:'blue', cursor:"pointer", fontWeight:"400", fontSize:"14px"}}>Create New User</h3>
        </div>
    )
}