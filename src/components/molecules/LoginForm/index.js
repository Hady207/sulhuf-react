import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { TextInput } from "../../atoms";

const LoginForm = ({ isLoading, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    onSubmit(e, { username, password });
  };

  return (
    <Form onSubmit={handleOnSubmit} className="mt-5">
      <TextInput
        label="Username"
        type="text"
        placeholder="Username"
        htmlid="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        label="Password"
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="primary" type="submit" className="mt-3">
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <span>Submit</span>
        )}
      </Button>
    </Form>
  );
};

export default LoginForm;
