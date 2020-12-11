// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// import React from "react"
// import TodoItem from "./components/TodoItem"
// import Header from "./components/Header"
// import MainContent from "./components/MainContent"
// import Footer from "./components/Footer"

// function App() {
//   // return (
//   //   <div>
//   //     <Header />
//   //     <MainContent />
//   //     <Footer />
//   //   </div>
//   // )

//   const date = new Date();
//   //var hours = new date.getHours()
//   let timeOfDay
//   // Testing

//   const styles = {
//     fontSize: 30
//   }

//   if(date.getHours() < 12) {
//     timeOfDay = "Good morning"
//     styles.color = "#04756df"
//   } else if (date.getHours() < 17) {
//     timeOfDay = "Good afternoon"
//     styles.color = "#2e0927"
//   } else {
//     timeOfDay = "Good night"
//     styles.color = "#d90000"
//   }


//   return(
//     <h1 style={styles}>{timeOfDay}!</h1>
//   )
  
// }

// function App() {
//   return (
//     <div>
//       <TodoItem />
//       <TodoItem />
//       <TodoItem />
//       <TodoItem />
//     </div>
//   )
// }

// export default App

// import React from "react"
// import ContactCard from "./components/ContactCard"

// function App () {
//   return (
//     <div>
//       <ContactCard 
//       content = {{name:"Mr.Kittens", 
//       imgUrl:"http://placekitten.com/200/300",
//       phone:"(212) 555-1234",
//       email:"mrkittens2gmail.com"}} />
//     </div>
//   )
// }

// export default App

// import React from "react"
// import Joke from "./components/Joke"
// import jokesData from "./jokesData"


// function App () {

//   const jokesComponents = 
//   jokesData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer} />)


//   return (
//     <div>
//       {jokesComponents}
//     </div>
//   )
// }

// export default App


// import React from "react"
// import Product from "./components/Products"
// import productsData from "./productsData"

// function productComponents(props) {
  
// }

// class App extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       //answer: "good"
//       product: productsData
//     }   
//     this.handleChange = this.handleChange.bind(this)
    
//   }

//   handleChange(id) {
//     this.setState(prevState => {
//         const updatedProducts = prevState.product.map(product =>{
//             if(product.id === id) {
//                 product.bought = !product.bought
//             }
//             return product
//         })
//         return {
//             product: updatedProducts
//         }
//     })
//   }

//   render() {
//       const productComponents = this.state.product.map(product => <Product key={product.id} product={product} handleChange={this.handleChange}/>)
//     return (
//       <div>
//         {productComponents}
//       </div>
//     )
//   }

//     //   render() {
//     //     return (
//     //     <h1>How are you? {this.state.answer}</h1>
//     //     )
//     //   }

// }

// export default App


// import React, {Component} from "react"

// class App extends Component {
  
//   constructor() {
//     super()
//     this.state = {
//       name: "Gogos",
//       age: "20"
//     }
//   }

//   render() {
//     return(
//       <div>
//         <h1>{this.state.name}</h1>
//         <h1>{this.state.age} years old</h1>
//       </div>
//     )
//   }

// }

// export default App


// import React from "react"

// class App extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             isloggedIn: true
//         }
//     }

//     render() {
//         return(
//             <div>
//                 <h1>You are currently logged? {this.state.isloggedIn ? "in" : "out"}</h1>
//             </div>
//         )
//     }
// }

// export default App

// import React from "react"

// function handleClick() {
//     console.log("I was clicked")
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>
//                 <br />
//                 <br />
//                 <button onClick={handleClick}>Click me</button>
//             </div>
//         )
//     }
// }

// export default App

// import React from "react"

// class App extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }           
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         )
//     }
// }

// export default App


// import React from "react"

// class App extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }           
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>CLick me!</button>
//             </div>
//         )
//     }
// }

// export default App

// import React from "react"
// import Conditional from "./Conditional"

// class App extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       }
//     )}, 1500)
//   }

//   render() {
//     return (
//       <div>
//         {this.state.isLoading ?
//         <h1>Loading</h1> : 
//         <Conditional />}
//       </div>
//     )
//   }
// }

// export default App


// import React from "react"
// //import Conditional from "./Conditional"

// class App extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       }
//     })
//   }

//   render() {
//     let buttonText = this.state.isLoggedIn ? "Log out" : "Log in"
//     return ( 
//       <div>
//         <button onClick={this.handleClick}>{buttonText}</button>
//         <h1>{this.state.isLoggedIn ? <h1>LoggedIn</h1> : <h1>LoggedOut</h1>}</h1>
//       </div>
//     )
//   }
// }

// export default App





// import React from "react"
// //import Conditional from "./Conditional"

// class App extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       loading: false,
//       character: {}
//     }
//   }

//   componentDidMount() {
//     this.setState({
//       loading: true
//     })
//     fetch("https://swapi.dev/api/people/1")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           loading: false,
//           character: data
//         })
//       })
//   }

//   render() {
//     return ( 
//       <div>
//         <h2>{this.state.loading ? "Loading..." : this.state.character.name}</h2>
//       </div>
//     )
//   }
// }

// export default App







// import React from "react"

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: ""
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     const {name, value} = event.target
//     this.setState({
//       [name]: value
//     })
//   }

//   render() {
//     return (
//       <form>
//         <input type="text"
//               value={this.state.firstName} 
//               name="firstName"
//               placeholder="first Name"
//               onChange={this.handleChange} />
//         <h1>{this.state.firstName}</h1>
//       </form>
//     )
//   }
// }

// export default App



// import React from "react"
// import Form from "./Form"

// class App extends React.Component {
//   render() {
//     return (
//       <Form />
//     )
//   }
// }

// export default App