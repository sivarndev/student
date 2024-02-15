import {
    CButton,
    CCard,
    CCardBody,   
    CCardTitle,   
  } from "@coreui/react";
import { Grid } from "@mui/material";
import { MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";  
import {Link} from "react-router-dom";
import {  FormText, Input, Label } from "reactstrap";
import CreateQuestion from "./CreateQuestion";
import Sidebar from "../sidebar/sidebar";  
  
const CreateAssignment = () => {
    const [assignmentTitle,setAssignmentTitle]=useState('');
    const [subject,setSubject]=useState('');
    const [className,setClassName]=useState('');
    const [totalmarks,setTotalmarks]=useState('');
    const [numberofques,setNumberofques]=useState('');
    const[show,setShow]=useState(false);
    const[errorassignm,setErrorassignm]=useState('');
    const [errorsubject,setErrorsubject]=useState('');
    const [errorclass,setErrorclass]=useState('');
    const [errormarks,setErrormarks]=useState('');
    const [errornumberofques,setErrornumberofques]=useState('');
    

   

  const handleClick = () => {      
      if (
        !assignmentTitle ||
        !subject ||
        !className ||
        !totalmarks ||
        !numberofques
      ) {        
        if (!assignmentTitle) setErrorassignm("Assignment title is required");
        else setErrorassignm("");
        if (!subject) setErrorsubject("Subject is required");
        else setErrorsubject("");
        if (!className) setErrorclass("Class is required");
        else setErrorclass("");
        if (!totalmarks) setErrormarks("Total marks is required");
        else setErrormarks("");
        if (!numberofques) setErrornumberofques("Number of questions is required");
        else setErrornumberofques("");
      } else {
           setShow(true);
      }
    }; 
    return (
      <>
      <Sidebar/>
   { show ? <CreateQuestion totalNumberOfQuestions={numberofques} assignmentTitle={assignmentTitle} subject={subject} className={className} totalMarks={totalmarks}/> : 
   <div className="support" style={{ width: '80.9vw', height: '98vh' }}>
        <CCard style={{ width: '100%', height: '100%' }}>
    <CCardBody>    
    <CCardTitle  style={{fontWeight:"bold"}}>    
      {/* <MDBIcon fas icon="angle-double-left" />    */}
        Create Assignments
    </CCardTitle>
      <hr style={{ padding: "5px"}} />
      <Grid container spacing={2} style={{padding:"2px",justifyContent: 'space-between' }} >
        <Grid Input xs="5">       
           <Label style={{fontWeight:"bold"}}>
                AssignmentTitle:
                </Label>
                <Input
                id="Assign"
                name="Assign"
                placeholder="Assignment Title"
                type="text"
                value={assignmentTitle}
                onChange={(e)=>setAssignmentTitle(e.target.value)}
                />
                {errorassignm ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errorassignm}
                  </FormText>
                ) : null}
            </Grid>
        <Grid Input xs="5">   
                <Label style={{fontWeight:"bold"}}>
                Subject:
                </Label>
                <Input
                id="Subject"
                name="Subject"
                placeholder="Subject"
                type="text"
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}
                />
                 {errorsubject ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errorsubject}
                  </FormText>
                ) : null}
            </Grid>       
     
    </Grid>
    <br></br>
    <Grid container spacing={2} style={{padding:"2px",justifyContent: 'space-between' }} >
        <Grid Input xs="5">       
           <Label style={{fontWeight:"bold"}}>
                Class:
                </Label>
                <Input
                id="Class"
                name="Class"
                placeholder="Class"
                type="Number"
                value={className}
                onChange={(e)=>setClassName(e.target.value)}
                />
                 {errorclass ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errorclass}
                  </FormText>
                ) : null}
            </Grid>
        <Grid Input xs="5">   
                <Label style={{fontWeight:"bold"}}>
                Total Marks:
                </Label>
                <Input
                id="totalmarks"
                name="totalmarks"
                placeholder="Totalmarks"
                type="text"
                value={totalmarks}
                onChange={(e)=>setTotalmarks(e.target.value)}
                />
                 {errormarks ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errormarks}
                  </FormText>
                ) : null}
            </Grid>
            <Grid Input xs="5">   
                <Label style={{fontWeight:"bold"}}>
                No.Of. QUestions:
                </Label>
                <Input
                id="Noques"
                name="Noques"
                placeholder="Number Of Questions"
                type="Number"
                value={numberofques}
                onChange={(e)=>setNumberofques(e.target.value)}               
                />
                 {errornumberofques ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errornumberofques}
                  </FormText>
                ) : null}
          </Grid>
     
    </Grid>
    <br></br>
      <CButton className="bottom-right-button" onClick={handleClick}>Next      
      <MDBIcon fas icon="angle-double-right" />
      </CButton>
    </CCardBody>
  
  </CCard>
  </div>
  }
    </>
    );
  };
  
  export default CreateAssignment;
  