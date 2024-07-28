






import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import Pagination from "./EmpPagination";
import { UserAuth } from "./Authentication/EmpUser";




function EmpData() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const u=UserAuth()
    



    useEffect(() => {
        fetch("https://employee-management-system-p6cz.onrender.com", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp);
                setData(resp)

            })

    }, [])


    const [value, setValue] = useState("")
    const search = (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
    }

    const searchData = async (e) => {
        e.preventDefault()
        return await axios.get(`https://employee-management-system-p6cz.onrender.com?q=${value}&`)
            .then((resp) => {
                setData(resp.data)
            }).catch((error) => {
                alert(error)
            })
    }



    const option = ['name', 'email', 'id', 'date']
    const [sort, setSort] = useState("")
    const sortData = async (e) => {
        e.preventDefault()
        let value = e.target.value
        return await axios.get(`https://employee-management-system-p6cz.onrender.com?_sort=${value}&_order=asc`)
            .then((resp) => {
                setData(resp.data)
            }).catch((error) => {
                alert(error)
            })
    }

    const [page, setPage] = useState(1)
    const [records, setRecords] = useState(5)

    let lr = page * records
    let fr = lr - records

    let myData = data.slice(fr, lr)

    const changePage = (n) => {
        setPage(n)
    }



    const changeEdit = (id) => {
        navigate("/edit/" + id)
    }


    const changeDelete = (id) => {
        fetch("https://employee-management-system-p6cz.onrender.com/" + id, {
            method: "DELETE"
        })
            .then(() => {
                alert("Deleted Successfully")
                window.location.reload()
            })
            .catch(() => {
                alert("Error")
            })
    }


    





    return (
        <div className="container">
            <div className="card" style={{ marginTop: "40px" }}>
                <div className="card-title">
                    <h1 style={{ textAlign: "center" }}>Employee List</h1>
                </div>

                <div className="card-body">
                    <div style={{ display: "flex", gap: "20px" }}>
                        <Link className="btn btn-success" to={"/form"}>Create Employee</Link>
                        <select style={{ borderRadius: "4px", borderColor:"lightgray" }} value={sort} onChange={sortData}>
                            <option value="">--Sort--</option>
                            {option.map((p) => (
                                <option>{p}</option>
                            ))}
                        </select>
                        <form onSubmit={searchData}>
                            <input type="text" value={value} onChange={search} style={{width:"700px", borderRadius:"4px", border:"1px solid lightgray"}} placeholder="Filter Records..." />
                            <button type="submit" style={{ borderRadius: "4px", borderColor:"lightgray"}} >Search</button>
                        </form>
                        <span><p style={{gap:"2px"}}><i class="fa-regular fa-user"></i>{u?.email}</p></span>
                        
                        <Link className="btn btn-danger" to={"/login"}>LOGOUT</Link>


                    </div>

                    
                    <table className="table table-bordered" style={{ marginTop: "40px" }}>
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>Unique Id</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile No</th>
                                <th>Designation</th>
                                <th>Gender</th>
                                <th>Course</th>
                                <th>Create Date</th>
                                <th>Action</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                           {myData && myData.map((item) => (
                                <tr key={item.id} style={{ textAlign: "center" }}>
                                    <td>{item.id}</td>
                                    <td><img style={{height:"200px", width:"200px"}} src={item.image}/></td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.course}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <td>{item.action}</td>
                                        <a onClick={() => { changeEdit(item.id) }} className="btn btn-primary" style={{margin:"10px"}}>Edit</a>
                                        <a onClick={() => { changeDelete(item.id) }} className="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>


                    </table>
                    <Pagination
                        total={data.length}
                        records={records}
                        update={changePage}
                    />




                </div>


            </div>


        </div>
    )
}


export default EmpData;

