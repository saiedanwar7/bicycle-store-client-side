import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://enigmatic-ocean-37099.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    // console.log(orders);

    const handleDeleteOrder = id => {

        const proceed = window.confirm("Are You Sure, You Want To Cancel This Order !!!")
        if (proceed) {
            const url = `https://enigmatic-ocean-37099.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("booking cancel Successfully")
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders)
                    }
                })
        }
    }

    const handleShippedOrder = id => {

        const approved = { status: "Approved" }
        const url = `https://enigmatic-ocean-37099.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approved)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    alert("Approved Succesfully")
                    window.location.reload();


                }

            })
    }

    return (
        <Container>
            <h2 className="my-4 title-color text-center">Manage Orders</h2>
            <Row xs={1} md={1}>
                {
                orders?.map(order => <Col className="mb-4" key={order._id}>
                     <div className="d-md-flex shadow order-box">
                            <div className="text-center">
                                <img className="p-1" height="150px" src={order?.bookingInfo?.img} alt="" />
                            </div>
                            <Card.Body className="row align-items-center justify-content-around ">

                                <div className="col-md-4">
                                    <Card.Title className="pakage-title m-0 ">{order?.bookingInfo?.product_name}</Card.Title>
                                    <h6 className="price m-0">Price : {order?.bookingInfo?.price} $</h6>
                                    <p className=" m-0"><span className="fw-bold">Status :</span> {order?.status}</p>
                                </div>
                                <div className="col-md-5 ">
                                    <p className=" m-0"><span className="fw-bold">Name :</span> {order?.name}</p>
                                    <p className=" m-0"><span className="fw-bold">Email :</span> {order?.userEmail}</p>
                                    <p className=" m-0"><span className="fw-bold">Phone :</span> {order?.phoneNumber}</p>
                                    <p className=" m-0"><span className="fw-bold">Phone :</span> {order?.address}</p>

                                </div>
                                <div className="col-md-3">
                                    <button onClick={() => handleShippedOrder(order?._id)} className="btn w-100 btn-success mb-2">Shipped</button>
                                    <button onClick={() => handleDeleteOrder(order?._id)} className="btn w-100 cancel-btn fw-bold">Cencel Order</button>
                                </div>

                            </Card.Body>
                        </div>
                    </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default ManageOrders;