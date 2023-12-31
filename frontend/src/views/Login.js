
import React, { useState } from 'react';
import { Cookies } from 'react-cookie';
import { Container, Card, Form, Row, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Title from "../components/Title/Title"
import TextInput from '../components/FormComponents/TextInput';
import PasswordInput from '../components/FormComponents/PasswordInput';
import useAuth from "../hooks/useAuth"
import axios from '../api/axiosConfig'
import "../styles/styles.css";

const cookies = new Cookies();

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const whereUserCameFrom = location.state?.from?.pathname || "/";

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateUsername = (username) => {
    return username.trim();
  }

  const validatePassword = (password) => {
    return password;
  }

  const handleSubmit =  async (event) => {
    event.preventDefault();
    const validPassword = validatePassword(password);
    const validUsername = validateUsername(username);

    setFormSubmitted(true);
    if (!validPassword || !validUsername) {
      return;
    }
    try {
      const response = await axios.post("api/auth/signin",
        JSON.stringify({username, password}),
        { 
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      cookies.set('jwtAccessToken', response.data.accessToken, { path: '/' });
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({username, roles, accessToken});
      console.log(response);
      navigate(whereUserCameFrom, {replace: true});
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <Container className="customContainer justify-content-md-center">
        <Card className="formCard mb-3">
          <Title title="Sign In" />
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="justify-content-md-center mb-3">
              <TextInput label="Email" controlId="customValidationEmail" validationFunction={validateUsername} formSubmitted={formSubmitted} errorText={"Please enter your email."} input={username} setInput={setUsername}/>
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
  );
};
  
export default Login;