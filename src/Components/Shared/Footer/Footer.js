import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaYoutubeSquare,FaTwitterSquare, FaPhoneSquareAlt, FaRegEnvelope } from "react-icons/fa";


import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-5 ft-color text-light pt-5 pb-4">
        <Container>
            <Row>

            <Col className="col-lg-3 col-md-3 col-sm-6 mb-2 d-flex justify-content-center">
                    <div className="text-start">
                     <img style={{width:120}} src="https://i.ibb.co/gtmDNTR/5e75c86d77bcc-Arfy-A1-Wi-L2.png" alt="" />

                     <h5 className="mt-4 title-color">SOCIAL MEDIA</h5>
                    <h5>
                        <span><FaFacebookSquare /></span>
                        <span className="mx-3"><FaInstagram /></span>
                        <span className="me-3"><FaYoutubeSquare /></span>
                        <span><FaTwitterSquare /></span>
                    </h5>
                    </div>
            </Col>

            
            <Col className="col-lg-3 col-md-3 col-sm-6  d-flex justify-content-center">
                 <div className="text-start">
                 <h4 className="mb-2 fw-bold title-color">COLLECTION</h4>
                    <div>
                     <h6>Cycles Accessories</h6>
                    <h6>Blog</h6>
                    <h6>News</h6>
                    </div>
                </div>
             </Col>
                
                <Col className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
                   <div className="text-start">
                    <h4 className="mb-2 fw-bold title-color">SEE MORE INFO</h4>
                    <ul className="list-style">
                        <li>
                           <h6>-<a className="text-decoration-none link-color" href="/home"> Home</a></h6>
                            <h6>-<a className="text-decoration-none link-color" href="/about"> About</a></h6>
                            <h6>-<a className="text-decoration-none link-color" href="/exploreproducts"> Explore Products</a></h6>
                            
                        </li>
                    </ul>
                   </div>
                </Col> 
                



              <Col className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
                   <div className="text-start">
                   <h4 className="mb-2 fw-bold title-color">WE’RE HERE TO HELP</h4>
                      <div>
                      <h5>Hero Cycles Ltd</h5>
                      <h6>2A-1001, 10th Floor, Two</h6>
                       <h6>Horizon Centre,</h6>
                       <h6><FaPhoneSquareAlt />  1800 208 4376 (Toll Free)</h6> 
                       <h6><FaRegEnvelope />  customer@herocycles.com</h6> 
                      </div>

                   </div>
                </Col>
        
              
        
            </Row>
        </Container> 
    </div>
    );
};

export default Footer;