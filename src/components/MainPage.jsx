import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UserCard from "./UserCard";

function MainContent() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(allUsers);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="main-content" style={{ minHeight: "60vh", padding: "2rem" }}>
                <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.8rem", color: "#333" }}>Pengguna Terdaftar</h2>
                {users.length > 0 ? (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                        {users.map((user, index) => (
                            <UserCard key={index} user={user} />
                        ))}
                    </div>
                ) : (
                    <p style={{ textAlign: "center", color: "#999", fontSize: "1.1rem" }}>Belum ada pengguna terdaftar</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

function MainPage() {
    return <MainContent />;
}

export default MainPage;