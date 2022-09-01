import React from 'react';
import './App.css';
import Login from "./components/Login"
import Dashboard from './components/Dashboard';
import {useEffect,useState} from "react"
import supabase from './supabase';
import Cookies from 'js-cookie';
function App() {
  const [email,setEmail] = useState('')
  const [auth,setAuth] = useState(false)
  useEffect(()=>{
    const token = Cookies.get('token')
    if (token !== undefined) {
        const verify = async() => {
          const {user,error} = await supabase.auth.api.getUser(token)
          if (error) alert(error.message)
          else {
            const {email} = user;
            setEmail(email)
            setAuth(true)
          }
        }
        verify()
    }
  },[])

  return (
    <>
      {auth ? <Dashboard />:<Login />}
    </>
  );
}

export default App;
