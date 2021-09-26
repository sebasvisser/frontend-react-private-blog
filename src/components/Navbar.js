import React, {useState} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Navbar(){
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
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
                    :                 <Link to="/login">Login</Link>
                }
            </ul>
        </nav>
      </>
    );
}