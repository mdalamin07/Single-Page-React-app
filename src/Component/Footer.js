import React from 'react';
import "./Footer.css";
import FooterText from './FooterText';
import * as Scroll from 'react-scroll';


const Footer = () => {
    let Link = Scroll.Link;
    return (
        <section id="footer" className="contact">
            <div className="container py-4">
                <div className="row">
                    <div className="col-sm-3">
                        <Link to="home" className="mt-3">Web Dev</Link>
                    </div>
                    <div className="col-sm-3">
                        <FooterText
                            head="NEW YORK"
                        />
                    </div>
                    <div className="col-sm-3">
                        <FooterText
                            head="LONDON"
                        />
                    </div>
                    <div className="col-sm-3">
                        <FooterText
                            head="MADRID"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
