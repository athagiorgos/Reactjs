import React from "react"

function ContactCard(props) {
    return (
        <div>
            <img src={props.content.imgUrl} alt="img missing"/>
            <h3>{props.content.name}</h3>
            <p>{props.content.phone}</p>
            <p>{props.content.email}</p>
        </div>
    )
}

export default ContactCard