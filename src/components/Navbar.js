import React, {useState} from 'react';
import '../App.css';

export default function Navbar(){
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (
      <>
        <nav className="nav-bar">
            <ul>
                <li>Home</li>
                {isAuthenticated &&
                    <li>Blogposts</li>
                }
                {isAuthenticated
                    ? <button onClick={() => toggleIsAuthenticated(false)}>Uitloggen</button>
                    : <button onClick={() => toggleIsAuthenticated(true)}>Inloggen</button>
                }
            </ul>
        </nav>
      </>
    );
}