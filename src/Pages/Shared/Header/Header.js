import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth();
    let firstName = "";
    if(user.displayName){
        const fullName = user.displayName.split(' ');
        firstName = fullName[0];
    }
    return (
        <div className="navbar">
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Brand to="/home"><h2><span>ARN-Motors</span></h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" variant="light">
                        <Nav className="ms-auto">
                            <Nav.Link><NavLink className="link" to="/home">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink className="link" to="/services">Explore</NavLink></Nav.Link>
                            {
                                user.email && <>
                                <Nav.Link className="link text-dark" type="button" data-bs-toggle="offcanvas" data-bs-backdrop="true" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Dashboard</Nav.Link>
                                <Navbar.Text style={{ color: "#000" }}>
                                <span style={{ fontSize: "22px", color: "#e74c3c" }}><i className="fas fa-user"></i> {firstName}</span>
                                </Navbar.Text> </>

                            }
                            {
                                user.email && <Link onClick={logout} to="/" ><Button className="btn-custom ms-2" variant="primary">logout</Button></Link>
                            }
                            {
                                !user.email && <Link onClick={logout} to="/login" ><Button className="btn-custom ms-2" variant="primary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;