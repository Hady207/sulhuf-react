import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/molecules";
import { AuthActions } from "./reducer";
import authSelectors from "./selectors";
import { Container } from "react-bootstrap";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginIsLoading } = useSelector(authSelectors);

  const handleLogin = (e, userObj) => {
    e.preventDefault();

    dispatch(
      AuthActions.requestLogin(userObj.username, userObj.password, navigate)
    );
  };

  return (
    <Container>
      <LoginForm onSubmit={handleLogin} />
    </Container>
  );
};

export default Auth;
