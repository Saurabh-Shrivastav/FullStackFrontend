import React, { useEffect, useState } from "react";
import './Login.css'
import { json, useNavigate } from "react-router-dom";

const Login =()=>{
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate('/')
        }
    },[])

    const handlelogin = async ()=> {
        // console.log("Email & Password",{email, password});
        let result = await fetch('http://localhost:4000/login',{
            method:"POST",
            body: JSON.stringify({email, password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json()
        console.log("Result",result);
        if (result.name) {
            localStorage.setItem("user",JSON.stringify(result))
            navigate('/')
        }else{
            alert("Please enter correct Details.")
        }
    }

    return(
        <div className="login">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JEaPizEIL5vYUzRE85FDmyzXjYeCPQ_1KeczceH1pL0MPnOKcdC_xs2pbDCN1NjPXkI&usqp=CAU" style={{mixBlendMode: "darken"}}/>

            <input className="inputBox" type="text" placeholder="𝐸𝓃𝓉𝑒𝓇 𝐸𝓂𝒶𝒾𝓁"
            onChange={(e)=>setEmail(e.target.value)} value={email}/>

            <input className="inputBox" type="password" placeholder="𝐸𝓃𝓉𝑒𝓇 P𝒶𝓈𝓈𝓌𝑜𝓇𝒹"
            onChange={(e)=>setPassword(e.target.value)} value={password}/>

            <button onClick={handlelogin} className="appButton" type="button">LOGIᑎ</button>
        </div>
    )
}

export default Login;