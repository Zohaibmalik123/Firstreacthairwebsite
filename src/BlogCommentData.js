import React from 'react'
import { Link } from 'react-router-dom'


function BlogCommentData(props) {
    return (
        <>
            <div className="comment-body">
                <div className="comment-author"><img src={props.imgsrc} alt="" className="img-circle"/> </div>
                    <div className="comment-info">
                        <div className="comment-header">
                            <div className="comment-meta comment-meta-date">{props.date}</div>
                            <h4 className="user-title">{props.title}</h4>
                        </div>
                        <div className="comment-content">
                            <p>{props.paragraph}</p>
                        </div>
                        <div className="reply"><Link href="/" className="btn-link">Reply</Link></div>
                    </div>
                </div>
        </>
    )
}

export default BlogCommentData
