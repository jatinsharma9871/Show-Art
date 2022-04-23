import { useNavigate } from 'react-router-dom'
import './signup.css'

export const Signup = ()=>{
    const navigate = useNavigate();

    const inputHandle = ()=>{

    }
    const handleSubmit = ()=>{

    }
    return (
        <div>
            <div className='regNav'>
                <div style={{cursor:'pointer', display:"flex"}}>
                            <h1 style={{color:"black"}}>Show</h1>
                            <h1 style={{color:"green"}}>Art</h1>
                </div>
            </div>
        <div className='register'>
            <h2>Register</h2>
            <div>
                    <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="nickName" placeholder="name" />
            </div>
            <div>
                    <input onChange={(e)=>{inputHandle(e)}} type="email" name="" id="email" placeholder="email"/>
            </div>
            <div>
                    <input onChange={(e)=>{inputHandle(e)}} type="password" name="" id="password" placeholder="Password"/>
            </div>
            <div>
                    <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="country" placeholder="Country"/>
            </div>
            <div>
                    <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="profilImage" placeholder="Add Profile Image url"/>
            </div>
                <button onClick={()=>{handleSubmit()}}>Signup</button>
                <h3 onClick={()=>navigate("/login")} style={{color:'blue', cursor:"pointer", fontWeight:"400", fontSize:"14px"}}>Already Have Account</h3>
        </div>
        </div>
    )

}