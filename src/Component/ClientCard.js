import React from 'react';
import "./ClientSay.css";
import client from "./image/client.jpg"

const ClientCard = () => {
    return (
        <>
            <div className="col-sm-6 mb-3">
                <p className="client_message">Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                <img src={client} alt="client" className="client"/>
                <span className="text-end">Joe Doe <br/><p>Creative Deirector at Gmoogle.com</p></span>
                {/* <h6>Creative Deirector at Gmoogle.com</h6> */}
            </div>
        </>
    )
}

export default ClientCard;
