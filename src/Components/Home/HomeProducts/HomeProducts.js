import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';
import './HomeProducts.css'

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch("https://enigmatic-ocean-37099.herokuapp.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        }, [])
        // console.log(products)

    return (
        <Container className="mt-5">
                    <h2 className="mb-5 fw-bold title-text text-center">NEW UPDATE PRODUCTS</h2>
                    <Row xs={1} md={3} sm={2} className="g-4">
                        {
                            products?.slice(0, 6).map(product => <Product
                                 key={product._id} 
                                 product={product}>
                                 </Product>)
                        }
                    </Row>
        </Container>
    );
};

export default HomeProducts;

