import React from 'react';
import { Container } from 'react-bootstrap';
import CommonCard from './CommonCard';
import CommonTestimonial from './CommonTestimonial';
import Testimonialdata from './Testimonialdata';

function FeaturesTestimonial() {
    return (
        <>
            <CommonCard
                title="TESTIMONIALS"
                home="HOME"
                service="TESTIMONIALS"
            />
            <Container>

                {
                    CommonTestimonial.map((val, index) => {
                        return <Testimonialdata
                            key={index}
                            text={val.text}
                            name={val.name}
                            year={val.year}
                            customer={val.customer}
                        />
                    })
                }
                {
                    CommonTestimonial.map((val, index) => {
                        return <Testimonialdata
                            key={index}
                            text={val.text}
                            name={val.name}
                            year={val.year}
                            customer={val.customer}
                        />
                    })
                }

            </Container>
        </>
    )
}

export default FeaturesTestimonial
