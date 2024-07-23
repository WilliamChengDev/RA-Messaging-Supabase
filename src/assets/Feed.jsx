import React from 'react'
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Login from './Login';

const supabase = createClient("https://dpuhkvbnpwobkrxftoji.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdWhrdmJucHdvYmtyeGZ0b2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3MjIxMDIsImV4cCI6MjAzNTI5ODEwMn0.rct-VS_M3RhTaob_R0Y48OZSjXRJEHWt1L3JiUMG1SM");

export default function Feed() {
        const[posts, setPosts] = useState([]);

        useEffect(() => {
                getPosts();
        }, [])

        async function getPosts(){
                const {data} = await supabase.from("Post").select();
                data.sort((a, b) => (a.postid < b.postid ? 1: -1));
                setPosts(data);
        }

        return (
                <div className='feed' style={{height:'100vh', backgroundColor:'var(--bg-color)', display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div className='feed-top-row' style={{height:'10vh', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                                <h1 style={{fontFamily:'Guton-Semibold', color:'var(--pm-color)'}}>Comments</h1>
                        </div>
                        <Login/>
                        <div className='feed-container' style={{height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:"var(--bg-color)", paddingBottom:'2em'}}>
                                {(typeof posts === 'undefined') ? (
                                        <div className='feed-loading'>
                                                <h1>feed loading...</h1>
                                        </div>
                                ) : (
                                        (posts.map((post, i) => (
                                                <div className='message' style={{width:'90%', maxWidth:'90%'}}>
                                                        <div className='message-user' style={{marginLeft:'3%', display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                                                                <h4 style={{margin:'1%', fontFamily:'Guton-Semibold'}}>{post.username}</h4>
                                                                <h5 style={{margin:'1%', fontFamily:'Guton-Regular'}}>{post.datecreated}</h5>
                                                        </div>
                                                        <div key={i} className='message-container' style={{height:'fit-content', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'var(--pm-color)', borderRadius:'1em', marginBottom:'3%'}}>
                                                                <div className='comment' style={{width:'90%'}}>
                                                                        <h4 style={{padding:'1em 0em 1em 0em', margin:'0', fontFamily:'Guton-Regular'}}>{post.message}</h4>
                                                                </div>
                                                                {(post.response === "NULL") ? (
                                                                        <></>
                                                                ) : (
                                                                        <div className='response' style={{width:'90%', backgroundColor:'var(--pm-light)', marginBottom:'1em', borderRadius:'1em'}}>
                                                                                <h4 style={{margin:'0', padding:'1em 1em 1em 1em', fontFamily:'Guton-Semibold'}}>{post.response}</h4>
                                                                        </div>
                                                                )}
                                                        </div>
                                                </div>
                                        )))
                                )}
                               
                        </div>
                </div>
        )
}