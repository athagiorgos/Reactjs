import React from "react"

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        //const target = event.target
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Name: </label>
                    <input type="input" 
                    value={this.setState.value}
                    name="value"
                    onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}

export default Form