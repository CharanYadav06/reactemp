



import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function EmpEdit() {
    const [id,setId]=useState("")
    const [image,setImage]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [designation,setDesignation]=useState("")
    const [gender,setGender]=useState("")
    const [course,setCourse]=useState("")
    const [date,setDate]=useState("")

    const navigate=useNavigate()
    const {stid}=useParams()

    

const changeId=(e)=>{
    setId(e.target.value)
}



const changeName=(e)=>{
    setName(e.target.value)
}

const changeEmail=(e)=>{
    setEmail(e.target.value)
}

const changeMobile=(e)=>{
    setMobile(e.target.value)
}

const changeDesignation=(e)=>{
    setDesignation(e.target.value)
}



const changeCourse=(e)=>{
    setCourse(e.target.value)
}




const changeDate=(e)=>{
    setDate(e.target.value)
}


useEffect(() => {
    fetch("https://employee-management-system-p6cz.onrender.com/"+stid, {
        method: "GET"
    })
        .then((res) => {
            return res.json()
        })
        .then((resp) => {
            console.log(resp);
            setId(resp.id)
            setImage(resp.image)
            setName(resp.name)
            setEmail(resp.email)
            setMobile(resp.mobile)
            setDesignation(resp.designation)
            setGender(resp.gender)
            setCourse(resp.course)
            setDate(resp.date)

        })

},[])




const submitData=(e)=>{
    e.preventDefault()
    const data={id,image,name,email,mobile,designation,gender,course,date}
    fetch("https://employee-management-system-p6cz.onrender.com/"+stid,{
        method:"PUT",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(data)
    })
    .then(()=>{
        alert("Saved Successfully") 
        navigate("/a")

    })
    .catch(()=>{
        alert("Error")
    })
}








    return (
        <div className="container" style={{ width: "450px", padding:"20px" }}>
            <div className="card" style={{ backgroundColor: "rgba(51, 51, 51, 0.855)" }}>
                <div className="card-title" style={{color:"white"}}>
                    <h2 className="text-center">EMPLOYEE EDIT</h2>
                </div>
                <div className="card-body" style={{ color: "white"}}>
                    <form onSubmit={submitData}>
                        <div className="mb-3">
                            <label  className="form-label">ID</label>
                            <input value={id} type="number" disabled="disabled" onChange={changeId} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input value={name} type="text" onChange={changeName} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Email</label>
                            <input value={email} type="email" onChange={changeEmail} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile</label>
                            <input value={mobile} type="number" onChange={changeMobile} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Designation</label>
                            <input value={designation} type="text" onChange={changeDesignation} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                                <label className="form-label">Gender</label><br />
                                <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} checked={gender === "Male"} />
                                <label htmlFor="genderMale" style={{ margin: "8px" }}>Male</label>
                                <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} checked={gender === "Female"} />
                                <label htmlFor="genderFemale" style={{ margin: "8px" }}>Female</label>
                            </div>
                            
                        <div className="mb-3">
                            <label  className="form-label">Course</label>
                            <input value={course} type="text" onChange={changeCourse} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Date</label>
                            <input value={date} type="date" onChange={changeDate} className="form-control" id="exampleInputEmail1" />
                        </div>
                        

                        <div style={{textAlign:"center"}}>
                            <button type="submit" className="btn btn-primary" style={{margin:"10px"}}>Submit</button>
                        <Link to={"/a"} className="btn btn-danger">Back</Link>
                        </div>
                    </form>



                </div>

            </div>

        </div>
    )

}

export default EmpEdit;




