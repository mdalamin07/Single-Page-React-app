import React from 'react';
import ClientCard from './ClientCard';
import "./ClientSay.css";

const ClientSay = () => {
    return (
        <div className="client py-5">
            <h1 className="text-center mb-5">Our Clients Sayes</h1>
            <div className="container">
                <div className="row">
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                </div>
            </div>
        </div>
    )
}

export default ClientSay;
