import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import {Col, Form, InputGroup, Button} from 'react-bootstrap'
import "../../styles/styles.css"

const PasswordInput = ({label, controlId, errorText, validationFunction, formSubmitted, password, setPassword}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <Form.Group as={Col} md="3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation >
        <Form.Control 
          className="rounded-left" 
          required
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          isValid={validationFunction(password) && formSubmitted}
          isInvalid={!validationFunction(password) && formSubmitted}
          type={passwordShown ? "text" : "password"} 
          autoComplete="on"
          placeholder={label} 
        />
        <Button className="hidePasswordButton" variant="outline-secondary" onClick={togglePassword}>{passwordShown ? <AiFillEye size={18} /> : <AiFillEyeInvisible size={18}/>}</Button>
        <Form.Control.Feedback type="invalid">{errorText}</Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}

export default PasswordInput;