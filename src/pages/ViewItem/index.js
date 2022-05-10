import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/atoms";
import { ItemCard } from "../../components/molecules";
import { ViewItemActions } from "./reducer";
import ViewItemSelector from "./selectors";
import { DashboardActions } from "../Dashboard/reducer";

const ViewItem = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, item } = useSelector(ViewItemSelector);

  useEffect(() => {
    dispatch(ViewItemActions?.itemReq(id));
  }, [id, dispatch]);

  const handleEdit = (item) => {
    dispatch(DashboardActions.editData(item));
    navigate(`/update-item`);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ItemCard disableView onEditClick={() => handleEdit(item)} {...item} />
      )}
    </div>
  );
};

export default ViewItem;
