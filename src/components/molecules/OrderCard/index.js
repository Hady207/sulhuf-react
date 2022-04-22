import React from "react";
import { Button, Card } from "react-bootstrap";

const OrderCard = ({ disableView, onCardClick, ...props }) => {
  return (
    <Card style={{ width: "45rem", marginBottom: "3rem" }}>
      <Card.Body>
        <Card.Title>Company Name: {props.invoiceData?.companyName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Customer Name: {props.invoiceData?.customerName}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Driver username: {props?.invoiceData?.driverName}
        </Card.Subtitle>
        <Card.Text>Item Count: {props.itemCount}</Card.Text>
        <Card.Text>Payment: {props.paymentSentToCompany} KWD</Card.Text>
        {!disableView && (
          <Button
            onClick={() => onCardClick(props._id)}
            variant="outline-success"
            className="mr-3"
          >
            View
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
