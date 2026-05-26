import React from "react";
import "../styles/UserCard.css";

function UserCard({ user }) {
    return (
        <div className="user-card">
            <div className="user-avatar">
                <img src="/profil default instagram.jpg" alt={user.username} />
            </div>
            <div className="user-info">
                <h3 className="username">{user.username}</h3>
                <p className="email">{user.email}</p>
                <p className="status">✓ Active Member</p>
            </div>
        </div>
    );
}

export default UserCard;