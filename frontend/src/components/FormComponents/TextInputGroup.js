import React, {useState} from 'react';
import {Col, Form, InputGroup} from 'react-bootstrap';
import "../../styles/styles.css";

const TextInputGroup = ({label, controlId, inputGroupID, inputGroupSymbol, validationFunction, formSubmitted, input, setInput}) => {

  return (
    <Form.Group as={Col} md="3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <InputGroup.Text id={inputGroupID}>{inputGroupSymbol}</InputGroup.Text>
        <Form.Control 
          required 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          isValid={validationFunction(input) && formSubmitted}
          isInvalid={!validationFunction(input) && formSubmitted}
          type="text" 
          placeholder={label} 
          aria-describedby={inputGroupID} 
        />
        <Form.Control.Feedback type="invalid">Please enter a username.</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}

export default TextInputGroup;