import React from 'react';

export default function Login({toggleIsAuthenticated, isAuthenticated}) {

    return (
        <>
            <h1>Login Pagina</h1>
            <p>
                Druk op de knop om in te loggen!
            </p>
            {isAuthenticated
                ? <button onClick={() => toggleIsAuthenticated(false)}>Uitloggen</button>
                : <button onClick={() => toggleIsAuthenticated(true)}>Inloggen</button>
            }
        </>
    );
}