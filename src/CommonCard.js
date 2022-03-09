import React from 'react';
import Img from "../src/Images/img1.jpg";
import { Card, Breadcrumb, Container } from 'react-bootstrap';

function CommonCard(props) {
    return (
        <>
        <Container fluid className="p-0">
            <Card>
                <Card.Img src={Img} alt="Card image" style={{ width: "100%", height: "360px" }} />
                <Card.ImgOverlay>
                    <Card.Text>
                        <h1 className="page-title">
                            {props.title}
                        </h1>
                    </Card.Text>
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item className="breadcrumb-item" href="/">{props.home}</Breadcrumb.Item>
                        <Breadcrumb.Item active>{props.service}</Breadcrumb.Item>
                    </Breadcrumb>
                </Card.ImgOverlay>
            </Card>
            </Container>
        </>
    )
}

export default CommonCard
