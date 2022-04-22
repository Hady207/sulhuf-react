import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dashboardSelector from "../Dashboard/selectors";
import { DashboardActions } from "../Dashboard/reducer";
import { ItemCard } from "../../components/molecules";

const Dashboard = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { homeData } = useSelector(dashboardSelector);

  useEffect(() => {
    dispatch(DashboardActions.requestHomeData());
  }, [dispatch]);

  const handleNavigation = (id) => {
    navigate(`item/${id}`);
  };

  const handleEdit = (item) => {
    dispatch(DashboardActions.editData(item));
    navigate(`update-item`);
  };

  return (
    <Container className="dashboard__container">
      {homeData?.length > 0 &&
        homeData.map((item) => (
          <ItemCard
            key={item?.id}
            onCardClick={handleNavigation}
            onEditClick={() => handleEdit(item)}
            {...item}
          />
        ))}
    </Container>
  );
};

export default Dashboard;
