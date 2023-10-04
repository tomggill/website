import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api/axiosConfig';
import PasswordInput from '../components/FormComponents/PasswordInput';
import TextInput from '../components/FormComponents/TextInput';
import TextInputGroup from '../components/FormComponents/TextInputGroup';
import Title from "../components/Title/Title";
import "../styles/styles.css";
import { EMAIL_REGEX, PASSWORD_REGEX } from '../utils/regex';

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validPassword = validatePassword(password);
    const validConfirmPassword = validateConfirmPassword(confirmPassword);
    const validEmail = validateEmail(email);
    const validFirstName = validateName(firstName);
    const validLastName = validateName(lastName);
    const validUserName = validateUserName(userName);

    setFormSubmitted(true);
    if (!validPassword || !validEmail || !validConfirmPassword || !validFirstName || !validLastName || !validUserName) {
      return;
    }
    try {
      const response = await api.post("api/user-entries/create",
        JSON.stringify({firstName, lastName, userName, password, email}),
        {
          headers: {'Content-Type': 'application/json'}
        }
      );
      setSuccess(true);
      console.log(JSON.stringify(response));
    } catch (error) {
      console.log(error);
    }
  };

  const validateName = (name) => {
    return (name.trim().length >= 2);
  };

  const validateUserName = (userName) => {
    return (userName.trim().length >= 3);
  };

  const validateEmail = (email) => {
    return EMAIL_REGEX.test(email);
  };

  const validatePassword = (password) => {
    return PASSWORD_REGEX.test(password);
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  }

  return (
    <>
    {success ? (
      <Container className="registerContainer justify-content-md-center">
        <Card className="formCard mb-3">
          <Title title="Your account has been registered!"/>
          <Row className="justify-content-md-center mb-3">
            <Link className="loginButton" md="2" to="/login">Login</Link>
          </Row>
        </Card>
      </Container>
    ) : (
    <Container className="registerContainer justify-content-md-center">
      <Card className="formCard mb-3">
        <Title title="Create an Account" />
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="justify-content-md-center mb-3">
            <TextInput label="First Name" controlId="customValidationFirstName" errorText={"Please enter a valid first name."} validationFunction={validateName} formSubmitted={formSubmitted} input={firstName} setInput={setFirstName}/>
            <TextInput label="Last Name" controlId="customValidationLastName" errorText={"Please enter a valid last name."} validationFunction={validateName} formSubmitted={formSubmitted} input={lastName} setInput={setLastName}/>
            <TextInputGroup label="Username" controlId="customValidationUsername" inputGroupID="inputGroupAtPrepend" inputGroupSymbol="@" validationFunction={validateUserName} formSubmitted={formSubmitted} input={userName} setInput={setUserName}/>
          </Row>
          <Row className="justify-content-md-center mb-3">
            <TextInput label="Email" controlId="customValidationEmail" errorText={"Please enter a valid email."} validationFunction={validateEmail} formSubmitted={formSubmitted} input={email} setInput={setEmail}/>
            <PasswordInput label="Password" controlId="customValidationPassword" errorText="Your password must contain at least 8 characters, one uppercase letter, one number, and one special character." validationFunction={validatePassword} formSubmitted={formSubmitted} password={password} setPassword={setPassword}/>
            <PasswordInput label="Confirm Password" controlId="customValidationConfirmPassword" errorText="Both passwords must match" validationFunction={validateConfirmPassword} formSubmitted={formSubmitted} password={confirmPassword} setPassword={setConfirmPassword}/>
          </Row>
          <Row className="justify-content-md-center mb-3">
            <Button className="registerButton" md="2" type="submit" >Register</Button>
          </Row>
        </Form>
      </Card>
    </Container>
    )}
    </>
  );
};
  
export default Register;