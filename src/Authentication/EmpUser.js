



import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";




const firebaseConfig = {
    apiKey: "AIzaSyDCyf-kAC-15ZovLgpb3K4mG6zr7-23_QI",
    authDomain: "employee-list-affb8.firebaseapp.com",
    projectId: "employee-list-affb8",
    storageBucket: "employee-list-affb8.appspot.com",
    messagingSenderId: "338171762649",
    appId: "1:338171762649:web:346ea2a75e5f3fa996ebc8",
    measurementId: "G-TGJPJ3F7Z6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth()

  const data=(e)=>{
    setUser(e)
  }

 export function UserAuth(){
    const [user,setUser]=useState()
    useEffect(()=>{
        let x=onAuthStateChanged(auth,u=>setUser(u))
        return x
    })
    return user
  }