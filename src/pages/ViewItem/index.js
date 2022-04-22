import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/atoms";
import { ItemCard } from "../../components/molecules";
import { ViewItemActions } from "./reducer";
import ViewItemSelector from "./selectors";

const ViewItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, item } = useSelector(ViewItemSelector);

  useEffect(() => {
    dispatch(ViewItemActions?.itemReq(id));
  }, [id, dispatch]);

  return (
    <div>{isLoading ? <Loader /> : <ItemCard disableView {...item} />}</div>
  );
};

export default ViewItem;
