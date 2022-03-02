import React from 'react';
import "./Common.css";

const Story = (props) => {
    return (
        <div className="common">
            <h1 className="mb-3">{props.head}</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat purus in ferment uectetur tortor id, pharetra lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat purus in ferment uectetur tortor id, pharetra lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.
            </p>
        </div>
        
    )
}

export default Story;
