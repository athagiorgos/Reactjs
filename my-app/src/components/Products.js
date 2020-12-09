import React from "react"

function Product(props) {
    return (
        <div>
            <input type="checkbox" checked={props.product.bought} onChange={() => props.handleChange(props.product.id)}></input>
            <input type="checkbox" checked={props.product.bought}
            onChange={() => {
                console.log("Changed")
            }}></input>
            <h2>{props.product.name}</h2>
            <h2>{props.product.price}</h2>
            <h2>{props.product.description}</h2>
            <br/>
            <br/>
        </div>
    )
}

export default Product