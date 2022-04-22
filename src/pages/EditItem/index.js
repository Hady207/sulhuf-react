import React from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ItemForm } from "../../components/molecules";
import DashboardSelectors from "../Dashboard/selectors";
import { UpdateItemActions } from "./reducer";

const EditItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedHomeData } = useSelector(DashboardSelectors);

  const handleSubmit = (e, bodyObj) => {
    e.preventDefault();

    dispatch(
      UpdateItemActions.updateReq(selectedHomeData?.id, bodyObj, navigate)
    );
  };
  return (
    <Container>
      <ItemForm onSubmit={handleSubmit} editForm={selectedHomeData} />
    </Container>
  );
};

export default EditItem;
