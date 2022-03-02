import React from 'react';
import "./Blog.css";

const BlogCard = (props) => {
    return (
        <>
           <div className="card blog_card mb-5">
                <img src={props.image} className="card-img-top" alt="blog"/>
                <div className="card-body">
                    <h5 className="card-title">Cache Invalidation Strategies
                        <br/>With Varnish Cache
                    </h5>
                    <p className="card-text">Shortly thereafter, I was working with RetailMeNot, tasked with designing its iOS and Android app tutorial.
                        <br/>The product team wanted to make sure
                        hat users were clear about the value
                    </p>
                </div>
            </div> 
        </>
    );
}

export default BlogCard;
