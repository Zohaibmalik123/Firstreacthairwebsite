import React from 'react';
import { Col, Row, Nav, Container } from 'react-bootstrap';
import serviceimg from "../src/Images/S1.jpg";
import Beardimage from "../src/Images/S2.jpg";
import CommonCard from './CommonCard';
import { Link } from 'react-router-dom';
import postimg from "../src/Images/postimg.jpg";
import "../src/Detail.css";

function ServiceDetail() {
    return (
        <>
            <CommonCard
                title=" SERVICE SINGLE"
                home="HOME"
                service="SERVICE SINGLE"
            />
            <Container>
            <div className="content">
                <Row>
                    <Col md={8}>
                        <h1>HAIR CUTTING</h1>
                        <img src={postimg} alt="loading" style={{ width: "100%", height: "400px" }} />

                        <p className="serviceparagraph">
                            <strong>Hair Salon Website Templates for you Modern Beauty Salon Free Responsive Website Template comes complete with everything you need for your hair salon shop and business. Take a look for more Take a look for more and more 
                        <Link className="service-link" href="https://easetemplate.com/downloads/category/free-website-template/"> free responsive website templates</Link>
                        </strong>
                        </p>

                        <p className="serviceparagraph">Vestibulum pellentesque gravida bibenduauris the sed dapibus justque sagittis erat sitamet lorem.</p>

                        <p className="serviceparagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <Row>
                            <Col md={6}>
                                <img src={serviceimg} alt="loading" style={{ width: "100%", height: "211px" }} />
                            </Col>

                            <Col md={6}>
                                <p className="serviceparagraph">Etiam leo lectundit etest euonsequat congue dianas sapien orciplacerat vitae nibh necpretium elementum ligcongue neque a augue ultricieugiat lacus tincidunt </p>
                                <p className="serviceparagraph">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                            </Col>
                        </Row>

                        <p className="serviceparagraph"> occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p className="serviceparagraph">Maecenas sapien orci, placerat vitae nibhnpretium elementum ligulaenean congue neque ultriciet feugiat lacus tincidunnec ullamcorper.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <Row>
                            <Col md={6}>
                            <p className="serviceparagraph beardimagepara">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <p className="serviceparagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Col>
                            <Col md={6}>
                                <img src={Beardimage} alt="loading" style={{ width: "100%", height: "auto" }} />
                            </Col>
                        </Row>

                        

                        
                    </Col>
                    <Col md={4}>
                    <div className="sidenav">
                        <ul className="listnone">
                            <li> <Nav.Link href="/">traditional cut</Nav.Link></li>
                            <li> <Nav.Link href="/">beard trim</Nav.Link></li>
                            <li> <Nav.Link href="/">mustache trim</Nav.Link></li>
                            <li> <Nav.Link href="/">hair cut</Nav.Link></li>
                            <li> <Nav.Link href="/">shaves</Nav.Link></li>
                        </ul>
                    </div>
                    
                    <div className="widget widget-call-to-action">
                        <h1 className="widge-title">Book Your Appointment</h1>
                        <p className="text-black">Call to action widget for booking appointment online.</p>
                        <Nav.Link href="/" className=" btn-lg btn-primry">Make Appointment</Nav.Link>
                    </div>
                    
                    </Col>
                </Row>
            </div>
            </Container> 
            <Container fluid className="p-0">
                
            <div className="cta-box">
                    <div className="frt-col">
                        <Container className="bg-transparent">
                        <Row>
                            <Col md={8}>
                                <h1 className="cta-title">BOOK YOUR ONLINE APPOINTMENT</h1>
                                <p className="text"> Call to action button example for booking appointment for patients.</p>
                            </Col>
                            <Col md={4}>
                                <Nav.Link href="/" className="btn-white">Call to action Button</Nav.Link>
                            </Col>
                        </Row>
                        </Container>
                    </div>

                </div>

            </Container>
        </>
    )
}

export default ServiceDetail
