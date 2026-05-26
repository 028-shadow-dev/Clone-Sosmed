import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const navigate = useNavigate();
    const currentUser = localStorage.getItem("user");

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <h1>Antagram</h1>
                </div>
                <div className="navbar-user">
                    <span className="username">👤 {currentUser}</span>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;