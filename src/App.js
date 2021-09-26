import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import Home
    from "./components/Home";
import Login
    from "./components/Login";
import Navbar
    from "./components/Navbar";
import Blogposts
    from "./components/Blogposts";
import Blog
    from "./components/Blog";


function App() {


  return (
      <Router>
          <nav>
              <Navbar />
          </nav>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/blogposts">
                    <Blogposts />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
              Maak hier jouw prachtige blog-applicatie!
      </Router>
  );
}

export default App;
