import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/atoms";
import { OrderCard } from "../../components/molecules";
import { ViewOrderActions } from "./reducer";
import ViewOrderSelector from "./selectors";

const ViewOrder = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, order } = useSelector(ViewOrderSelector);

  useEffect(() => {
    dispatch(ViewOrderActions?.orderReq(id));
  }, [id, dispatch]);

  return (
    <div>{isLoading ? <Loader /> : <OrderCard disableView {...order} />}</div>
  );
};

export default ViewOrder;
