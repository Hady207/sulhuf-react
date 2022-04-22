import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/atoms";
import { OrderCard } from "../../components/molecules";
import { OrdersActions } from "./reducer";
import OrderSelectors from "./selectors";

const Orders = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, orders } = useSelector(OrderSelectors);

  useEffect(() => {
    dispatch(OrdersActions.ordersReq());
  }, []);

  const handleNavigation = (id) => {
    navigate(`${id}`);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {orders?.map((order) => (
            <OrderCard
              key={order._id}
              onCardClick={handleNavigation}
              {...order}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Orders;
