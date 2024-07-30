import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css'

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    })


    const collectData = async ()=>{
        console.log(name,email,password);
        let result = await fetch('http://localhost:4000/signup',{
             method:"POST", 
             body: JSON.stringify({name,email,password}),
             headers:{
                'Content-Type':'application/json'
             } 
            })

            result =await result.json()
            console.log(result);
            localStorage.setItem("user",JSON.stringify(result));   
            if(result)   
            {   
            navigate('/')
            }
     
    }

    return (
        <div className="SignUp">
            <h1>SignUp</h1>

            <input className="inputbox" type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} placeholder="𝓔𝓷𝓽𝓮𝓻 𝓝𝓪𝓶𝓮" />

            <input className="inputbox" type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder="𝓔𝓷𝓽𝓮𝓻 𝓔𝓶𝓪𝓲𝓵" />

            <input className="inputbox" type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="𝓔𝓷𝓽𝓮𝓻 𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭" />

            <button onClick={collectData} className="button" type="button">SignUp</button>
        </div>
    )
}

export default SignUp;