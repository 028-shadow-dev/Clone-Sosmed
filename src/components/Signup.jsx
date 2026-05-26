import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Signup.css';

function Signup() {
    const [email, setEmail] = useState(''); 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const menyimpanUser = JSON.parse(localStorage.getItem("users")) || [];
        const apakahUserIniAda = menyimpanUser.some((user) => user.username === username);
        
        if (!email || !username || !password) {
            alert("Semua field harus diisi!");
            return;
        }
    

        if (apakahUserIniAda) {
            alert("username sudah terdaftar silahkan gunakan username lain");
            return;
        }

        const newUser = {email, username, password};
        menyimpanUser.push(newUser);
        if (menyimpanUser?.length > 0) {
            alert("Pendaftaran berhasil! Silakan login.");
            localStorage.setItem("users", JSON.stringify(menyimpanUser));
            navigate('/');
        }
    };


    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="signup-header">
                    <img src="/profil default instagram.jpg" alt="Antagram Logo" className="login-logo" />
                    <h1>Antagram</h1>
                    <p>Bergabung dengan komunitas kami</p>
                </div>

                <form className="signup-form" onSubmit={handleSignup}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Masukkan email Anda"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input
                            type="text"
                            id="Username"
                            placeholder="Masukkan Username Anda"
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

                    <button type="submit" className="signup-btn">
                        Daftar
                    </button>
                </form>

                <div className="login-footer">
                    <p>Sudah punya akun? <Link to="/">Login di sini</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;