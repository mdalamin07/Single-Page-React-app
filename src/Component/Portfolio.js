import React from 'react';
import "./Portfolio.css";
import Common from "./Common";

const Portfolio = () => {
    return (
        <div>
            <section id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 py-5">
                        <Common
                            head="Our Experience"
                        />
                        <button className="btn btn-outline-light mt-3">View case studies</button>
                        </div>
                        <div className="col-sm-6 py-5 skill">
                            <h1>Skills</h1>
                            <div className="my_skill">
                                <span>HTML</span>
                                <div className="progress" style={{height:"10px"}}>
                                    <div className="progress-bar" role="progressbar" style={{width: "90%",backgroundColor:"#0bae5c",fontSize:"10px"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>
                            <div className="my_skill">
                                <span>CSS</span>
                                <div className="progress" style={{height:"10px"}}>
                                    <div className="progress-bar" role="progressbar" style={{width: "80%",backgroundColor:"#0bae5c",fontSize:"10px"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>
                            <div className="my_skill">
                                <span>JavaScript</span>
                                <div className="progress" style={{height:"10px"}}>
                                    <div className="progress-bar" role="progressbar" style={{width: "60%",backgroundColor:"#0bae5c",fontSize:"10px"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>
                            <div className="my_skill">
                                <span>Node Js</span>
                                <div className="progress" style={{height:"10px"}}>
                                    <div className="progress-bar" role="progressbar" style={{width: "50%",backgroundColor:"#0bae5c",fontSize:"10px"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                </div>
                            </div>
                            <div className="my_skill">
                                <span>MongoDb</span>
                                <div className="progress" style={{height:"10px"}}>
                                    <div className="progress-bar" role="progressbar" style={{width: "70%",backgroundColor:"#0bae5c",fontSize:"10px"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio;
