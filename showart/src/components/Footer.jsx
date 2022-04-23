import {Link} from 'react-router-dom';
//import {useState, useEffect,useRef} from 'react'
//import Footer from './components/Footer' 
const Footer = (props)=>{

return(
<>

<div className="justify-between items-center px-24 py-12 text-gray-300 align-middle bg-black md:flex">

    <div  className="flex mx-3 justify-center">
        <img className="content-center" src="https://raw.githubusercontent.com/kushagra-01/random/main/f08c0e10-ba1d-470c-aee8-87dae14d1f4d.jpg" alt="" />
    </div>
    <div className="md:mr-40 md:mx-3">
        <div className="grid text-center grid-1 md:grid-cols-4 lg:grid-cols-4">

        <Link className="my-1 hover:underline mt-2" to="">© ShowArt</Link>
        <Link className="my-1 hover:underline" to="">Privacy Policy</Link>
        <Link className="my-1 hover:underline" to="">Cookie Policy</Link>
        <Link className="my-1 hover:underline" to="">Terms of Service</Link>
        <Link className="my-1 hover:underline" to="">Do Not Sell My Personal Information</Link>
        <Link className="my-1 hover:underline" to="">Refunds</Link>
        </div>
        <div className="text-[12px] text-gray-300 text-center my-1">ShowArt Inc. | All rights reserved. All trademark referenced herein are properties of their respective owners. The ArtShow is operated by 5bits.</div>
    </div>
    <div className="mx-3">
        <select name="" id="" className="p-2 text-white bg-black focus:bg-black hover:bg-gray-500 outline-none">
            <option value="">English</option>
            <option value="">Spanish</option>
            <option value="">French</option>
        </select>
        
    </div>
    <div className="flex mx-3 justify-center">
        <img src="https://raw.githubusercontent.com/kushagra-01/random/main/f08c0e10-ba1d-470c-aee8-87dae14d1f4d.jpg" alt="" className="content-center mt-3 w-[3rem] md:max-w-[7rem] md:max-h-[5rem]" />
    </div>
    
</div>


</>

)
}

export default Footer;