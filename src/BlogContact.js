import React from 'react';
import {Form , Button}   from 'react-bootstrap';


function BlogContact(props) {
    return (
        <>
           <div className="blogform">
                <div className="blogtitle">
                    <h1>LEAVE A REPLY</h1>
                </div>
                <Form className="singleform">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="control-lable">{props.comment} *</Form.Label>
                        <Form.Control className="from-control" as="textarea" rows={4} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="control-lable">{props.name} *</Form.Label>
                        <Form.Control className="from-control" type="" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="control-lable">{props.Email} *</Form.Label>
                        <Form.Control className="from-control" type="Email" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="control-lable">{props.website} *</Form.Label>
                        <Form.Control className="from-control" type="url" placeholder="Website" />
                    </Form.Group>
                    <Button className="button-default" variant="primary" type="submit">
                        LEAVE A COMMENT
                    </Button>
                </Form>
            </div>  
        </>
    )
}

export default BlogContact
