import React from 'react';
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { admin, logout } = useAuth();
    return (
        <>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title mt-4" id="offcanvasScrollingLabel">Dashboard</h3>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        !admin &&
                        <>
                            <Nav.Link><NavLink data-bs-dismiss="offcanvas" aria-label="Close" className="link" to="/pay">Pay</NavLink></Nav.Link>
                            <Nav.Link><NavLink data-bs-dismiss="offcanvas" aria-label="Close" className="link" to="/myOrder">My Orders</NavLink></Nav.Link>
                            <Nav.Link><NavLink data-bs-dismiss="offcanvas" aria-label="Close" className="link" to="/review">Review</NavLink></Nav.Link>
                        </>
                    }
                    {admin && <>
                        <Nav.Link><NavLink data-bs-dismiss="offcanvas" aria-label="Close" className="link" to="/manageAllOrders">Manage All Orders</NavLink></Nav.Link>
                        <Nav.Link><NavLink data-bs-dismiss="offcanvas" aria-label="Close" className="link" to="/manageBikes">Manage Bikes</NavLink></Nav.Link>
                        <Nav.Link><NavLink data-bs-dismiss="offcanvas" aria-label="Close" className="link" to="/addBikes">Add A New Bike</NavLink></Nav.Link>
                        <Nav.Link><NavLink data-bs-dismiss="offcanvas" aria-label="Close" className="link" to="/makeAdmin">Make Admin</NavLink></Nav.Link>
                    </>
                    }
                    <button type="button" className="btn btn-custom text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><NavLink onClick={logout} className="link" to="/">Logout</NavLink></button>
                </div>
            </div>
        </>

    );
};

export default Dashboard;