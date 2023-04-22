// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./SideBar";
// import HomePage from "./HomePage";
// import AboutPage from "./AboutPage";

// function App() {
//   return (
//     // <Router>
//       <div className="App">
//         <SideBar />
//         <main>
//             <Route exact path="/" component={HomePage} />
//             <Route exact path="/about" component={AboutPage} />
//         </main>
//       </div>
//     // </Router>
//   );
// }

//get data HTTP request from dad

function App(){
  console.log("hi")

  return(
    <div>
      <SideBar />
    </div>
  );
}

export default App;
