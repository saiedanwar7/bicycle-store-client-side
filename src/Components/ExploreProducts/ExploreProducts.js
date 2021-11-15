import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Menubar from '../Shared/Menubar/Menubar';
import Product from '../Shared/Product/Product';
import './ExploreProduct.css';


const ExploreProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch("https://enigmatic-ocean-37099.herokuapp.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        }, [])
        // console.log(products)


    return (
       
        <>
         <Menubar></Menubar>

           <Container className="mt-5">
                <h2 className="py-4 fw-bold title-color">Our Cycles Collection</h2>
                {
                  !products.length ? <div style={{ marginBottom: "400px" }}></div> 
                  
                  :

                  <Row xs={1} md={3} className="g-4">
                  {
                      products.map(product =><Product
                      key={product._id}
                      product={product}
                      ></Product>)
                  }
              </Row>
                }
           </Container>
        </>
    );
};

export default ExploreProducts;

