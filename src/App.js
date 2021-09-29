import React, {useState} from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

import './App.css';
import Home
    from "./components/Home";
import Login
    from "./components/Login";
import Blogposts
    from "./components/Blogposts";

function App() {
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <>
          <nav className="nav-bar">
              <ul>
                  <Link to="/">Home</Link>
                  {isAuthenticated &&
                  <Link to="/blogposts">Blogposts</Link>
                  }
                  {isAuthenticated
                      ? <button onClick={() => toggleIsAuthenticated(false)}>Uitloggen</button>
                      : <Link to="/login">Login</Link>
                  }
              </ul>
          </nav>
          <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/blogposts">
                    <Blogposts isAuthenticated={isAuthenticated} />
                </Route>
                <Route exact path="/login">
                    <Login toggleIsAuthenticated={toggleIsAuthenticated} isAuthenticated={isAuthenticated}/>
                </Route>
            </Switch>
          </>
  );
}

export default App;
