import React, { useState } from 'react';

const HARDCODED_USER = 'admin';
const HARDCODED_PASS = 'admin';

export default function LoginPage({ onLogin }) {
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const user = form.userName?.value?.trim() ?? '';
        const pass = form.password?.value?.trim() ?? '';
        setError('');
        if (user === HARDCODED_USER && pass === HARDCODED_PASS) {
            onLogin();
        } else {
            setError('Invalid username or password.');
        }
    }

    return (
        <div className="login-container">
            <h1>Test Manager</h1>
            <form id="login-form" className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" name="userName" required autoComplete="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required autoComplete="current-password" />
                </div>
                <button type="submit" id="submitLogin">Login</button>
                {error && <p id="login-error" className="error-message" aria-live="polite">{error}</p>}
            </form>
        </div>
    );
}