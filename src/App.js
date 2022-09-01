import React from 'react';
import './App.css';
import Login from "./components/Login"
import {useEffect} from "react"
import supabase from './supabase';
import Cookies from 'js-cookie';
function App() {

  useEffect(()=>{
    const token = Cookies.get('token')
    if (token !== undefined) {
        const verify = async() => {
          const {user,error} = await supabase.auth.api.getUser(token)
          if (error) alert(error.message)
          else {
            const {email} = user;
            console.log(email);
          }
        }
        verify()
    }
  },[])

  return (
    <Login />
  );
}

export default App;
