
import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://localhost:3000/login', {
                username,
                password,
            }, {
                headers: {
                    'UsuarioCodeMasters': '1234'
                }
            });

            const jwt = response.data.jwt;
            localStorage.setItem('jwt', jwt);
        } catch (error) {
            console.error('Error during login', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Entrar</button>
        </form>
    );
}