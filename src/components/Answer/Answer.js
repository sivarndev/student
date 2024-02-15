import { CButton, CCard, CCardBody, CCardTitle, CFormSelect } from '@coreui/react'
import { Box, Grid, Select } from '@mui/material'
import { MDBIcon } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Label } from 'reactstrap'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { AttenAnswer } from '../../utility/ApiServices'
import { Toaster, toast } from 'react-hot-toast'
import Sidebar from '../sidebar/sidebar'

export const AnswerSheet = ({ data, id }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});


  useEffect(() => {
    setQuestions(id.assignment.question);
  }, [id]);
 console.log(data);
  const handleOptionChange = (questionNo, answer) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionNo]: answer,
    }));
  };

  const handleSubmit = async () => {
    try {
      const dataToSend = {
        answers: Object.entries(selectedAnswers).map(([questionNo, answer]) => ({
          questionNo: parseInt(questionNo), 
          answer: answer,
        })),
      };
  
      let response = await AttenAnswer(id.assignment._id, dataToSend);
      if (!response.ok) {
        return toast.error("An error occurred");
      }
      toast.success("Atten Answer")
      setSelectedAnswers({});
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
    <Sidebar/>
      <div className="contact" style={{ width: '80.9vw', height: '98vh' }}>
        <CCard style={{ width: '100%', height: '100%' }}>
          <CCardBody>
            <CCardTitle style={{ fontWeight: 'bold' }}>
              <Link to="/AttenAssignment">
                <MDBIcon fas icon="angle-double-left" />
              </Link>
              Answer Sheet
            </CCardTitle>
            <hr style={{ padding: '5px', borderWidth: '2px' }} />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              p={2}
            >
              {questions.map((item) => (
                <Grid
                  container
                  spacing={2}
                  style={{ padding: '2px', justifyContent: 'space-between' }}
                  key={item._id}
                >
                  <Grid xs="5">
                    <FormControl component="fieldset">
                      <Label style={{ fontWeight: 'bold' }}>
                        {item.questionNo}.{item.question}
                      </Label>
                      <p></p>
                      <></>
                      <RadioGroup
                        value={selectedAnswers[item.questionNo] || ''}
                        onChange={(e) =>
                          handleOptionChange(
                            item.questionNo,
                            e.target.value
                          )
                        }
                      >
                        {item.options.map((option) => (
                          <>
                          <FormControlLabel
                            key={option.optionNo}
                            value={option.optionAns}
                            control={<Radio />}
                            label={option.optionAns}
                          />
                          <br/>
                          </>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              ))}
              <br />

              <CButton style={{ flex: 'end' }} onClick={handleSubmit}>
                Submit
              </CButton>
            </Box>
            <Toaster/>
          </CCardBody>
        </CCard>
      </div>
    </>
  );
};
