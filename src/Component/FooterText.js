import React from 'react'

const FooterText = (props) => {
    return (
        <>
            <h6>{props.head}</h6>
            <p>
                Address goes here in a one or two 
                lines, maybe lorem ipsum
                <br/>
                <br/>
                +00 000 000 00 <br/>
                info@domen.com 
            </p>
        </>
    )
}

export default FooterText;
