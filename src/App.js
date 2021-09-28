import React, {useState} from 'react';
import {
    Switch,
    Route,
    Link,
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



function App() {
    const [isAuthenticated, toggleIsAuthenticated ] = useState(true);


  return (
      <>
          <nav>
            <Navbar />
          </nav>
          <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/blogposts">
                    <Blogposts />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
          </>
  );
}

export default App;
