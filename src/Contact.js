import React, { useState } from 'react';
import CommonCard from './CommonCard';
import { Link } from 'react-router-dom';
import { Col, Container, Row, } from 'react-bootstrap';
import ContactCommonData from './ContactCommonData';
import ContactData from "./ContactData"
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube } from "react-icons/fa"
import "../src/Contact.css";


function Contact() {
    const [testimonials, setTestimonials] = useState([]);
    return (
        <>
            <CommonCard
                title=" CONTACT US"
                home="HOME"
                service="CONTACT US"
            />
            <Container>
            <Row>
                <Col className="contact-info col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="search">
                        <div className="widget widget-contact">
                            <h3 className="widge-title ">Contact Info</h3>
                            <strong>Flower.</strong>
                            <br /> 1355 Market Street, Suite 900
                            <br /> San Francisco, CA 94103
                            <br title="Phone" /> (123) 456-7890
                            <br />  Contact Name
                            <br />
                            <Link className="contactlink" to="mailto:#">yourdomain@gmail.com</Link>
                        </div>
                    </div>

                    <div className=" react-icons wiget-search">
                        <div>
                            <div className="social-circle">
                            <Link  className="icons" to="/"><FaFacebookF /></Link>
                            <Link  className="icons" to="/"><FaGooglePlusG /></Link>
                            <Link  className="icons" to="/"><FaTwitter /></Link>
                            <Link  className="icons" to="/"><FaYoutube /></Link>
                             
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <div className="Heading">
                        <h1>CONTACT US</h1>
                        <p> Please complete the form below. We'll do everything we can to respond to you as quickly as possible.</p>
                    </div>
                    {
                        ContactData.map((val, index) => {
                            return <ContactCommonData
                                key={index}
                                name={val.name}
                                phone={val.phone}
                                Email={val.Email}
                                subject={val.subject}
                                text={val.text}
                            />
                        })
                    }
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default Contact
