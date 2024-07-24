import React, { useEffect } from 'react'
import { createClient } from '@supabase/supabase-js';
export const supabase = createClient("https://dpuhkvbnpwobkrxftoji.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdWhrdmJucHdvYmtyeGZ0b2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3MjIxMDIsImV4cCI6MjAzNTI5ODEwMn0.rct-VS_M3RhTaob_R0Y48OZSjXRJEHWt1L3JiUMG1SM");
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Feed from './assets/Feed.jsx'
import SignUp from './assets/SignUp.jsx';
import Login from './assets/Login';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/comments/",
    element:<Feed/>
  },
  {
    path: "/signup/",
    element:<SignUp/>
  },
  {
    path:"/login/",
    element:<Login/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
