import React from 'react';
import "../src/Home.css";
import { Card, Row, Col } from 'react-bootstrap';


function Home(props) {
    return (
        <>
            <div className="cards">
                <Row className="background">
                    <Col md={12}>
                        <Card>
                            <Card.Img variant="top" src={props.imgsrc} style={{ width: "80px", height: "80px" }} />
                            <Card.Body>
                                <Card.Title>{props.Cardtitle}</Card.Title>
                                <Card.Text>
                                    {props.Cardtext} template
                                </Card.Text>
                                <div className="price">$45</div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home
