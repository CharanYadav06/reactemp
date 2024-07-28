

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";



function EmpRegister() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")

    const navigate=useNavigate()

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePass1 = (e) => {
        setPass1(e.target.value)
    }

    const changePass2 = (e) => {
        setPass2(e.target.value)
    }



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

const submitData=(e)=>{
    e.preventDefault()
    let obj={
        email:email,
        password:pass1
    }
    createUserWithEmailAndPassword(auth,obj.email,obj.password)
    .then(()=>{
        alert("Registered Successfully")
        navigate("/login")
    })
    .catch(()=>{
        alert("Error")
    })
}

    return (
        <div className="container" style={{ width: "450px", padding:"20px" }}>
            <div className="card">
                <div className="card-title">
                    <h1 style={{textAlign:"center"}}>Registration Form</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={submitData}>

                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input value={name} type="text" required onChange={changeName} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input value={email} type="email" required onChange={changeEmail} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input value={pass1} type="password" required onChange={changePass1} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input value={pass2} type="password" required onChange={changePass2} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div style={{textAlign:"center"}}>
                        
                            {/* <button style={{margin:"10px"}} type="submit" className="btn btn-primary">Submit</button> */}
                            <button className="btn btn-success" type="submit" >REGISTER</button>
                        
                        <p style={{ padding:"10px"}}>If you have an account? <Link to={"/login"} style={{color:"blue", textDecoration:"underline"}}>LOGIN HERE</Link></p>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}


export default EmpRegister;