import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Menubar from '../Shared/Menubar/Menubar';
import './OrderAndDetails.css'

const OrderAndDetails = () => {
    const {product_id} = useParams();
    const [product, setProduct] = useState([])

    const { user } = useAuth();

    const initInfo = {
        name: user.displayName,
        address:"",
        city:"",
        phoneNumber: ""
    }
    const [orderInfo, setOrderInfo] = useState(initInfo);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${product_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product_id])

    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo)
      //  console.log(orderInfo);
    }

    const handleOrder = e => {
        e.preventDefault()
        const newOrder = {
            ...orderInfo,
            status:"Pending",
            userName: user.displayName,
            userEmail: user.email,
            bookingInfo: product
        }
  
     // Data Send To The Server

     fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newOrder)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert("Successfully Added This Order")
                e.target.reset()

            }
        });
    //console.log(newOrder);

}



    return (
        

        <div>
        <Menubar></Menubar>
       
        <Container>
            <Row>
                <Col className="col-12 col-md-7">
                    <h2 className="mt-5 py-2 product-name">{product?.product_name}</h2>
                    <div>
                    <img className="img-fluid" src={product?.img} alt="" />
                    </div>
                    <h5 className="price">Price: {product?.price}$</h5>
                    <div>
                        <p className="details">{product?.product_description}</p>
                    </div>
                </Col>

                <Col className="col-12 col-md-5 mt-5">
                        <div>
                            <h2 className="mb-5 fw-bold title">Order Information</h2>
                            <form className="mb-3" onSubmit={handleOrder}>
                                <Form.Control onBlur={handleOnBlur} className="mb-3 w-80 m-2" defaultValue={user?.displayName} name="name" size="lg" type="text" placeholder="Your name" />
                                <Form.Control className="mb-3 w-80 m-2" name="email" size="lg" readOnly value={user?.email} type="email" placeholder="Your email" />
                                <Form.Control onBlur={handleOnBlur} className="mb-3 w-80 m-2" name="address" size="lg" type="text" placeholder="Address" />
                                <Form.Control onBlur={handleOnBlur} className="mb-3 w-80 m-2" name="city" size="lg" type="text" placeholder="City" />
                                <Form.Control onBlur={handleOnBlur} className="mb-3 w-80 m-2" name="phoneNumber" size="lg" placeholder="Phone Number" />

                                <button className="btn fw-bold or-btn w-100 " type='submit'>Place Order</button>
                            </form>
                        </div>
                    </Col>
            </Row>
        </Container>

        </div>
    );
};

export default OrderAndDetails;