import {
    CButton,
    CCard,
    CCardBody,   
    CCardTitle,
  } from "@coreui/react";
import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../utility/ApiServices";
import Sidebar from "../sidebar/sidebar";
import {Createbuttton} from "../context/context";
import { AutoSizer, List } from "react-virtualized";

const Student = () => {     
 let context=useContext(Createbuttton)
 console.log(context);
    const [student, setStudent] = useState([]);
    const getallusers = async () => {
      let student = await getAllUsers();
      console.log(student.data.data);
      if (!student.ok) {
        return console.log(student.data.message);
      }
      setStudent(student.data.data);
    };  
    useEffect(() => {
      getallusers();
    }, []);     
return (
    <>
    <Sidebar/>
      <div className="support" style={{ width: "80.9vw", height: "100vh" }}>
        <CCard style={{ width: "100%" }}>
          <CCardBody>
            <CCardTitle style={{ fontWeight: "bold" }}>Student</CCardTitle>
            <hr style={{ padding: "5px"}} />
            {context.isFaculty?<Link to="/createStudent">
              <CButton className="top-right-button">Create</CButton>
            </Link>:null}
            <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={600}
                rowHeight={120}
                rowRenderer={({ index, key, style }) => {
                  const item = student[index];
                  return (
                    <div key={key} style={style}>
              <Box display="flex" flexDirection="column" alignItems="center" p={1} border={1} key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box mb={2} display="flex">
                      <Typography style={{ fontWeight: 'bold' }}>
                        Name: {item.name || '--'}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box mb={2} display="flex">
                    <Typography style={{ fontWeight: 'bold' }}>
                        Email: {item.email || '--'}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box mb={2} display="flex">
                      <Typography style={{ fontWeight: 'bold' }}>Class: {item.class || '--'}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box mb={2} display="flex">
                    <Typography style={{ fontWeight: 'bold' }}>
                        No.Of.Assignments: {item.assignments.length || '0'}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>                 
              </Box>
              </div>
                  );
                }}
                rowCount={student.length}
              />
            )}
          </AutoSizer>
          </CCardBody>
        </CCard>
      </div>
    </>
  );
  };
  
  export default Student;
  