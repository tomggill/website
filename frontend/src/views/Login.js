
import React, { useState, useContext } from 'react';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Title from "../components/Title/Title"
import TextInput from '../components/FormComponents/TextInput';
import PasswordInput from '../components/FormComponents/PasswordInput';
import AuthContext from '../context/AuthProvider';
import axios from '../api/axiosConfig'
import "../styles/styles.css";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const [success, setSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    return email.trim();
  }

  const validatePassword = (password) => {
    return password;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validPassword = validatePassword(password);
    const validEmail = validateEmail(email);

    setFormSubmitted(true);
    if (!validPassword || !validEmail) {
      return;
    }
    setSuccess(true);
  };

  return (
    <>
    {success ? (
      <Container className="customContainer justify-content-md-center">
        <Card className="formCard mb-3">
          <Title title="You are logged in!"/>
          <Row className="justify-content-md-center mb-3">
            <Link className="redirectLink line" to="/">Go to Home</Link>
          </Row>
        </Card>
      </Container>
    ) : (
      <Container className="customContainer justify-content-md-center">
        <Card className="formCard mb-3">
          <Title title="Sign In" />
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="justify-content-md-center mb-3">
              <TextInput label="Email" controlId="customValidationEmail" validationFunction={validateEmail} formSubmitted={formSubmitted} errorText={"Please enter your email."} input={email} setInput={setEmail}/>
              <PasswordInput label="Password" controlId="customValidationPassword" validationFunction={validatePassword} formSubmitted={formSubmitted} errorText={"Please enter your password."} password={password} setPassword={setPassword}/>
              {/* <Button className="signInButton" md="3" type="submit" >Sign In</Button> */}
            </Row>
            <Row className="justify-content-md-center mb-3">
              <Button className="signInButton" md="2" type="submit" >Sign In</Button>
            </Row>
          </Form>
          <Row className="justify-content-md-center mb-3">
            <p style={{textAlign: "center", marginBottom: "0"}}>Need an account?</p>
            <Link className="redirectLink line" to="/register">Register</Link>
          </Row>
        </Card>
      </Container>
    )}
    </>
  );
};
  
export default Login;