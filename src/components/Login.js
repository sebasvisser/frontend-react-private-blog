import React, {useState} from 'react';
// import '../App.css';

export default function Login() {
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
    return (
        <>
            <h1>Login Pagina</h1>
            <p>
                Druk op de knop om in te loggen!
            </p>
            {isAuthenticated
                ? <button onClick={() => toggleIsAuthenticated(true)}>Uitloggen</button>
                : <button onClick={() => toggleIsAuthenticated(false)}>Inloggen</button>
            }
        </>
    );
}