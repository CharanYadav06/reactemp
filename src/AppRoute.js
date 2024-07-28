

import EmpData from "./EmpData";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import EmpEdit from "./EmpEdit";
import EmpForm from "./EmpForm";
import EmpRegister from "./Authentication/EmpRegister";
import EmpLogin from "./Authentication/EmpLogin";


function AppRoute(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/a" element={<EmpData/>}/>
                    <Route path="/form" element={<EmpForm/>}/>
                    <Route path="/edit/:stid" element={<EmpEdit/>}/>
                    <Route path="/" element={<EmpRegister/>}/>
                    <Route path="/login" element={<EmpLogin/>}/>
                    
                </Routes>
            </Router>

        </div>
    )

    
}

export default AppRoute;
