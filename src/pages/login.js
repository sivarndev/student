import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn,  MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { Col, FormText, Input, Label, Row } from 'reactstrap';
import { StudentLogin } from '../utility/ApiServices';
import { Toaster, toast } from 'react-hot-toast';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erroremail,setErroremail] = useState('');
  const [errorpassword,setErrorpassword] = useState('');
const navigate =useNavigate()
const handleSubmit= async ()=>{
  let Data= await StudentLogin({
  email: email,
  password: password

}) 
if(!Data?.ok) { 
  return toast.error("Invalid credentials")
}
else if (!email){
  setErroremail("Please enter your email address")
}else if (!password){
  setErrorpassword("Please enter your password")
}
 else{
  toast.success("Success")
  localStorage.setItem("token", JSON.stringify(Data?.data?.token));
   navigate('/Assignment')  
      console.log(Data)
 }
 
}
  return (
    <>
    
    <div className='area'   >
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>   
        {/* <MDBCol col='10' md='6' >
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Sample image" />
        </MDBCol> */}
        
        <div  style={{marginTop:"150px"}}>
        {/* <div  style={{backgroundColor:"whitesmoke",borderRadius:"10px",marginTop:"80px"}}> */}
          <Row  >
          <Col xs="6"    >
            <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg' alt='Gokila'style={{height:"85%",width:"85%"}} ></img>
            </Col>
            <Col xs="6">
          <h4 style={{fontWeight:"bold",fontSize:"50px",marginTop:"20px",color:"whitesmoke"}}>Login To Your Account !!!</h4>
          <Label style={{color:"whitesmoke"}}>Email</Label>
          <Col sm={10}>
          <Input  type="email" name="email" id="Email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          {erroremail ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {erroremail}
                  </FormText>
                ) : null}
                </Col>
          <Label style={{color:"whitesmoke"}} >Password</Label>
          <Col sm={10}>
          <Input  type="password" name="password" id="Password" placeholder="password " value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          {errorpassword ? (
                  <FormText
                    style={{
                      paddingLeft: "14px",
                      color: "red",
                      fontSize: "14px",
                    }}
                    color="red"
                  >
                    {errorpassword}
                  </FormText>
                ) : null}
            <a href="!#" style={{color:"whitesmoke"}}>Forgot password?</a>
                </Col>
          {/* <div className="d-flex justify-content-between mb-3">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          </div> */}

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-4 px-5" size='lg' color='white' onClick={handleSubmit}>Login</MDBBtn>
            
          </div>
          </Col>
          </Row>
        </div>

     
     <Toaster/>
    
    </ul>
    </div>
    </>
  );
}

export default App;