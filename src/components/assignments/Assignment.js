import {
    CButton,
    CCard,
    CCardBody,  
    CCardTitle,  
  } from "@coreui/react"; 
import React, { useContext, useEffect, useState } from "react";  
import { Link } from "react-router-dom";
import { getAllAssignments } from "../../utility/ApiServices";
import { Box, Grid, Typography } from "@mui/material";
import Sidebar from "../sidebar/sidebar";
import {Createbuttton} from "../context/context";
import { List, AutoSizer } from 'react-virtualized';
  
const Assignment = () => {
  let context=useContext(Createbuttton)
  console.log(context);
    const [data, setData] = useState([]);
    const AttenAssign = async () => {
      let Assign = await getAllAssignments();
      console.log(Assign.data.data);
      if (!Assign.ok) {
        return console.log(Assign.data.message);
      }
      setData(Assign.data.data);
    };
  
  useEffect(() => {
      AttenAssign();
    }, []);  
    
    return (
      <>
      <Sidebar />
        <div className="support" style={{ width: "80.9vw", height: "90vh" }}>
          <CCard style={{ width: "100%", height: "718px" }}>
            <CCardBody>
              <CCardTitle style={{ fontWeight: "bold" }}>Assignments</CCardTitle>
              <hr style={{ padding: "5px"}} />  
             {context.isFaculty? <Link to="/createAssignment">
                <CButton className="top-right-button">Create</CButton>
              </Link>:null}
              <AutoSizer>
              {({ width, height }) => (
                <List
                  width={width}
                  height={600}
                  rowHeight={120}
                  rowRenderer={({ index, key, style }) => {
                    const item = data[index];
                    return (
                      <div key={key} style={style}>
                        <Box display="flex" flexDirection="column" alignItems="center" p={1} border={1}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <Box mb={2} display="flex">
                                <Typography style={{ fontWeight: 'bold' }}>
                                  Assignment: {item.assignmentTitle || '--'}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box mb={2} display="flex">
                                <Typography style={{ fontWeight: 'bold' }}>Subject: {item.subject || '--'}</Typography>
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
                                  Totalmarks: {item.totalMarks || '--'}
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                        <br />
                      </div>
                    );
                  }}
                  rowCount={data.length}
                />
              )}
            </AutoSizer>
            </CCardBody>
          </CCard>
        </div>
      </>
    );
  };
  
  export default Assignment;
  