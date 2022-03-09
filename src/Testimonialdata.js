import React from 'react';
import { Row, Col} from 'react-bootstrap';

function Testimonialdata(props) {
    return (
        <>
            <div className="Block">
                <Row className="">
                    <Col>
                        <div className="testimonial-block">
                            <div className="testimonial-content">
                                <p className="testimonial-text">{props.text}</p>
                            </div>
                            <div className="testimonial-info">
                                <h4 className="testimonial-name">{props.name}</h4>
                                <span className="testimonial-meta">{props.year}</span> <span className="testimonial-meta">{props.customer}</span> </div>
                        </div>
                    </Col>
                </Row>
            </div>
        
        </>
    )
}

export default Testimonialdata
