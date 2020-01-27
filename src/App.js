import React from 'react';
import './App.css';
import PaintingSlide from "./components/PaintingSlide/PaintingSlide";
import ChimeSlide from "./components/ChimeSlide/ChimeSlide";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Cv from "./components/Cv/Cv";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const state = {
  name: "Austin"
};

function App() {
  return (
    <Router>
      <div className="main">
        <nav>
        <h2>Hello there</h2>
          <ul id="x">
            <li>
              <Link to="/" className="link">About</Link>
            </li>
            <li>
              <Link to="/Paintings" className="link">Paintings</Link>
            </li>
            <li>
              <Link to="/Chimes" className="link">Chimes</Link>
            </li>
            <li>
              <Link to="/Cv" className="link">Cv</Link>
            </li>
            <li>
              <Link to="/Contact" className="link">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Chimes">
            <ChimeSlide name={"Chimes"}/>
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
            <About name={state.name}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;