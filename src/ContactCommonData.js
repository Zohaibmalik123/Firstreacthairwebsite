import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap';

function ContactCommonData(props) {
    return (
        <>
            <Form className="form">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>{props.name}</Form.Label>
                        <Form.Control className="cta-border" type="text"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>{props.phone}</Form.Label>
                        <Form.Control className="cta-border" type="Number"  />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>{props.Email}</Form.Label>
                        <Form.Control className="cta-border" type="email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGrid" >
                        <Form.Label>{props.subject}</Form.Label>
                        <Form.Control className="cta-border" type="text" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3 textarea" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{props.text}</Form.Label>
                    <Form.Control className="cta-border" as="textarea" rows={5} />
                </Form.Group>

                <Button className="btn button-default" type="submit">
                    SEND MESSAGE
                </Button>
            </Form>
        </>
    )
}
export default ContactCommonData;
