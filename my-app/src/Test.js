import React from "react"


class Header extends React.Component {

    render(props) {
        return (
            <div>
                <p>Welcome, {this.props.username}!</p>
            </div>
        )
    }
}

class Greeting extends React.Component {
    render() {
        
            const date = new Date();
            //var hours = new date.getHours()
            let timeOfDay

            if(date.getHours() < 12) {
                timeOfDay = "Good morning"               
            } else if (date.getHours() < 17) {
                timeOfDay = "Good afternoon"              
            } else {
                timeOfDay = "Good night"
            }
        return (
            <h1>{timeOfDay}</h1>
        )
    }
}

class Test extends React.Component {
    render() {
        return (
            <div>
                <Header username="Gogos"/>
                <Greeting />
            </div>
        )
    }
}

export default Test