import React, { useState, useEffect } from 'react';
import {
  Container, Card, Form, Row, Col, Button, FormCheck,
} from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Title from '../components/Title/Title';
import TextInput from '../components/FormComponents/TextInput';
import PasswordInput from '../components/FormComponents/PasswordInput';
import useAuth from '../hooks/useAuth';
import axios from '../api/axiosConfig';
import '../styles/styles.css';

function Login() {
  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const whereUserCameFrom = location.state?.from?.pathname || '/';

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateUsername = (usernameToCheck: string) => usernameToCheck.trim() !== '';

  const validatePassword = (passwordToCheck: string) => passwordToCheck !== '';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validPassword = validatePassword(password);
    const validUsername = validateUsername(username);

    setFormSubmitted(true);
    if (!validPassword || !validUsername) {
      return;
    }
    try {
      const response = await axios.post('/api/auth/signin', JSON.stringify({ username, password }));
      console.log(response);
      const accessToken: string = response?.data?.accessToken;
      setAuth({ username, accessToken });
      navigate(whereUserCameFrom, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem('persist', String(persist));
  }, [persist]);

  return (
    <Container className="customContainer justify-content-md-center">
      <Card className="formCard mb-3">
        <Title title="Sign In" />
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="customRowClass mb-3">
            <TextInput label="Email" controlId="customValidationEmail" validationFunction={validateUsername} formSubmitted={formSubmitted} errorText="Please enter your email." input={username} setInput={setUsername} />
            <PasswordInput label="Password" controlId="customValidationPassword" validationFunction={validatePassword} formSubmitted={formSubmitted} errorText="Please enter your password." password={password} setPassword={setPassword} />
          </Row>
          <Row className="customRowClass mb-3">
            <Col md="3">
              <FormCheck reverse className="persistCheck" type="switch" label="Trust this device?" onChange={togglePersist} checked={persist} />
            </Col>
          </Row>
          <Row className="customRowClass mb-3">
            <Button className="signInButton justify-content-md-center" type="submit">Sign In</Button>
          </Row>
        </Form>
        <Row className="customRowClass mb-3">
          <p style={{ textAlign: 'center', marginBottom: '0' }}>Need an account?</p>
          <Link className="redirectLink line" to="/register">Register</Link>
        </Row>
      </Card>
    </Container>
  );
}

export default Login;
