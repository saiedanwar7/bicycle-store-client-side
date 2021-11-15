import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./Menubar.css";

const Menubar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" nav-bar bg="dark" variant="dark">
        <Container className="py-2">
          <Navbar.Brand className="title text-color" href="/home">
            <img
              src="https://i.ibb.co/gtmDNTR/5e75c86d77bcc-Arfy-A1-Wi-L2.png"
              alt=""
            />{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-color mx-2 fw-bold" href="/About">
                ABOUT US
              </Nav.Link>
              <Nav.Link
                className="text-color mx-2 fw-bold"
                href="/exploreproducts"
              >
                EXPLORE PRODUCTS
              </Nav.Link>
            </Nav>

            <Nav>
              {user?.email && (
                <Nav.Link
                  className="text-decoration-none align-self-center text-color fw-bold px-3"
                  href="/dashboard"
                >
                  DASHBOARD
                </Nav.Link>
              )}

              {user?.email ? (
                <div className="d-flex text-center align-items-center justify-content-center">
                  <span className="me-3 text-decoration-none text-color fw-bold">
                    {user.displayName}
                  </span>

                  <Nav.Link
                    className="text-decoration-none text-color fw-bold me-4 nav-link"
                    onClick={handleLogOut}
                  >
                    <button className="btn btn-log fw-bold px-2">LogOut</button>
                  </Nav.Link>
                </div>
              ) : (
                <Nav.Link
                  className="text-decoration-none me-4 nav-link "
                  href="/login"
                >
                  <button className="btn btn-log fw-bold px-3">LOGIN</button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
