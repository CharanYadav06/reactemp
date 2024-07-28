



import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function EmpForm() {
    const [id, setId] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [designation, setDesignation] = useState("")
    const [gender, setGender] = useState("")
    const [course, setCourse] = useState("")
    const [date, setDate] = useState("")
    
    

    const navigate = useNavigate()


    

    const changeId = (e) => {
        setId(e.target.value)
    }

    const changeImage = (e) => {
        setImage(e.target.value)
    }



    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changeMobile = (e) => {
        setMobile(e.target.value)
    }

    const changeDesignation = (e) => {
        setDesignation(e.target.value)
    }

    

    const changeCourse = (e) => {
        setCourse(e.target.value)
    }





    const changeDate = (e) => {
        setDate(e.target.value)
    }




    const submitData = (e) => {
        e.preventDefault()
        const data1 = { id,image, name, email, mobile, designation, gender, course, date }
        fetch("https://employee-management-system-p6cz.onrender.com", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data1)
        })
            .then(() => {
                alert("Saved Successfully")
                navigate("/a")

            })
            .catch(() => {
                alert("Error")
            })
    }


    

    


    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = () => {
        fetch("https://employee-management-system-p6cz.onrender.com")
            .then((res) => res.json())
            .then((resp) => {
                setDate(resp);
            })
            .catch((error) => console.error("Error fetching employee data:", error));
    };








    return (
        <div>
            <div className="container" style={{ width: "500px", padding: "20px" }}>
                <div className="card" style={{ backgroundColor: "rgba(51, 51, 51, 0.855)" }}>
                    <div className="card-title" style={{ color: "white" }}>
                        <h2 className="text-center">EMPLOYEE FORM</h2>
                    </div>
                    <div className="card-body" style={{ color: "white", opacity: "100%" }}>
                        <form onSubmit={submitData}>
                            <div className="mb-3">
                                <label className="form-label">ID</label>
                                <input value={id} type="number" disabled="disabled" required onChange={changeId} className="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input value={name} type="text" onChange={changeName} required className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input value={email} type="email" onChange={changeEmail} required className="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile</label>
                                <input value={mobile} type="number" onChange={changeMobile} required className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Designation</label>
                                <input value={designation} type="text" onChange={changeDesignation} required className="form-control" id="exampleInputEmail1" />
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">Gender</label><br />
                                <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} checked={gender === "Male"} />
                                <label htmlFor="genderMale" style={{ margin: "8px" }}>Male</label>
                                <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} checked={gender === "Female"} />
                                <label htmlFor="genderFemale" style={{ margin: "8px" }}>Female</label>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Course</label>
                                <input value={course} type="text" onChange={changeCourse} required className="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Date</label>
                                <input value={date} type="date" onChange={changeDate} required className="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input value={image} type="file" onChange={changeImage} required className="form-control" id="exampleInputEmail1" />
                            </div>

                            <div style={{ textAlign: "center" }}>
                                <button type="submit" className="btn btn-primary"  style={{ margin: "10px" }}>Submit</button>
                                <Link to={"/a"} className="btn btn-danger">Back</Link>
                            </div>
                        </form>



                    </div>

                </div>

            </div>
        </div>
    )

}

export default EmpForm;


