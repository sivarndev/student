import React, { useEffect, useState } from 'react';
import { CButton, CCard, CCardBody, CCardTitle } from '@coreui/react';
import { Grid } from '@mui/material';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Input, Label } from 'reactstrap';
import { createQues } from '../../utility/ApiServices';
import { Toaster, toast } from 'react-hot-toast';
import Sidebar from '../sidebar/sidebar';

function CreateQuestion({ totalNumberOfQuestions,assignmentTitle,subject,className,totalMarks }) {
  const [questions, setQuestions] = useState([]); 
   
  const handleQuestionChange = (index, field, value) => {
    const updQUes = [...questions];
    updQUes[index][field] = value;
    updQUes[index].questionNo = index + 1; 
    setQuestions(updQUes);
  };

  const handleOptionChange = (questionIndex, optionIndex, field, value) => {
    const updQUes = [...questions];
    updQUes[questionIndex].options[optionIndex][field] = value;
    setQuestions(updQUes);
  };

  const handleMarkChange = (index, value) => {
    const updQUes = [...questions];
    updQUes[index].markForThisQuestion = value;
    setQuestions(updQUes);
  };
  const handleAnswerchange = (index, value) => {
    const updQUes = [...questions];
    updQUes[index].answer = value;
    setQuestions(updQUes);
  };

  const handleSubmit = async () => {
    const hasMissingAnswer = questions.some(question => question.answer.trim() === '');
  
    if (hasMissingAnswer) {
      toast.error('Please provide an answer for each question.');
      return;
    }
  
    let result = await createQues({
      totalQuestion: totalNumberOfQuestions,
      assignmentTitle: assignmentTitle,
      subject: subject,
      question: questions.map((question, index) => ({
        ...question,
        questionNo: index + 1,
      })),
      class: className,
      totalMarks: totalMarks,
    });
    if(!result.ok){
        toast.error("Assignment Created Failed")
    }
    toast.success("Assignment added successfully")
    
  };
  
  
  useEffect(() => {
  
    const initialQuestions = Array.from({ length: totalNumberOfQuestions }, () => ({
      questionNo: '',
      question: '',
      options: [{ optionNo: '', optionAns: '' }],
      answer: '',
      markForThisQuestion: ''
    }));
    setQuestions(initialQuestions);
  }, [totalNumberOfQuestions]);

  return (
    <>
    <Sidebar/>
      <div className="support" style={{ width: '80.9vw', height: '98vh' }}>
        <CCard style={{ width: '100%', height: '100%' }}>
          <CCardBody>
            <CCardTitle style={{ fontWeight: 'bold' }}>
              <Link to="/createAssignment">
                <MDBIcon fas icon="angle-double-left" />
              </Link>
              Create Questions
            </CCardTitle>
            <hr style={{ padding: '5px' }} />

            {questions.map((question, index) => (
              <div key={index}>
                <Grid container spacing={1} style={{ padding: '2px', justifyContent: 'space-between' }}>
                
                  <Grid item xs={12}  >
                  <Label style={{ fontWeight: 'bold' }}>Question:{index + 1}</Label>
                    <Input
                      id={`Question_${index}`}
                      name={`Question_${index}`}
                      placeholder="Question"
                      type="text"
                      value={question.question}
                      onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                    />
                  </Grid>                
                </Grid>

                {question.options.map((option, optionIndex) => (
                  <Grid container spacing={2} style={{ padding: '2px', justifyContent: 'space-between' }} key={optionIndex}>
                    <Grid item xs={5}>
                      <Label style={{ fontWeight: 'bold' }}>Option No:</Label>
                      <Input
                        id={`OptionNo_${index}_${optionIndex}`}
                        name={`OptionNo_${index}_${optionIndex}`}
                        placeholder="Option Number"
                        type="Number"
                        value={option.optionNo}
                        onChange={(e) => handleOptionChange(index, optionIndex, 'optionNo', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Label style={{ fontWeight: 'bold' }}>Option:</Label>
                      <Input
                        id={`Answer_${index}_${optionIndex}`}
                        name={`Answer_${index}_${optionIndex}`}
                        placeholder="Answer"
                        type="text"
                        value={option.optionAns}
                        onChange={(e) => handleOptionChange(index, optionIndex, 'optionAns', e.target.value)}
                      />                      
                    </Grid>
                    
                  </Grid>
                ))}
                <Grid container spacing={2} style={{ padding: '2px', justifyContent: 'space-between' }}>
                  <Grid item xs={5}>
                    <Label style={{ fontWeight: 'bold' }}>Correct Answer:</Label>
                    <Input
                      id={`Mark_${index}`}
                      name={`Mark_${index}`}
                      placeholder="Correct Answer"
                      type="text"
                      value={question.answer}
                      onChange={(e) => handleAnswerchange(index, e.target.value)}
                    />
                  </Grid>
               
                  <Grid item xs={5}>
                    <Label style={{ fontWeight: 'bold' }}>Mark for This Question:</Label>
                    <Input
                      id={`Mark_${index}`}
                      name={`Mark_${index}`}
                      placeholder="Mark for This Question"
                      type="number"
                      value={question.markForThisQuestion}
                      onChange={(e) => handleMarkChange(index, e.target.value)}
                    />
                  </Grid>
                </Grid>
                <CButton onClick={() => handleQuestionChange(index, 'options', [...question.options, { optionNo: '', optionAns: '' }])}>
                  Add Option
                </CButton>
              </div>
            ))}
            <br />          
            <CButton className="bottom-right-button" onClick={handleSubmit}>Submit</CButton>
          <Toaster/>
          </CCardBody>
        </CCard>
      </div>
    </>
  );
}

export default CreateQuestion;
