import React from "react";
import { FaRegUser } from "react-icons/fa";
import { Col, Container, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import ManageOrders from "../ManageOrders/ManageOrders";
import AdminRoute from "../AdminRoute/AdminRoute";
import DashboardNotFound from "../DashboardNotFound/DashboardNotFound";
import "./Dashboard.css";


const Dashboard = () => {
  const { user, admin, logOut } = useAuth();

  let { path, url } = useRouteMatch();

  const handleLogOut = () => {
    const proceed = window.confirm("Are You For LogOut !!!");
    if (proceed) {
      logOut();
    }
  };

  return (
    <div>
      <Navbar className="bg-color" variant="dark" box-btn expand="md">
        <Container fluid>
          <Navbar.Toggle className="" aria-controls="offcanvasNavbar" />
          <Navbar.Brand
            className=" ms-md-5 py-2 px-2 fw-bold dash-text"
            href="#"
          >
            Dashboard
          </Navbar.Brand>
          <Link
            className="me-md-4 text-decoration-none text-light py-2 px-2 h5 dash-text"
            to="/"
          >
            Home
          </Link>
          <Navbar.Offcanvas
            className="w-50"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header className="ms-auto" closeButton>
              {/* <Offcanvas.Title  id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title> */}
            </Offcanvas.Header>

            <Offcanvas.Body className="">
              <Nav className=" d-flex justify-content-start flex-grow-1 pe-2">
                <div className="d-flex flex-column mt-2  align-items-center">
                  <span className="user-icon p-2">
                    <FaRegUser />
                  </span>
                  <h4 className="mb-4 user-color">{user?.displayName}</h4>
                </div>

                {!admin && 
                  <>
                    <div className="ps-3 py-1 dashboard-font d-flex align-items-center"> 
                      <Link
                        className="py-2 px-2 box-btn text-decoration-none" to={`${url}`}> Pay
                      </Link>
                    </div>

                    <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                      <Link
                        className="py-2 px-2 box-btn text-decoration-none"
                        to={`${url}`}
                      >
                        My Orders
                      </Link>
                    </div>

                    <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                      <Link
                        className="py-2 px-2 box-btn text-decoration-none"
                        to={`${url}/review`}
                      >
                        Review
                      </Link>
                    </div>
                  </>
                }

                {admin && (
                  <>
                    <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                      <Link
                        className="py-2 px-2 box-btn text-decoration-none"
                        to={`${url}/makeadmin`}
                      >
                        Make Admin
                      </Link>
                    </div>

                    <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                      <Link
                        className="py-2 px-2 box-btn text-decoration-none"
                        to={`${url}/add_product`}
                      >
                        Add Product
                      </Link>
                    </div>

                    <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                      <Link
                        className="py-2 px-2 box-btn text-decoration-none"
                        to={`${url}/manage_product`}
                      >
                        Manage Product
                      </Link>
                    </div>

                    <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                      <Link
                        className="sp3 py-2 px-2 box-btn text-decoration-none"
                        to={`${url}/manage_all_orders`}
                      >
                        Manage All Orders
                      </Link>
                    </div>
                  </>
                )}

                <div className="mt-5 ps-3">
                  <button
                    onClick={handleLogOut}
                    className="text-decoration-none w-50 fw-bold text-light btn log-btn"
                  >
                    Logout
                  </button>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Row className="g-0">
        <Col className=" col-md-2 flex-column bg-light  d-flex justify-content-center  text-start dashbox col-0">

          {/* display user name   */}
          <div className="d-flex flex-column mt-2  align-items-center">
            <span className="user-icon p-2">
              <FaRegUser />
            </span>
            <h4 className="mb-4 user-color">{user?.displayName}</h4>
          </div>
        

          {!admin && 
            <>
              <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                <Link
                  className="py-2 px-2 box-btn text-decoration-none"to={`${url}/pay`}>
                  Pay
                </Link>
              </div>

              <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                <Link
                  className="py-2 px-2 box-btn text-decoration-none"
                  to={`${url}`}
                >
                  My Orders
                </Link>
              </div>

              <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                <Link
                  className="py-2 px-2 box-btn text-decoration-none"
                  to={`${url}/review`}
                >
                  Review
                </Link>
              </div>
            </>
          }

          {admin && 
            <>
              <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                <Link
                  className="py-2 px-2 box-btn text-decoration-none"
                  to={`${url}/makeadmin`}
                >
                  Make Admin
                </Link>
              </div>

        <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/add_product`}>
                  Add Product
                </Link>
              </div>

              <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                <Link
                  className="py-2 px-2 box-btn text-decoration-none"
                  to={`${url}/manage_product`}
                >
                  Manage Product
                </Link>
              </div>

              <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                <Link
                  className=" py-2 px-2 box-btn text-decoration-none"
                  to={`${url}/manage_all_orders`}
                >
                  Manage All Orders
                </Link>
              </div>
            </>
          }

          <div className="mt-1 ps-3">
            <button
              onClick={handleLogOut}
              className="text-decoration-none w-50 ms-2 mt-3 fw-bold text-light btn log-btn"
            >
              Logout
            </button>
          </div>
        </Col>
        <Col
          style={{ height: "88vh", overflowX: "hidden", overflowY: "scroll" }}
          className="g-2 mt-0 col-md-10 col-12  "
        >
          <Container className="mb-4">
            <Switch>
              <Route exact path={path}>
                <MyOrders></MyOrders>
              </Route>

              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>

              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>

              <AdminRoute exact path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>

              <AdminRoute exact path={`${path}/add_product`}>
                <AddProduct></AddProduct>
              </AdminRoute>

              <AdminRoute exact path={`${path}/manage_product`}>
                <ManageProduct></ManageProduct>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manage_all_orders`}>
                <ManageOrders></ManageOrders>
              </AdminRoute>
              <Route path={`${path}/*`}>
                <DashboardNotFound></DashboardNotFound>
              </Route>
            </Switch>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
