import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { TextInput } from "../../atoms";

const ItemForm = ({ isLoading, editForm, onSubmit }) => {
  const [name, setName] = useState(editForm.name || "");
  const [brand, setBrand] = useState(editForm.brand || "");
  const [pharmacySKU, setPharmacySKU] = useState(editForm.pharmacySKU || "");
  const [size, setSize] = useState(editForm.size || "");
  const [upc, setUPC] = useState(editForm.UPC || "");

  const handleOnSubmit = (e) => {
    onSubmit(e, {
      name: name,
      brand: brand,
      pharmacySKU: pharmacySKU,
      pharmacyCompany: "5f0110496af51e2e4cc5a86b",
      size: size,
      UPC: upc,
    });
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <TextInput
        type="text"
        placeholder="Name"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Brand"
        label="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Pharmacy SKU"
        label="Pharmacy SKU"
        value={pharmacySKU}
        onChange={(e) => setPharmacySKU(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Size"
        label="Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="UPC"
        label="UPC"
        value={upc}
        onChange={(e) => setUPC(e.target.value)}
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ItemForm;
