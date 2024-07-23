import React, { useState } from "react"

export default function Login(){
        const[email, setEmail] = useState("");
        const[password, setPassword] = useState("");

        const login = () => {

        }

        const signUp = () => {
                
        }

        return(
                <div className='login' style={{width:'90%', zIndex:'10', display:'flex', flexDirection:'column', alignItems:'center', position:'absolute', marginTop:'40vh', backgroundColor:'var(--pm-color)', borderRadius:'1em', filter:'drop-shadow(0 0 0.75rem black)'}}>
                        <h1 style={{fontFamily:'Guton-Semibold'}}>Welcome Back!</h1>
                        <form className="log-in-form" action="" style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'0em 2em 2em 2em', width:'80%'}}>
                                <label htmlFor="email" style={{fontFamily:'Guton-Regular', color:'var(--bg-color)'}}>Email:</label>
                                <input type="text" onChange={(e) => {setEmail(e.target.value)}} style={{width:'90%', borderStyle:'none', borderRadius:'.3em', margin:'1em'}}/>
                                <label htmlFor="password" style={{fontFamily:'Guton-Regular', color:'var(--bg-color)'}}>Password:</label>
                                <input type="text" onChange={(e) => {setPassword(e.target.password)}} style={{width:'90%', borderStyle:'none', borderRadius:'.3em', margin:'1em'}}/>
                                <button onClick={login} style={{borderStyle:'none', fontFamily:'Guton-Semibold', backgroundColor:'var(--bg-color)', borderRadius:'.3em', marginTop:'1em'}}>Login</button>
                        </form>
                        <h4 style={{margin:'1%', fontFamily:'Guton-Semibold'}}>New resident?</h4>
                        <form className="sign-up-form" action=""></form>
                </div>
        )
}