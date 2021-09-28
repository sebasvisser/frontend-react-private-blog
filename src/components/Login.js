import React, {useState} from 'react';
// import '../App.css';

export default function Login({toggleIsAuthenticated, isAuthenticated}) {

    // const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
    return (
        <>
            <h1>Login Pagina</h1>
            <p>
                Druk op de knop om in te loggen!
            </p>
            {/*<button onClick={() => toggleIsAuthenticated(true)}>Inloggen</button>*/}
            {isAuthenticated
                ? <button onClick={() => toggleIsAuthenticated(false)}>Uitloggen</button>
                : <button onClick={() => toggleIsAuthenticated(true)}>Inloggen</button>
            }
        </>
    );
}