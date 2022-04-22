import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import RootSelector from "../../../pages/Root/selectors";
import { RootActions } from "../../../pages/Root/reducer";

const MyNav = () => {
  const { userProfile } = useSelector(RootSelector);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(RootActions.logout());
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Sulhuf Dashboard</Navbar.Brand>
        {userProfile?.id && (
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/orders">
              <Nav.Link>Orders</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create-item">
              <Nav.Link>Create Item</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/upload">
              <Nav.Link>Upload file</Nav.Link>
            </LinkContainer>
          </Nav>
        )}
        {userProfile?.id && (
          <Button onClick={handleLogout} variant="outline-danger">
            Logout
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default MyNav;
