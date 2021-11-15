import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
 
        <div className="not-found">
            <h1 className="text-center error fw-bold mt-5">404</h1>
            <h2 className="text-center fw-bold mt-4">Page Not Found ! ! !</h2>
             <h3 className="text-center mt-5"><button className="btn home-button px-3"><a className="text-decoration-none fw-bold link-color" href="/home">Go To Home</a></button></h3>

        </div>
    );
};

export default NotFound;