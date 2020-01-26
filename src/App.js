import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HOME from "./components/home";
import Goodbye from "./components/page";
import Users from "./components/users";

import PaintingSlide from "./components/PaintingSlide/PaintingSlide";
import Contact from "./components/Contact/Contact";
import Cv from "./components/Cv/Cv";


const state = {
  name: "Austin"
};

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <Router>
      <div className="main">
        <nav>
        <h2>Hello there</h2>
          <ul id="x">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Goodbye">Goodby</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/Paintings">Paintings</Link>
            </li>
            <li>
              <Link to="/Chimes">Chimes</Link>
            </li>
            <li>
              <Link to="/Cv">Cv</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Goodbye">
            <Goodbye name={state.name} />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/Chimes">
            <PaintingSlide name={"Chimes"}/>
          </Route>
          <Route path="/Paintings">
            <PaintingSlide name={"Paintings"}/>
          </Route>
          <Route path="/Cv">
            <Cv name={state.name}/>
          </Route>
          <Route path="/Contact">
            <Contact name={state.name}/>
          </Route>
          <Route path="/">
            <HOME name={state.name}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;