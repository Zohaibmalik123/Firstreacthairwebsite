import React from 'react';
import { Row, Col, Nav, Card, Form, Container } from 'react-bootstrap';
import CommonCard from './CommonCard';
import postimg from "../src/Images/postimg.jpg";
import Blogsingle from "../src/Images/S1.jpg";
import Beardimage from "../src/Images/S2.jpg";
import blogimg from "../src/Images/blogimg.jpg";
import BlogCommon from './BlogComment';
import BlogCommentData from './BlogCommentData';
import { Blogcontact } from './ContactData';
import BlogContact from './BlogContact';
import "../src/NewsSingle.css";
import { FaSearch } from "react-icons/fa"
// import postimg from "../src/Images/postimg.jpg";



function BlogSingle() {
    return (
        <>
            <CommonCard
                title="BLOG SINGLE"
                home="HOME"
                service="BLOGSINGLE"
            />
            <Container>
                <Row>
                    <Col md={8}>
                        <img className="post-holder" src={postimg} alt="loading" style={{ width: "100%", height: "400px" }} />
                        <div className="post-content">
                            <div className="post-header">
                                <h2>RESPONSIVE WEBSITE TEMPLATES FREE DOWNLOAD FOR BUSINESS</h2>
                                <div className="meta">
                                    <p className="meta-date">Dec 24, 2020 </p>
                                    <span className="meta-comment"> <Nav.Link href="/" className="meta-link">05 Comment </Nav.Link></span>
                                    <p className="meta-date">BY ADMIN CATEGORY NAME </p>
                                </div>
                                <div className="News-paragraph">
                                    <p>Responsive website templates free download for business intervention rabitur ante lorem ipsumporta ces convallis is physical medicine of the pain diagnosisognosis.</p>
                                    <p> Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col>
                                <img className="Blog-post" src={Blogsingle} alt="loading" style={{ width: "100%", height: "210px" }} />
                            </Col>

                            <Col>
                                <p className="Blogparagraph">Etiam leo lectundit etest euonsequat congue dianas sapien orciplacerat vitae nibh necpretium elementum ligcongue neque a augue ultricieugiat lacus tincidunt </p>
                                <p className="Blogparagraph">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                            </Col>
                        </Row>

                        <p className="responsive">Praesent vel aliquet urnaauris molestie sollicitudin nisl non volutpatm mollis eros lacusac lorem tristique arcu facilisis sedamus ullamcorper accumsan augue quis egestas.
                            <hr />
                        </p>


                        <Row>
                            <h2 className="related">RELATED POST</h2>
                            <Col className="">
                                <img className="Blog-post" src={postimg} alt="loading" style={{ width: "100%", height: "190px" }} />

                                <div className="related-post-content">
                                    <h3 className="related-title">FREE HAIR SALON WEBSITE TEMPLATES DOWNLOAD  IN </h3>
                                    <div ><Nav.Link href="/" className="post-meta">"Free Website Template"</Nav.Link></div>
                                </div>

                                <Card className="cta-card" style={{ width: '22rem' }}>
                                    <Card.Body>
                                        <Card.Title><Nav.Link className="prev-link" href="/">PREVIOUS POST </Nav.Link></Card.Title>
                                        <Card.Text>
                                            <h6><Nav.Link href="/" className="title-single">Praesent Nonaugue Lacuisque Nemetu</Nav.Link></h6>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                <img className="Blog-post" src={Beardimage} alt="loading" style={{ width: "100%", height: "190px" }} />

                                <div className="related-post-content">
                                    <h3 className="related-title">HTML5 WEBSITE DESIGN TEMPLATE</h3>
                                    <div><Nav.Link href="/" className="post-meta">"Free Bootstrap Website Template"</Nav.Link></div>
                                </div>

                                <Card className="blog-link" style={{ width: '22rem' }}>
                                    <Card.Body>
                                        <Card.Title><Nav.Link className="next-link" href="/">Next POST </Nav.Link></Card.Title>
                                        <Card.Text className="next-post">
                                            <h6><Nav.Link href="/" className="title-single">Maecenas Finibus Ultrices Sleger</Nav.Link></h6>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                        <div className="post-blog my-5">
                            <Row>
                                <Col md={3}>
                                    <img className="img-margin img-blog" src={blogimg} alt="loading" style={{ height: "140px" }} />
                                </Col>
                                <Col md={9}>
                                    <div>
                                        <h2><Nav.Link href="https://easetemplate.com/" className="title title-blog" target="_blank">THOMAS WARREN</Nav.Link></h2>
                                        <p className="weightblog">Etiam laoreet sitamet purus sed vestibulu ullam cursus lacus eget pharetra accumsan ante metus tinante in ones leousce in consectetur lacus non efficiturex.</p>
                                        <Nav.Link href="/" className="button-default">VIEW ALL POST</Nav.Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="comment">
                            <h3>04 COMMENTS</h3>
                            <hr />
                        </div>

                        {
                            BlogCommon.map((val, index) => {
                                return <BlogCommentData
                                    key={index}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    date={val.date}
                                    paragraph={val.paragraph}
                                />
                            })
                        }
                        {
                            Blogcontact.map((val, index) => {
                                return <BlogContact
                                    key={index}
                                    comment={val.comment}
                                    name={val.name}
                                    Email={val.Email}
                                    website={val.website}
                                />
                            })
                        }

                    </Col>
                    <Col md={4}>
                        <div className="widget-search widget-call-to-action my-5">
                            <Form.Group as={Col} controlId="">
                                <Form.Control className="cta-search" type="" placeholder="Search" />
                                <div className="search-icon"><FaSearch /></div>
                            </Form.Group>
                        </div>
                        <div className="widget-width widget-call-to-action">
                            <ul className="listnone">
                                <h3 className="cta-margin"> CATEGORIES </h3>
                                <li><Nav.Link className="tags-single" href="https://easetemplate.com/downloads/category/free-website-template/">Free Website Template</Nav.Link></li>
                                <li><Nav.Link className="tags-single" href="https://easetemplate.com/downloads/beauty-salon-websites-templates-free-download/">Beauty Website Template</Nav.Link></li>
                                <li><Nav.Link className="tags-single" href="https://easetemplate.com/downloads/fitness-gym-website-template-free-download/">Fitness Website Template</Nav.Link></li>
                                <li><Nav.Link className="tags-single" href="https://easetemplate.com/downloads/yoga-studio-yoga-website-template-free/">Yoga Website Template</Nav.Link></li>
                            </ul>
                        </div>

                        {/* <Container>

                            <div className="my-block">
                            <h3>RECENT POST</h3>
                                <Row>
                                    <Col md={4}>
                                        <img className="img-style " src={postimg} alt="loading" style={{ width: "100%", height: "50px" }} />
                                    </Col>
                                    <Col md={8}>
                                        <div className="my-content">
                                            <h2><Link href="https://easetemplate.com/" className="recent-title" target="_blank">"COSMETICS WEBSITE TEMPLATES FREE DOWBLOAD"</Link></h2>
                                            <p className="meta"> <span className="meta-date">1 Jan, 2018</span></p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container> */}

                        <div className="widget-date">
                            <ul className="listnone">
                                <h3 className="cta-margin"> Archives </h3>
                                <li><Nav.Link className="tags-single" href="/"> 8 March, 2020</Nav.Link></li>
                                <li><Nav.Link className="tags-single" href="/">11 feb,2020</Nav.Link></li>
                                <li><Nav.Link className="tags-single" href="/">22 jan, 2020</Nav.Link></li>
                            </ul>
                        </div>

                        <div className="wdget widget-tags">
                            <h2 className="wdget-title"> TAGS </h2>
                            <Nav.Link href="/">HTML5</Nav.Link>
                            <Nav.Link href="/">Bootstrap</Nav.Link>
                            <Nav.Link href="/">Website Design</Nav.Link>
                            <Nav.Link href="/">Free Website Design</Nav.Link>
                            <Nav.Link href="/">HTML5 Templates</Nav.Link>
                            <Nav.Link href="/">Free Website Templates</Nav.Link>
                        </div>


                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default BlogSingle
