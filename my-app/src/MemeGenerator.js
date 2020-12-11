import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            data: {}
        }
        
    }

    handleData() {
        fetch("")
        .then(response => response.json())
        .then(info => {
            this.setState({
                data: info
            })
        })
    }

    render() {
        return (
            <h1>Meme here</h1>
        )
    }
}

export default MemeGenerator