import React from 'react';
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
      <>
          <nav>
              <Navbar />
          </nav>
            <section>
                <Home />
                <Blogposts />
                <Login />
              Maak hier jouw prachtige blog-applicatie!
            </section>
      </>
  );
}

export default App;
