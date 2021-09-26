import React, {useState} from 'react';
// import '../App.css';

export default function Login() {
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
    return (
        <>
            <h1>Login Pagina</h1>
            <p>
                Button werkt nog niet goed.. is ook anders dan de navbar..Daarom comments zodat de rest wel compiled
            </p>
            {isAuthenticated
                ? <button onClick={() => toggleIsAuthenticated(true)}>Inloggen</button>
                : <button onClick={() => toggleIsAuthenticated(false)}>Uitloggen</button>
            }
        </>
    );
}