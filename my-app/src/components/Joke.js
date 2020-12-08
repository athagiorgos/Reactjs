import React from "react"

function Joke(props) {

    // if(props.content.question == null) {
    //     return (
    //         <div>
    //             <p>{props.content.answer}</p>
    //         </div>
    //     )
    // }

    // return (
    //     <div>
    //         <p>{props.content.question}</p>
    //         <p>{props.content.answer}</p>
    //     </div>
    // )

    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>{props.question}</h3>
            <h3 style={{color: !props.question && "#888"}}>{props.answer}</h3>
        </div>
    )
}

export default Joke