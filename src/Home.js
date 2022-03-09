import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import Img from "../src/Images/img1.jpg"
import img from "../src/Images/img2.jpg"
import image from "../src/Images/H4.jpg"
import postimg from "../src/Images/postimg.jpg";
import Commondata from "./Commondata"
import Common from "./Common"
import CommonTestimonial from "./CommonTestimonial"
import { Card, Nav, Button, Row, Col, Container } from 'react-bootstrap';
import Testimonialdata from './Testimonialdata';
import '../src/Home.css';

const axios = require('axios');


function Home() {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        setTimeout(function(){
            setTestimonials(CommonTestimonial)
        }, 10000);
        
            // Make a request for a user with a given ID
            // axios.get('https://jsonplaceholder.typicode.com/users')
            // .then(function (response) {
            //     setTestimonials(response.data);
            // })
            // .catch(function (error) {
            //     // handle error
            //     console.log(error);
            // })
    }, [])
    return (
        <>
            <Container fluid className="p-0">
                <Card className="bg-dark text-white">
                    <Card.Img src={Img} alt="Card image" style={{ width: "100%", height: "575px" }} />
                    <Card.ImgOverlay className="col-lg-5 col-md-5 col-sm-5 col-xs-10 my-5 mx-5">
                        <Card.Text>
                            <h1 className="paragraph para1">
                                HAIR SALON WEBSITE TEMPLATES FREE DOWNLOAD 
                            </h1>
                        </Card.Text>
                        <Card.Text> <h5 className="style"> Your Types. Your Style. Your Color.</h5></Card.Text>
                        <Nav.Link href="/">
                            <Button className="Btn">Your Slider button</Button>
                        </Nav.Link>
                    </Card.ImgOverlay>
                </Card>
            </Container>
            <Container>
                <div className="">
                    <div className="text-center">
                        <h1 className="text-size">SALON AND BARBAR SERVICE</h1>
                        <h5 className="small-title ">WE HELP YOU LOOK GREAT</h5>
                    </div>
                </div>
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
                <Link href="/">
                    <Button className="btn-default">VIEW ALL SERVICE</Button>
                </Link>
            </Container>

            <Container fluid className="p-0">
            <div className="block">
                <Container>
                    <Row>

                        <Col md={5} className="img-responsive">
                            <img src={image} alt="loading" style={{ width: "100%", height: "485px" }} />
                        </Col>

                        <Col md={7}>
                            <div className="well-block">
                                <h1>MEN'S SALON WEBSITE TEMPALTES</h1>
                                <h5 className="small">BEST EXPERIENCE EVER</h5>
                                <p className="block-paragraph">Free Hair Salon Website Templates for your hair salon shop or business. <Nav.Link className="block-link" href="https://easetemplate.com/">Free Website Template Download It now!</Nav.Link></p>
                                <p className="block-paragraph">Bootstrap templates free download idcondi mentum utturpis one fuscenec justo idle libero pharetra posuere aliquam tempus is porttitor atfinibus sollicitudin namiam.</p>
                                <p className="block-paragraph">Best Free HTML CSS Website Templates for salon and hair cutting business. All features are clean designed</p>

                                <Nav.Link className="blk-btn" href="/">VIEW MORE ABOUT US</Nav.Link>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </div>
            </Container>
            <div className="text-center">
                <h1>TESTIMONIALS</h1>
                <h6 className="small-title ">WHAT HAPPY CLIENT SAY</h6>
            </div>

            <Container>
                {
                    testimonials.map((val, index) => {
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

            <Container fluid className="p-0">
                <div className="Top-space">
                    <Card>
                        <Card.Img className="before-text" src={img} alt="Card image" style={{ width: "100%", height: "452px" }} />
                        <Card.ImgOverlay className="col-lg-11 col-md-11 col-sm-11 col-xs-11 mx-5">
                            <Card.Text>
                                <h1 className="colorpara">
                                    HAIR SALON WEBSITE TEMPLATES
                                </h1>
                            </Card.Text>
                            <Card.Text> <h5 className="home-text"> You can download and use these FREE HTML templates for your salon and beauty shop and store</h5></Card.Text>
                            <Nav.Link href="/https://easetemplate.com/downloads/category/free-website-template/">
                                <Button className="btn button-default">Call To Action Buttons</Button>
                            </Nav.Link>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </Container>


            <Container>
                <div className="text-article">
                    <h1>LATEST NEWS & ARTICLES</h1>
                </div>

                <div className="post-block">
                    <Row>
                        <Col md={6}>
                            <img className="img-margin" src={postimg} alt="loading" style={{ width: "100%", height: "355px" }} />
                        </Col>
                        <Col md={6}>
                            <div className="post-content">
                                <h2><Nav.Link href="https://easetemplate.com/" className="title-post" target="_blank">COSMETICS WEBSITE TEMPLATES FREE DOWBLOAD</Nav.Link></h2>
                                <p className="meta"> <span className="meta-date"> 1 January 2018</span> <span ><Nav.Link className="meta-comment" href="/">(12) Comments</Nav.Link></span> <span className="meta-by">BY<Nav.Link className="meta-author" href="/">Author</Nav.Link></span></p>
                                <p className="weight">Cras dolor arcu porttitor atfinibus idcondi mentum uttu rpis one fuscenec justo idle libero pharetra posuere aliq uam tempus is porttitor atfinibus.</p>
                                <Nav.Link href="/" className="button-default">Read More</Nav.Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

        </>

    )
}

export default Home
