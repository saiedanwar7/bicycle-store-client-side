import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';


const MakeAdmin = () => {
    const [email, setEamil] = useState();
    const handleOnBlur = e =>{
        setEamil(e.target.value)
    }

    const handleAdminSubmit = e =>{
        e.preventDefault()
        const user = {email}
        //console.log(user.email);

        fetch("https://enigmatic-ocean-37099.herokuapp.com/users/admin", {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
         
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                alert("Admin Make Successfully")
            }
            if((data.modifiedCount === 0) && (data.matchedCount > 0)){
                alert("This user Already Admin")
            }
            if(data.matchedCount === 0){
                alert("This User Not Found!!!")
            }

            e.target.reset();

           // console.log(data);
        })

    }
    return (
        <Container className="mt-5 d-flex justify-content-center">
            <div className="p-5 shadow-lg review-box">
                <h2 className="text-center mb-3">Make Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <Form.Control onBlur={handleOnBlur} required className="mb-3" name="email" size="lg" type="email" placeholder="Your email" />
                    <button className=" btn btn-success" type="submit">Make Admin</button>
                </form>
            </div>
        </Container>
    );
};

export default MakeAdmin;