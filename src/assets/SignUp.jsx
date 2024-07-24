import React from "react";
import { useState } from "react";

export default function SignUp(){
        const[email, setEmail] = useState("");
        const[password, setPassword] = useState("");
        const[username, setUsername] = useState("");

        async function signup() {
                const { data, error } = await supabase.auth.signUp({
                  email: email,
                  password: password,
                  options: {
                    emailRedirectTo: 'https://localhost:5173/home',
                  },
                })
        }

        return(
                <div className="sign-up-page" style={{display:'flex', flexDirection:'column', alignItems:'center', height:'100vh', backgroundColor:'var(--pm-color)'}}>
                        <h1 style={{fontFamily:'Guton-Semibold', margin:'0', padding:'1em'}}>Welcome!</h1>
                        <form className="log-in-form" action="" style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'0em 2em 2em 2em', width:'80%'}}>
                                <label htmlFor="username" style={{fontFamily:'Guton-Regular', color:'var(--bg-color)'}}>username</label>
                                <input type="text" onChange={(e) => {setUsername(e.target.value)}} style={{width:'90%', borderStyle:'none', borderRadius:'.3em', margin:'1em'}}/>
                                <label htmlFor="email" style={{fontFamily:'Guton-Regular', color:'var(--bg-color)'}}>Email:</label>
                                <input type="text" onChange={(e) => {setEmail(e.target.value)}} style={{width:'90%', borderStyle:'none', borderRadius:'.3em', margin:'1em'}}/>
                                <label htmlFor="password" style={{fontFamily:'Guton-Regular', color:'var(--bg-color)'}}>Password:</label>
                                <input type="text" onChange={(e) => {setPassword(e.target.password)}} style={{width:'90%', borderStyle:'none', borderRadius:'.3em', margin:'1em'}}/>
                                <button onClick={() => signup()} style={{borderStyle:'none', fontFamily:'Guton-Semibold', backgroundColor:'var(--bg-color)', borderRadius:'.3em', marginTop:'1em'}}>Sign Up</button>
                        </form>
                </div>
        )
}