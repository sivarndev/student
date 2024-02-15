import { CButton, CCard, CCardBody, CCardTitle } from '@coreui/react'
import { Box, Grid,  Typography } from '@mui/material'
import { MDBIcon } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { viewAllstudentAssignments } from '../../utility/ApiServices'
import { AnswerSheet } from './Answer'
import Sidebar from '../sidebar/sidebar'
export const AttenAssignment = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);
  
  const [open, setOpen] = useState(false);
  // const handle = () => {
  //   setOpen(!open);
  // };
  const AttenAssign = async () => {
    let Assign = await viewAllstudentAssignments();
    console.log(Assign);
    if (!Assign.ok) {
      return console.log(Assign.data.message);
    }
    setData(Assign.data.data);
  };
  useEffect(() => {
    AttenAssign();
  }, []);   
  const handleClick =(data) => {
     setId(data)
    setOpen(true);    
  };  
  console.log(id);
  return (
    <>
    <Sidebar/>
      {open ? (
        <AnswerSheet data={data} id={id} />
      ) : (
        <div className="reports" style={{ width: '80.9vw', height: '98vh' }}>
          <CCard style={{ width: '100%', height: '720px' }}>
            <CCardBody>
              <CCardTitle style={{ fontWeight: 'bold' }}>AttenAssignment</CCardTitle>
              <hr style={{ padding: '5px', borderWidth: '2px' }} />
              {data.map((item, index) => (
                <>
                <Box display="flex" flexDirection="column" alignItems="center" p={2} border={1} key={index}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box mb={2} display="flex">
                        <Typography style={{ fontWeight: 'bold' }}>
                          Assignment: {item.assignment.assignmentTitle || '--'}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box mb={2} display="flex">
                        <Typography style={{ fontWeight: 'bold' }}>Subject: {item.assignment.subject || '--'}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box mb={2} display="flex">
                        <Typography style={{ fontWeight: 'bold' }}>Class: {item.assignment.class || '--'}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box mb={2} display="flex">
                        <Typography style={{ fontWeight: 'bold' }}>
                          TotalMarks: {item.assignment.totalMarks || '--'}
                        </Typography>
                      </Box>
                    </Grid>
                    {item?.scoredMarks !== 0 ?
                    <Grid item xs={12} md={6}>
                      <Box mb={2} display="flex">
                        <Typography style={{ fontWeight: 'bold' }}>
                          ScoredMarks: {item.scoredMarks || '--'}
                        </Typography>
                      </Box>
                    </Grid>:null}
                  </Grid>
                  <br></br>
                  {item?.answers?.length === 0 ?<CButton style={{ alignSelf: 'end' }} onClick={()=>handleClick(item)}>
                    Atten <MDBIcon fas icon="angle-double-right" />
                  </CButton>:null}
                </Box>
                <br/>
                </>
              ))}
            </CCardBody>
          </CCard>
        </div>
      )}
    </>
  );
};
