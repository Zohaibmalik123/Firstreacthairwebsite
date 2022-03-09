import React from 'react';
import CommonCard from './CommonCard';
import Articlepost from './Articlepost';
import ArticleData from './ArticlePostData';
import "../src/Blog.css"
import { Link } from 'react-router-dom';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import { Container } from 'react-bootstrap';

function BlogDefault() {
    return (
        <>
            <CommonCard
                title="BLOG NEWS PAGE"
                home="HOME"
                service="BLOG NEWS PAGE"
            />
            {
                ArticleData.map((val, index) => {
                    return <Articlepost
                        key={index}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        date={val.date}
                        button={val.button}
                        paragraph={val.paragraph}
                    />
                })
            }
            <Container>
                <div className="blog-block ">
                    <p className="text">“simple html templates free download. men hair salon website templates”</p>
                </div>
            </Container>
            <Container>
                <div className="number">
                   <Link className="page-link"><FaAngleDoubleLeft/></Link> 
                    <Link className="page-link activ" to="/service detail"> 1 </Link>
                    <Link className="page-link" to="/service detail"> 2 </Link>
                    <Link className="page-link" to="/service detail"> 3 </Link>
                    <Link className="page-link" to="/service detail"> 4 </Link>
                    <Link className="page-link" to="/service detail"> 5 </Link>
                    <Link className="page-link"><FaAngleDoubleRight/></Link> 
                </div>
            </Container>
        </>
    )
}

export default BlogDefault
