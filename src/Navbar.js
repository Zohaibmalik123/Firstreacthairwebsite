import React from 'react';
import logo from "../src/Images/logo1.jpg";
import '../src/navbar.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavBar() {
    return (
        <>
        <Container>
            <Navbar className="Header" bg="white" expand="lg">
                <div className="container header">
                    <img src={logo} alt="loading" style={{ height: "56px" }} />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className="navigation active" href="/" >HOME</Nav.Link>
                            <NavDropdown className="navigation has-sub" title="SERVICE LIST" id="basic-nav-dropdown"> 
                                <NavDropdown.Item className="navigation" href="/service list">SERVICE LIST</NavDropdown.Item> 
                                <NavDropdown.Item className="navigation" href="/service detail">SERVICE DETAIL</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="navigation has-news" title="NEWS" id="basic-nav-dropdown">
                                <NavDropdown.Item className="navigation" href="/BLOG DEFAULT">BLOG DEFAULT</NavDropdown.Item>
                                <NavDropdown.Item className="navigation" href="/BLOG SINGLE">BLOG SINGLE</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="navigation has-features" title="FEATURES" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/TESTIMONIAL">TESTIMONIAL</NavDropdown.Item>
                                <NavDropdown.Item href="/STYLE GUIDE">STYLE GUIDE</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="navigation has-contact" href="/CONTACT">CONATCT</Nav.Link>
                            <Nav.Link className="navigation has-guide" href="/STYLE GUIDE">STYLE GUIDE</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            </Container>
        </>
    )
}

export default NavBar
