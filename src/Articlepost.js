import React from 'react';
import { Nav, Row, Col,Container } from 'react-bootstrap';
import {Link} from "react-router-dom"

function Articlepost(props) {
    return (
        <>
            <Container className="article">
                <div className="my-block">
                    <Row>
                        <Col md={6}>
                            <img className="img-style " src={props.imgsrc} alt="loading" style={{ width: "100%", height: "355px" }} />
                        </Col>
                        <Col md={5}>
                            <div className="my-content">
                                <h2><Link href="https://easetemplate.com/" className="Article-title pt-5" target="_blank"> {props.title}</Link></h2>
                                <p className="meta"> <span className="meta-date">{props.date}</span> <span ><Nav.Link className="meta-comment" href="/">(12) Comments</Nav.Link></span> <span className="meta-by">BY<Nav.Link className="meta-author" href="/">Author</Nav.Link></span></p>
                                <p className="card-paragraph">{props.paragraph}</p>
                                <Nav.Link href="/" className="btn button-default">{props.button}</Nav.Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Articlepost

