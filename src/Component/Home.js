import React from 'react';
import Navbar from "./Navbar";
import "./Home.css";
import * as Scroll from 'react-scroll';

function Home() {
    let Link = Scroll.Link;
    return (
        <section className="home pb-5">
        <Navbar/>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 overflow-hidden">
                        <h1>We’re here to create your <br/>
                        online presense and style</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse <br/> 
                        mattis orci dapibus risus dignissim, viverra  pellentesque arcu <br/>
                        ullamcorper. Mauris a tincidunt lectus. Proin nec venenatis quam. </p>
                        <Link to="contact" className="btn btn-success">START TODAY WITH US</Link>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </section>
    )
}

export default Home;
