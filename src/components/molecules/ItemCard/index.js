import React from "react";
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ItemCard = ({ onCardClick, onEditClick, disableView, ...props }) => {
  return (
    <Card style={{ width: "45rem", marginBottom: "3rem" }}>
      <Card.Body>
        <Card.Title>Name: {props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Brand: {props.brand}
        </Card.Subtitle>
        <Card.Text>Size: {props.size}</Card.Text>
        <Card.Text>ID: {props.id}</Card.Text>
        {!disableView && (
          <Button
            onClick={() => onCardClick(props._id)}
            variant="outline-success"
            className="mr-3"
          >
            View
          </Button>
        )}

        <Button variant="outline-primary" onClick={onEditClick}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
