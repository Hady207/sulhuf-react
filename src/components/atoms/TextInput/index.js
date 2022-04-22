import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({ label, type, placeholder, errorMessage, ...props }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{placeholder}</Form.Label>
      <Form.Control type={type} placeholder={label} {...props} />
      {errorMessage && (
        <Form.Text className="text-muted">{errorMessage}</Form.Text>
      )}
    </Form.Group>
  );
};

export default TextInput;
