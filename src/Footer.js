import React from 'react';
import { FaMapMarker, FaPhone, FaFax, FaEnvelope } from "react-icons/fa"
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedin, FaYoutube  } from "react-icons/fa"
import { Row, Col, Nav, Button, Container } from 'react-bootstrap';
import "./Footer.css";


function Footer() {
    return (
        <>
        <Container fluid style={{backgroundColor:"#1e1c18"}}>
        <Container className="pl-0 pr-0 pt-5 pb-5" style={{backgroundColor:"transparent"}}>
                    <Row className="main-footer m-0">
                        <Col md={4} className="p-3">
                            <div className="footer-widget">
                                <h2 className="widget-title">SALON ADDRESS</h2>
                                <ul className="nonelist contact">
                                    <li> <FaMapMarker className="m-2" /> 4958 Norman Street Los Angeles, CA 90042 </li>
                                    <li> <FaPhone className="m-2" /> +00 (800) 123-4567</li>
                                    <li> <FaFax className="m-2" /> +00 (123) 456 7890</li>
                                    <li> <FaEnvelope className="m-2" /> info@salon.com</li>
                                </ul>
                            </div>
                        </Col>


                        <Col md={4}>

                            <div className="footer-widget footer-social">
                                <h2 className="widget-title mt-2">SOCIAL FEED</h2>
                                <ul className="nonelist">
                                    <li>
                                        <Nav.Link className="fa" href="/home"> <FaFacebookF  className="m-2"
                                         /> Facebook </Nav.Link>
                                    </li>
                                    <li><Nav.Link className="fa" href="/home"> <FaTwitter  className="m-2" />  Twitter</Nav.Link></li>
                                    <li><Nav.Link className="fa" href="/home"> <FaGoogle  className="m-2" /> Google Plus</Nav.Link></li>
                                    <li><Nav.Link className="fa" href="/home"> <FaLinkedin  className="m-2" />Linked In</Nav.Link></li>
                                    <li>
                                        <Nav.Link className="fa" href="/home"> <FaYoutube  className="m-2" /> Youtube</Nav.Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="footer-widget widget-newsletter">
                                <h2 className="title">NEWSLETTERS</h2>
                                <p className="footerpara">Enter your email address to receive new patient information and other useful information right to your inbox.</p>
                                <div className="inputgroup">
                                    <input type="text" className="control" placeholder="Email Address" />
                                    <Button className="button" type="button">Subscribe</Button>
                                </div>
                            </div>
                        </Col>
                        <div className="copyright-content">
                            <p>© MEN SALON 2021 | ALL RIGHTS RESERVED</p>
                        </div>

                    </Row>
                </Container>
                </Container>
        </>
    )
}

export default Footer
