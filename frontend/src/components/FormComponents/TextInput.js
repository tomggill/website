import React from 'react';
import {Col, Form} from 'react-bootstrap';
import "../../styles/styles.css";

const TextInput = ({label, controlId, errorText = "", validationFunction, formSubmitted = true, input, setInput}) => {
  const isValidProp = validationFunction ? { isValid: validationFunction(input) && formSubmitted} : {};
  const isInvalidPop = validationFunction ? { isInvalid: !validationFunction(input) && formSubmitted} : {};

  return (
    <Form.Group as={Col} md="3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        required
        className="customTextBox"
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        {...isValidProp}
        {...isInvalidPop}
        type="text"
        placeholder={label}
      />
      <Form.Control.Feedback type="invalid">{errorText}</Form.Control.Feedback>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
  );
}

export default TextInput;