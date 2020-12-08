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

import React from "react"
import Joke from "./components/Joke"
import jokesData from "./jokesData"


function App () {

  const jokesComponents = 
  jokesData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer} />)


  return (
    <div>
      {jokesComponents}
    </div>
  )
}

export default App