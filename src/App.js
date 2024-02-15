import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateStudent } from "./components/student/createStudent";
import Assignment from "./components/assignments/Assignment";
import CreateAssignment from "./components/assignments/CreateAssignment";
import CreateQuestion from "./components/assignments/CreateQuestion";
import Student from "./components/student/student";
import { AnswerSheet } from "./components/Answer/Answer";
import Login from "./pages/login";
import { AttenAssignment } from "./components/Answer/AttenAssignments";
import { PdfConverter } from "./components/student/pdfDownloader";
import { useContext, useEffect } from "react";
import {Createbuttton} from "./components/context/context";
import { getUserProfile } from "./utility/ApiServices";
function App() {
    let context=useContext(Createbuttton)
    const Acessbutton =async () => {
        let result = await getUserProfile()
        // console.log(result?.data?.data?.isFaculty)
        context.isFaculty = result?.data?.data?.isFaculty
    }
    useEffect(()=>{
        // console.log(context);
        Acessbutton()

},[])
   
return (
	<Router>
	{/* <Sidebar /> */}
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<CreateStudent />} />
                <Route path="/Assignment" element={<Assignment />} />
                <Route path="/createAssignment" element={<CreateAssignment/>} />
                <Route path="/createQuestion" element={<CreateQuestion />} />
                <Route path="/Student" element={<Student />} />
                <Route path="/createStudent" element={<CreateStudent />} />
                <Route path="/AttenAssignment" element={<AttenAssignment />} />
                <Route path="/Answer" element={<AnswerSheet />} />
                <Route path="/downloadpdf" element={<PdfConverter />} />
            </Routes>
	</Router>
);
}
export default App;
