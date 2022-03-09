import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Commondata from "./Commondata"
import Common from "./Common"
import CommonCard from './CommonCard';
import "../src/SERVICE.css";
function ServiceList() {
    return (
        <>

            <CommonCard
                title="SALON AND BARBAR SERVICE"
                home="HOME"
                service="SERVICE LIST"
            />
            {/* <div className="content"> */}
                <Container className="p-0">

                    {
                        Commondata.map((value, index) => {
                            return <Common
                                key={index}
                                imgsrc={value.imgsrc}
                                Cardtitle={value.Cardtitle}
                                Cardtext={value.Cardtext}
                            />
                        })

                    }
                </Container>
                <Container fluid className="p-0">
                <div className="space-small Box">
                    <div className="first-col">
                        <Container>
                        <Row>
                            <Col md={8}>
                                <h1 className="cta-title">BOOK YOUR ONLINE APPOINTMENT</h1>
                                <p className="cta-text"> Call to action button example for booking appointment for patients.</p>
                            </Col>
                            <Col md={4}>
                                <Link href="/" className=" button-lg">Call to action Button</Link>
                            </Col>
                        </Row>
                        </Container>

                    </div>

                </div>
                </Container>

            {/* </div> */}
        </>
    )
}

export default ServiceList
