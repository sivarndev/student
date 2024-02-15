import { CButton, CCard, CCardBody, CCardTitle, CFormSelect } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { AlldownloadPdf, assigndatadownloadPdf, classdownloadPdf,  getAllAssignments,  getAllUsers, studentdatadownloadPdf, subjectdownloadPdf } from '../../utility/ApiServices';
import Sidebar from '../sidebar/sidebar';
import { Input } from 'reactstrap';


export const PdfConverter = () => {
  const [downloading1, setDownloading1] = useState(false);
  const [downloading2, setDownloading2] = useState(false);
  const [downloading3, setDownloading3] = useState(false);
  const [downloading4, setDownloading4] = useState(false);
  const [downloading5, setDownloading5] = useState(false);
  const [subject, setSubject] = useState('');
  const [classes,setClasses]=useState('')
  const [assignmentid,SetAssignmentid]=useState('')
  const [studentid,SetStudentid]=useState('')
  const [student,SetStudent]=useState([])
  const[std,setStd]=useState('')
  const[assignments,setAssignments]=useState([])
  const [ass,setAss]=useState('')

  const usefundata = async()=>{
    let result = await getAllAssignments()
    setAssignments(result?.data?.data);
    let studentdata= await getAllUsers()
    SetStudent(studentdata?.data?.data);
  }
  //  console.log(student); 

  const handleDownload = async () => {
    setDownloading1(true);
    try {
      const { success, error } = await AlldownloadPdf();
      if (success) {
        console.log("Download");
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
    setDownloading1(false);
  };

  const handleDownloadsubject = async () => {
    setDownloading2(true);
    try {
      const { success,  error } = await subjectdownloadPdf(subject);
      if (success) {
        console.log("Download");
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
    setDownloading2(false);
    setSubject('')
  };
  const handleDownloadclass = async () => {
    setDownloading3(true);
    try {
      const { success,  error } = await classdownloadPdf(classes);
      if (success) {
        console.log("Download");
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
    setDownloading3(false);
    setClasses('')
  };
  const handleDownloadAssignment = async () => {
    setDownloading4(true);
    try {
      const { success,  error } = await assigndatadownloadPdf(assignmentid);
      if (success) {
        console.log("Download");
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
    setDownloading4(false);
    SetAssignmentid('')
    // setAssignments('')
  };

  const handleDownloadStudent = async () => {
    setDownloading5(true);
    try {
      const { success,  error } = await studentdatadownloadPdf(studentid);
      if (success) {
        console.log("Download");
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
    setDownloading5(false);
    SetStudentid('')
    // setStd('')
  };

 useEffect(()=>{
  usefundata()
 },[]);
  return (
    <>
      <Sidebar />
      <div className='events' style={{ display: 'flex', flexDirection: 'column' }}>
      <CCard style={{ width: '100%',height:"750px" }}>
    <CCardBody>    
    <CCardTitle style={{fontWeight:"bold"}}>           
            DownloadPdf
    </CCardTitle>
    <hr style={{ padding: "5px"}}></hr>
      <div>
      <p style={{fontWeight:"bold"}}>Do You Want All  Student Assignment list in Pdf Format..?</p>
            <CButton onClick={handleDownload} disabled={downloading1}>
              {downloading1 ? 'Downloading...' : 'Click Here'}
            </CButton>
      </div>          
      <div>
      <p style={{fontWeight:"bold"}}>Do You Want Subject Wise Report in Pdf Format..?</p>
            <Input value={subject} onChange={(e) => { setSubject(e.target.value) }} placeholder='Enter Subject' style={{width:"30%"}} />
            <br/>
            <CButton onClick={handleDownloadsubject} disabled={downloading2}>
              {downloading2 ? 'Downloading...' : 'Click Here'}
            </CButton>
      </div>
      <div>
      <p style={{fontWeight:"bold"}}>Do You Want Class Wise Report in Pdf Format..?</p>
            <Input value={classes} onChange={(e) => { setClasses(e.target.value) }} placeholder='Enter Class' style={{width:"30%"}} />
            <br/>
            <CButton onClick={handleDownloadclass} disabled={downloading3}>
              {downloading3 ? 'Downloading...' : 'Click Here'}
            </CButton>
      </div>
      <div>   
      <p style={{fontWeight:"bold"}}>Do You Want Assignment Wise Report in Pdf Format..?</p>    
        <CFormSelect         
          id="1"
          value={ass}          
          onChange={(e)=>{setAss(e.target.value)}}
          style={{width:"30%"}} >
          <option>Select the Assignment</option>
        {assignments?.map((item)=>
        ( 
          <option value={item?.assignmentTitle} onChange={(i)=>SetAssignmentid(item?._id)}>{item?.assignmentTitle}</option>
          )
          )
        }
        </CFormSelect>
        <br/>
            <CButton onClick={handleDownloadAssignment} disabled={downloading4}>
              {downloading4 ? 'Downloading...' : 'Click Here'}
            </CButton>
      </div>
      <div>   
      <p style={{fontWeight:"bold"}}>Do You Want Student Wise Report in Pdf Format..?</p>    
        <CFormSelect         
          id="2"
          value={std}          
          onChange={(e)=>{setStd(e.target.value)}}
          style={{width:"30%"}}
        >
          <option>Select the Student</option>
        {student?.map((item)=>
        ( 
        <option value={item?.name} onChange={(i)=>SetStudentid(item?._id)}>{item?.name}</option>
          )
          )
        }
        </CFormSelect>
        <br/>
            <CButton onClick={handleDownloadStudent} disabled={downloading5}>
              {downloading5 ? 'Downloading...' : 'Click Here'}
            </CButton>
      </div>
      
      </CCardBody>
  
  </CCard>
        </div>
    </>
  );
};
