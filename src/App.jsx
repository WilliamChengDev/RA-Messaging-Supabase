import { useEffect, useState } from 'react';
import './App.css';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://dpuhkvbnpwobkrxftoji.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdWhrdmJucHdvYmtyeGZ0b2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3MjIxMDIsImV4cCI6MjAzNTI5ODEwMn0.rct-VS_M3RhTaob_R0Y48OZSjXRJEHWt1L3JiUMG1SM");

export default function App() {
  const[posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [])

  async function getPosts(){
    const {data} = await supabase.from("Post").select();
    setPosts(data);
  }

  return (
    <>
      
    </>
  )
}