import React from 'react';
import "./About.css";

const AboutCard = (props) => {
    return (
        <>
            <div className="col-sm-4 mb-5">
                <div className="card abcard text-center">
                    <div className="mycard_img">
                    <props.icon style={{color:"#0bae5c",fontSize:"2.8rem"}}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutCard;
