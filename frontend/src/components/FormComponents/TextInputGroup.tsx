import React from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';
import '../../styles/styles.css';

interface TextInputGroupProps {
  label: string;
  controlId: string;
  inputGroupId: string;
  inputGroupSymbol: string;
  validationFunction: (text: string) => boolean;
  formSubmitted: boolean;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}
function TextInputGroup(props: TextInputGroupProps) {
  const {
    controlId, label, inputGroupId, inputGroupSymbol,
    validationFunction, formSubmitted, input, setInput,
  } = props;
  return (
    <Form.Group as={Col} md="3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <InputGroup.Text id={inputGroupId}>{inputGroupSymbol}</InputGroup.Text>
        <Form.Control
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          isValid={validationFunction(input) && formSubmitted}
          isInvalid={!validationFunction(input) && formSubmitted}
          type="text"
          placeholder={label}
          aria-describedby={inputGroupId}
        />
        <Form.Control.Feedback type="invalid">Please enter a username.</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}

export default TextInputGroup;
