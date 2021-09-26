import React, {useState} from 'react';

export default function Login() {
    const [isLoggedIn, toggleIsLoggedIn ] = useState(true);

    return (
        <>
            <h1>Login Pagina</h1>
            <p>
                Button werkt nog niet goed.. is ook anders dan de navbar..
            </p>
            {isLoggedIn
                ? <button onClick={() => toggleIsLoggedIn(true)}>Inloggen</button>
                : <button onClick={() => toggleIsLoggedIn(false)}>Uitloggen</button>
            }
        </>
    );
}