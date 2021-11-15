import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./AddProduct.css";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...addProduct };
    newLoginData[field] = value;
    setAddProduct(newLoginData);
  };
  const handleAddProduct = (e) => {
    e.preventDefault();

    fetch("https://enigmatic-ocean-37099.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product Add To Database Successfully");
          e.target.reset();
        }
      });
  };
  return (
    <Container className="w-75">
      <h2 className="my-4 title-color">Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <Form.Control
          onBlur={handleOnBlur}
          required
          className="mb-3"
          name="product_name"
          size="lg"
          type="text"
          placeholder="Product Name"
        />
        <Form.Control
          onBlur={handleOnBlur}
          required
          className="mb-3"
          name="img"
          size="lg"
          type="text"
          placeholder="Product Image Link"
        />
        <Form.Control
          onBlur={handleOnBlur}
          required
          className="mb-3"
          name="price"
          size="lg"
          placeholder="Product Price"
        />
        <Form.Control
          as="textarea"
          required
          onBlur={handleOnBlur}
          name="product_description"
          type="textarea"
          rows={3}
          placeholder="Product Description"
        />
        <button
          className="btn btn-light product-add-btn fw-bold mt-3 w-50"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </Container>
  );
};

export default AddProduct;
