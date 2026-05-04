import  { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Beimportáljuk a stílust

const Login = () => {
    const [creds, setCreds] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Korábbi hiba törlése
        try {
            const res = await axios.post('http://localhost:3000/users/login', creds);
            alert(`Sikeres belépés! Üdvözöljük, ${res.data.username}!`);
            // Itt később átirányíthatod a felhasználót a főoldalra: window.location.href = "/";
        } catch (err) {
            setError(err.response?.data?.error || 'Hibás e-mail vagy jelszó!');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Bejelentkezés</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>E-mail cím</label>
                        <input 
                            type="email" 
                            placeholder="pelda@email.com" 
                            onChange={e => setCreds({...creds, email: e.target.value})} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Jelszó</label>
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            onChange={e => setCreds({...creds, password: e.target.value})} 
                            required 
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-btn">Belépés</button>
                </form>
                <p className="login-footer">
                    Nincs még fiókod? <a href="/register">Regisztrálj itt</a>
                </p>
            </div>
        </div>
    );
};

export default Login;