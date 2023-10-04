import React, { useState } from 'react';
import {Col, Form} from 'react-bootstrap';
import "../../styles/styles.css";

const TextInput = ({label, controlId, errorText, validationFunction, formSubmitted, input, setInput}) => {

  return (
    <Form.Group as={Col} md="3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        required
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        isValid={validationFunction(input) && formSubmitted}
        isInvalid={!validationFunction(input) && formSubmitted}
        type="text"
        placeholder={label}
      />
      <Form.Control.Feedback type="invalid">{errorText}</Form.Control.Feedback>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
  );
}

export default TextInput;