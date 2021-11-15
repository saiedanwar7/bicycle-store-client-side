import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Categories.css'

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://enigmatic-ocean-37099.herokuapp.com/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    console.log(categories)
    return (
        <div>
            <Container className="mt-5">

                <div>
                <h2 className="text-center title-text fw-bold my-5">SEARCH POPULAR CATEGORIES</h2>
                <hr />
                </div>

                <Row xs={1} md={3} className="g-3 mt-4">
                    {
                        categories.map(cate => <Col key={cate._id} >
                            <Card className=" border-0">
                                <img className="bike-img img-fluid" src={cate.cat_img} alt="" />
                            </Card>
                        </Col>)
                    }
                </Row> 
            </Container>
        </div>
    );
};

export default Categories;