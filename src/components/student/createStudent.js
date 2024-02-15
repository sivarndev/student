import { CButton, CCard, CCardBody, CCardTitle } from '@coreui/react';
import React, { useContext, useState } from 'react';
import { Col, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
import { Link } from "react-router-dom";
import { MDBIcon } from 'mdb-react-ui-kit';
import { createUser } from '../../utility/ApiServices';
import { Toaster, toast } from 'react-hot-toast';
import Sidebar from '../sidebar/sidebar';

export const CreateStudent = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [classNo, setClassNo] = useState('');
 const [errorName, setErrorName] = useState('');
 const [errorEmail, setErrorEmail] = useState('');
 const [errorPassword, setErrorPassword] = useState('');
 const [errorClass, setErrorClass] = useState('');


  const handleSubmit = async () => {    
    if (!name || !email || !password || !classNo) {      
      if (!name) setErrorName("Name is required");
      else setErrorName("");
      if (!email) setErrorEmail("Email is required");
      else setErrorEmail("");
      if (!password) setErrorPassword("Password is required");
      else setErrorPassword("");
      if (!classNo) setErrorClass("Class is required");
      else setErrorClass("");
      return;
    }
      let result = await createUser({
      name: name,
      email: email,
      password: password,
      class: classNo
    });
    if (!result.ok) {
      toast.error("Error creating user");
    } else {
      toast.success("Student created successfully");
      setName("");
      setEmail("");
      setPassword("");
      setClassNo("");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="support" style={{ width: '80.9vw', height: '98vh' }}>
        <CCard style={{ width: '100%', height: '100%' }}>
          <CCardBody>
            <CCardTitle style={{ fontWeight: "bold" }}>
              <Link to="/Student">
                <MDBIcon fas icon="angle-double-left" />
              </Link>
              CreateStudent
            </CCardTitle>
            <hr style={{ padding: "5px" }}></hr>
            <Form>
              <Row style={{ justifyContent: "space-between", padding: "5px" }}>
                <Col md={4} className="CreateEmpInpCon"  >
                  <FormGroup>
                    <Label>
                      Name{" "}
                      <span
                        style={{
                          paddingLeft: "5px",
                          color: "red",
                          fontSize: "15px",
                        }}
                      >
                          *
                      </span>
                    </Label>
                    <Input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => { setName(e.target.value) }}
                    />
                    {errorName ? (
                      <FormText
                        style={{
                          paddingLeft: "14px",
                          color: "red",
                          fontSize: "14px",
                        }}
                        color="red"
                      >
                        {errorName}
                      </FormText>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={4} className="CreateEmpInpCon"   >
                  <FormGroup>
                    <Label>
                      Email{" "}
                      <span
                        style={{
                          paddingLeft: "5px",
                          color: "red",
                          fontSize: "15px",
                        }}
                      >
                        *
                      </span>
                    </Label>
                    <Input
                      type="text"
                      name="Email"
                      id="Email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                    />
                    {errorEmail ? (
                      <FormText
                        style={{
                          paddingLeft: "14px",
                          color: "red",
                          fontSize: "14px",
                        }}
                        color="red"
                      >
                        {errorEmail}
                      </FormText>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={4} className="CreateEmpInpCon"  >
                  <FormGroup>
                    <Label>
                      Password{" "}
                      <span
                        style={{
                          paddingLeft: "5px",
                          color: "red",
                          fontSize: "15px",
                        }}
                      >
                        *
                      </span>
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      style={{ textTransform: "lowercase" }}
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                    />
                    {errorPassword ? (
                      <FormText
                        style={{
                          paddingLeft: "14px",
                          color: "red",
                          fontSize: "14px",
                        }}
                        color="red"
                      >
                        {errorPassword}
                      </FormText>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6} className="CreateEmpInpCon"  >
                  <FormGroup>
                    <Label>
                      Class{" "}
                      <span
                        style={{
                          paddingLeft: "5px",
                          color: "red",
                          fontSize: "15px",
                        }}
                      >
                        *
                      </span>
                    </Label>
                    <Input
                      type="Number"
                      name="Class"
                      id="Class"
                      placeholder="Class"
                      value={classNo}
                      onChange={(e) => { setClassNo(e.target.value) }}
                    />
                    {errorClass ? (
                      <FormText
                        style={{
                          paddingLeft: "14px",
                          color: "red",
                          fontSize: "14px",
                        }}
                        color="red"
                      >
                        {errorClass}
                      </FormText>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <br></br>
              <CButton onClick={handleSubmit}>Submit</CButton>
            </Form>
            <Toaster />
          </CCardBody>
        </CCard>
      </div>
    </>
  );
};
