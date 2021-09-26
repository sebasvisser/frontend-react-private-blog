import React, {useState} from 'react';
import {isAuthenticated, toggleIsAuthenticated} from './Navbar';

export default function Login() {
    // const [isLoggedIn, toggleIsLoggedIn ] = useState(true);

    return (
        <>
            <h1>Login Pagina</h1>
            <p>
                Button werkt nog niet goed.. is ook anders dan de navbar..
            </p>
            {isAuthenticated
                ? <button onClick={() => toggleIsAuthenticated(true)}>Inloggen</button>
                : <button onClick={() => toggleIsAuthenticated(false)}>Uitloggen</button>
            }
        </>
    );
}