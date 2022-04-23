import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { signup } from "../redux/signup/action";


export const Signup = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
       nickName:"",
       email:"",
       password:"",
       country:"",
       profileImage:""
   })
    const inputHandle = (e)=>{
         const {value, id} = e.target;
         setForm({...form, [id]:value});
    }

    const handleSubmit = ()=>{
        dispatch(signup({ nickName:form.nickName,email:form.email, password:form.password,country:form.country,profileImage:form.profileImage}))
        navigate("/login")
    }
    return (
        <div className="whole">
        <div className="headdiv">
         All the arts we practice are apprenticeship<br></br> The big art is our life.</div>
        <div className="register">
            <h2>Register Your Details</h2>
            <label>Nick Name</label><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="nickName" placeholder="name" /><br></br>
            <label>Email</label><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="email" name="" id="email" placeholder="email"/><br></br>
            <label>Password</label><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="password" name="" id="password" placeholder="Password"/><br></br>
            <label>Country</label><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="country" placeholder="Country"/><br></br>
            <label>Profile-Image</label><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="profilImage" placeholder="Add Profile Image url"/><br></br>
            <button onClick={()=>{handleSubmit()}}>Signup</button>
            <h3 onClick={()=>navigate("/login")} style={{color:'blue', cursor:"pointer", fontWeight:"400", fontSize:"14px"}}>Already Have Account</h3>
        </div>
        </div>
    )
}