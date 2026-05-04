import { useState } from 'react';
import axios from 'axios';
import '../Register/Register.css'; // Ellenőrizd, hogy a fájl tényleg ebben a mappában van!

const Register = () => {
    // Kezdőállapot az űrlaphoz
    const [user, setUser] = useState({ 
        username: '', 
        email: '', 
        password: '' 
    });

    // Állapot a visszajelzésekhez (sikeres vagy hibaüzenet)
    const [status, setStatus] = useState({ message: '', type: '' });

    // Input mezők változásának kezelése (univerzális megoldás)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ message: '', type: '' }); // Előző üzenet törlése

        try {
            // A backend URL-je - ellenőrizd a portot és az útvonalat!
            const res = await axios.post('http://localhost:3000/users/register', user);
            
            setStatus({ 
                message: res.data.message || "Sikeres regisztráció!", 
                type: 'success' 
            });

            // Opcionális: Űrlap ürítése siker után
            setUser({ username: '', email: '', password: '' });

        } catch (err) {
            // Biztonságos hibakezelés: ha a szerver küld hibaüzenetet, azt írjuk ki, ha nem, akkor egy általános hibát
            const errorMsg = err.response?.data?.error || "Nem sikerült elérni a szervert!";
            setStatus({ 
                message: errorMsg, 
                type: 'error' 
            });
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2>Regisztráció</h2>
                
                <form className="register-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" // Fontos a 'name' a handleChange-hez
                        placeholder="Felhasználónév" 
                        value={user.username}
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email cím" 
                        value={user.email}
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Jelszó" 
                        value={user.password}
                        onChange={handleChange} 
                        required 
                    />
                    
                    <button type="submit" className="register-btn">
                        Regisztrálok
                    </button>
                </form>

                {/* Visszajelző üzenet megjelenítése */}
                {status.message && (
                    <p className={`status-message ${status.type}`}>
                        {status.message}
                    </p>
                )}

                <p className="login-link">
                    Már van fiókod? <a href="/login">Jelentkezz be</a>
                </p>
            </div>
        </div>
    );
};

export default Register;