import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product, productDel, handleDeleteProduct }) => {
  return (
    <div>
      <Col>
      <Card className="packageCard card-shadow package-card h-100" id="packageCard">
                <Card.Img className="card-img product-img" variant="top" src={product?.img} />
                <Card.Body className="d-flex flex-column">

                    <Card.Title className="pakage-title ">{product?.product_name}</Card.Title>
                    <h6 className="price">Price : {product?.price} $</h6>
                    <Card.Text>
                        {product?.product_description.slice(0, 110)}...
                    </Card.Text>

                    <div className="mt-auto ">
                    {!productDel && (
                            <Link to={`/products/order_details/${product._id}`}>
                              <button className="btn w-100 buy-btn">Order Now</button>
                            </Link>
                          )}
                          {productDel && (
                            <button  onClick={() => handleDeleteProduct(product._id)}
                              className="btn w-100 buy-btn"
                            >
                              Delete Product
                            </button>
                          )}
                    </div>
                </Card.Body>
            </Card>
       
      </Col>
    </div>
  );
};

export default Product;




// <Card
// className="productCard card-shadow package-card h-100"
// id="productCard"
// >
// <Card.Img
//   className="card-img product-img img-fluid"
//   variant="top"
//   src={product?.img}/>

// <Card.Body className="d-flex flex-column">
//   <Card.Title className="pakage-title mb-3">
//     <h4>{product?.product_name}</h4>
//   </Card.Title>

//   <h5 className="price">Price : {product?.price} $</h5>
//   <Card.Text className="m-2">
//     <p>{product?.product_description.slice(0, 110)}...</p>
//   </Card.Text>

//   <div className="mt-auto ">
//     {!news && (
//       <Link to={`/products/order_details/${product._id}`}>
//         <button className="btn w-100 buy-btn">Order Now</button>
//       </Link>
//     )}

//     {news && (
//       <button
//         onClick={() => handleDeleteProduct(product._id)}
//         className="btn w-100 buy-btn"
//       >
//         Delete Product
//       </button>
//     )}
//   </div>
// </Card.Body>
// </Card>