import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Menubar from '../../Shared/Menubar/Menubar';
import './Register.css'

const Register = () => {
    const { signInWithGoogle, registerUser, error, setError} = useAuth();
    const [registerData, setRegisterData] = useState({})
   

    const location = useLocation()
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData }
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
        // console.log(registerData);
        setError("")
    } 

    const handleRegister = e =>{
      //  console.log(registerData);
        e.preventDefault();
        registerUser( registerData.name, registerData.email, registerData.password, location, history)
    }

    const handleGoogleLogin = () =>{
        signInWithGoogle(location, history)
    }



return (
    <>

    <Menubar></Menubar>

     <Container>
          <h1 className="shadow-sm mt-5 p-3 fw-bold re-title text-center rounded"> Please Register</h1>
            <Row className="mt-2">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
        
         <Form onSubmit={handleRegister}>
         <Form.Group className="mb-3">
            {/* <Form.Label>Name</Form.Label> */}
             <Form.Control onBlur={handleOnBlur} type="name" name="name" placeholder="Enter name" required id="userName"/>
        </Form.Group>

         <Form.Group className="mb-3">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control onBlur={handleOnBlur} type="email" name="email" placeholder="Enter email" required/>
         </Form.Group>

          <Form.Group className="mb-3">
             {/* <Form.Label>Password</Form.Label> */}
             <Form.Control onBlur={handleOnBlur} type="password" name="password" placeholder="Password"  required/>
           </Form.Group>

           <p className="text-start text-danger  mt-1 mb-2" style={{height:"20px"}}>{error}</p>

             <Button className="btn re-button fw-bold w-100" variant="success" type="submit">
                Register
            </Button>

        </Form>

              <div className="text-center mt-3">
                  <Link className="fw-bold" onClick={() =>setError('')} to='/login'>Already Registered ?</Link>
                </div>

             <div className="login-from mx-auto mt-3">
                <p className="text-center">OR</p>
                <button onClick={handleGoogleLogin} className="btn fw-bold w-100 re-button">Continue with google</button>
            </div>
                </Col>
            </Row>
            <h6 className=" ">Copyright @ 2021 Saied Anwar. All Rights Reserved</h6>
        </Container>

     </>
    );
};

export default Register;
