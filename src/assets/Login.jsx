import React, { useState } from "react"
import { Link } from "react-router-dom";
import { supabase } from "../main";
// import { useDisclosure } from '@mantine/hooks';
// import { LoadingOverlay } from "@mantine/core";

export default function Login(){
        const[email, setEmail] = useState("");
        const[password, setPassword] = useState("");

        // const [visible, { toggle }] = useDisclosure(false); //for maintine loader overlay


        async function login() {
                console.log('logging in')
                const { data, error } = await supabase.auth.signInWithPassword({
                  email: email,
                  password: password,
                })
                if(error){
                        console.log("error:" + error)
                } else{
                        console.log(data);
                }
        }

        return(
                <div className="login-bg" style={{height:'100vh', backgroundColor:'var(--bg-color)', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                        <div className='login' style={{position:'relative', width:'90%', zIndex:'10', display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'var(--pm-color)', borderRadius:'1em', filter:'drop-shadow(0 0 0.75rem black)'}}>
                                {/* <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} /> */}
                                <h1 style={{fontFamily:'Guton-Semibold'}}>Welcome Back!</h1>
                                <form className="log-in-form" action="" style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'0em 2em 2em 2em', width:'80%'}}>
                                        <label htmlFor="email" style={{fontFamily:'Guton-Regular', color:'var(--bg-color)'}}>Email:</label>
                                        <input type="text" onChange={(e) => {setEmail(e.target.value)}} style={{width:'90%', borderStyle:'none', borderRadius:'.3em', margin:'1em'}}/>
                                        <label htmlFor="password" style={{fontFamily:'Guton-Regular', color:'var(--bg-color)'}}>Password:</label>
                                        <input type="password" onChange={(e) => {setPassword(e.target.value)}} style={{width:'90%', borderStyle:'none', borderRadius:'.3em', margin:'1em'}}/>
                                        <button type="button" onClick={() => login()} style={{borderStyle:'none', fontFamily:'Guton-Semibold', backgroundColor:'var(--bg-color)', borderRadius:'.3em', marginTop:'1em'}}>Login</button>
                                </form>
                                <h4 style={{margin:'1%', fontFamily:'Guton-Semibold'}}>New resident?</h4>
                                <Link to={`/signup/`} style={{fontFamily:'Guton-Regular', color:'var(--bg-color)', marginBottom:'1em'}}>signup</Link>
                                <form className="sign-up-form" action=""></form>
                        </div>
                </div>
        )
}