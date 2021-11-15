import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://enigmatic-ocean-37099.herokuapp.com/orders/product?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  console.log(orders);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm(
      "Are you sure? You Want To Cancel This Order !!!"
    );
    if (proceed) {
      const url = `https://enigmatic-ocean-37099.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order Cancel Successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <Container>
      <h2 className="my-4 text-center or-title fw-bold">My Orders</h2>
      <Row xs={1}>
        {orders?.map((order) => (
          <Col className="mb-4" key={order._id}>
            <div className="d-md-flex shadow order-box">
              <div className="text-center">
                <img
                  className="p-1"
                  height="150px"
                  src={order?.bookingInfo?.img}
                  alt=""
                />
              </div>

              <Card.Body className="row align-items-center justify-content-around ">
                <div className="col-md-4">
                  <Card.Title className="title-color mb-2 ">
                    {order?.bookingInfo?.product_name}
                  </Card.Title>
                  <h6 className=" m-2">
                    Price : {order?.bookingInfo?.price} $
                  </h6>
                  <p className=" m-0">
                    <span className="fw-bold">Status :</span> {order?.status}
                  </p>
                </div>

                <div className="col-md-5 text-start">
                  <p className=" m-0">
                    <span className="fw-bold">Name : </span> {order?.name}
                  </p>
                  <p className=" m-0">
                    <span className="fw-bold">Email : </span> {order?.userEmail}
                  </p>
                  <p className=" m-0">
                    <span className="fw-bold">Phone : </span> {order?.phoneNumber}
                  </p>
                  <p className=" m-0">
                    <span className="fw-bold">Address : </span> {order?.address}
                  </p>
                  <p className="m-0">
                    <span className="fw-bold">City : </span> {order?.city}
                  </p>
                </div>
                
                <div className="col-md-3">
                  <button
                    onClick={() => handleDeleteOrder(order?._id)}
                    className="btn w-100 cancel-btn fw-bold"
                  >
                    Cencel Order
                  </button>
                </div>
              </Card.Body>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyOrders;
