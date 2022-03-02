import React from 'react';
import BlogCard from './BlogCard';
import b1 from "./image/android.png";
import b2 from "./image/app.png";
import b3 from "./image/marketing.png";

const Blog = () => {
    return (
        <section className="blog">
            <div className="container py-5">
                <h1 className="text-center mb-5">From the Blog</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <BlogCard
                            image={b1}
                        />
                    </div>
                    <div className="col-sm-4">
                        <BlogCard
                                image={b2}
                        />
                    </div>
                    <div className="col-sm-4">
                        <BlogCard
                            image={b3}
                        />
                    </div>
                </div>
            </div>
            <div className="bottom_blog py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Are you ready to go?</h3>
                            <p>Here the call to action area. Lorem ipsum dolor sit amet and click to the button</p>
                        </div>
                        <div className="col-sm-6 text-end mt-3">
                            <button className="btn btn-outline-light">START YOUR PROJECT</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;
