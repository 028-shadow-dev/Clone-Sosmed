import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Content from "./Content";
import "../styles/Friend.css";

function Friend() {
    // Ambil data posts global dari context
    const { posts } = useContext(UserContext) || {};

    // Filter postingan: Hanya ambil yang sudah di-follow
    const followedFriends = posts?.filter(post => post.isFollowed) || [];

    return (
        <div className="friend-page-container">
            <div className="friend-header-zone">
                <h2>My Friends</h2>
                <p className="friend-subtitle">Daftar creator yang sedang kamu ikuti</p>
                <div className="friend-count-badge">
                     {followedFriends.length} Following
                </div>
            </div>

            <div className="friend-results-wrapper">
                {followedFriends.length > 0 ? (
                    <div className="posts-vertical-wrapper" style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
                        {followedFriends.map((post) => (
                            <Content key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="friend-empty-state">
                        <div className="empty-friend-icon">No Friend</div>
                        <h3>Belum ada teman</h3>
                        <p>Kamu belum mem-follow siapapun. Cari creator seru di menu Find!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Friend;