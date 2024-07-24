import React from 'react'
import { useEffect, useState } from 'react';
import Login from './Login';
import { supabase } from "../main";

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
                <div className='feed' style={{height:'fit-content', backgroundColor:'var(--bg-color)', display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div className='feed-top-row' style={{height:'10vh', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                                <h1 style={{fontFamily:'Guton-Semibold', color:'var(--pm-color)'}}>Comments</h1>
                        </div>
                        <div className='decor' style={{height:'.05em', width:'100%', backgroundColor:'var(--pm-color)', left:'14%', opacity:'.3'}}></div>
                        <div className='feed-container' style={{width:'80%', height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:"var(--bg-color)", paddingBottom:'2em'}}>
                                {(typeof posts === 'undefined') ? (
                                        <div className='feed-loading'>
                                                <h1>feed loading...</h1>
                                        </div>
                                ) : (
                                        (posts.map((post, i) => (
                                                <div key={i} className='message' style={{width:'90%', maxWidth:'90%'}}>
                                                        <div className='message-user' style={{marginTop:'1em', marginLeft:'3%', display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                                                                <h4 style={{margin:'1%', fontFamily:'Guton-Semibold', color:'var(--pm-color)'}}>{post.username}</h4>
                                                                <h5 style={{margin:'1%', fontFamily:'Guton-Regular', color:'var(--pm-dark)'}}>{post.datecreated}</h5>
                                                        </div>
                                                        <div key={i} className='message-container' style={{height:'fit-content', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', border:'solid var(--pm-color)', borderWidth:'medium', borderRadius:'1em', marginBottom:'3%'}}>
                                                                <div className='comment' style={{width:'90%'}}>
                                                                        <h4 style={{padding:'1em 0em 1em 0em', margin:'0', fontFamily:'Guton-Regular', color:'var(--pm-color)'}}>{post.message}</h4>
                                                                </div>
                                                                {(post.response === "NULL") ? (
                                                                        <></>
                                                                ) : (
                                                                        <div className='response' style={{width:'90%', backgroundColor:'var(--pm-light)', marginBottom:'1em', borderRadius:'1em'}}>
                                                                                <h4 style={{margin:'0', padding:'1em 1em 1em 1em', fontFamily:'Guton-Semibold', color:'var(--pm-dark)'}}>{post.response}</h4>
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