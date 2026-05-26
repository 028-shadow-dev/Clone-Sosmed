import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import '../styles/Login.css';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const userStatus = localStorage.getItem("isLoggedIn");
        const savedUser = localStorage.getItem("user");
        
        if (userStatus === "true" && savedUser) {
        setIsLoggedIn(true);
        setUsername(savedUser);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const validUser = users.find(user => user.username === username && user.password === password);
    
        if (validUser) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("user", username);
            setIsLoggedIn(true);
            navigate('/MainPage');
        } else {
        alert("Username atau password salah!");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <img src="/profil default instagram.jpg" alt="Antagram Logo" className="login-logo" />
                    <h1>Antagram</h1>
                    <p>Bergabung dengan komunitas kami</p>
                </div>

                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Username</label>
                        <input
                            type="text"
                            id="user-data"
                            placeholder="Masukkan User name Anda"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Masukkan password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn" to="MainPage">
                        <h4>Masuk</h4>
                    </button>
                </form>

                <div className="login-footer">
                    <p>Belum punya akun? <Link to="/signup">Daftar di sini</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;