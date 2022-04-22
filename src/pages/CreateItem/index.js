import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ItemForm } from "../../components/molecules";
import { CreateItemActions } from "./reducer";

const CreateOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e, bodyObj) => {
    e.preventDefault();

    dispatch(CreateItemActions.creationReq(bodyObj, navigate));
  };

  return (
    <Container>
      <ItemForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default CreateOrder;
