import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Menubar from '../../Shared/Menubar/Menubar';
import './Login.css'

const Login = () => {
    const {loginUser, error, setError, signInWithGoogle} = useAuth();

    const [loginData, setLoginData] = useState({})

    const location = useLocation();
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        setError("");
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        loginUser(loginData.email, loginData.password, location, history)
    }

    const handleGoogleLogin = () =>{
        signInWithGoogle(location, history)
    }

    return (
        <>
        <Menubar></Menubar>

        <Container>
            <h1 className="shadow-sm re-title fw-bold mt-5 p-3 text-center rounded"> Please Login</h1>
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">


                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label className="fw-bold">Email address</Form.Label> */}
                     <Form.Control onBlur={handleOnBlur} type="email" name="email" placeholder="Enter email" required />         
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label className="fw-bold">Password</Form.Label> */}
                    <Form.Control onBlur={handleOnBlur} type="password" name="password" placeholder="Password" required/>
                </Form.Group>

                  <p className="text-start text-danger">{error}</p>
                 <Button className=" btn re-button fw-bold w-100"  type="submit">
                         Login
                  </Button>


               <div className="text-center fw-bold mt-4">
                  <Link onClick={()=>setError("")} to="/register">NEW USER? PLEASE REGISTER</Link> 
                </div>
           </Form>


             <div className="login-from mx-auto mt-3">
                <p className="text-center">OR</p>
                <button onClick={handleGoogleLogin} className="btn fw-bold re-button w-100 ">Continue With Google</button>
            </div>
        </Col>
     </Row>
</Container>

     </>
    );
};

export default Login;