import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Comment from "./Comment";
import "../styles/Content.css";

function Content({ post }) {
    // 1. Ambil fungsi handleLike dan handleFollow dari UserContext
    const { handleLike, handleFollow } = useContext(UserContext) || {};

    return (
        <div className="content-card">
            {/* SISI KIRI: Khusus Konten Utama (User Info + Gambar) */}
            <div className="content-left-side" >
                {/* Header - User Info */}
                <div className="content-header">
                    <div className="user-info">
                        <h3 className="content-username">{post?.username || "Username"}</h3>
                        <p className="content-email">{post?.email || "email@example.com"}</p>
                        <p className="content-deskripsi">{post?.deskripsi || "No deskripsi"}</p>
                    </div>
                </div>

                {/* Content - Image */}
                <div className="content-image-area" style={{ flex: 1 }}>
                    <img src={post?.image} alt={post?.username} className="content-image" style={{ height: "100%", minHeight: "350px" }} />
                </div>
            </div>

            {/* SISI KANAN: Khusus Komentar */}
            <div className="content-right-side" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", borderLeft: "1px solid #efefef", paddingLeft: "1.5rem" }}>
                <Comment />
                
                {/* Footer - Like & Follow ditaruh di paling bawah sisi kanan */}
                <div className="content-footer" style={{ marginTop: "auto", paddingTop: "1rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                    
                    {/* 2. Tombol Like */}
                    <button 
                        className={`btn-like ${post?.isLiked ? 'liked' : ''}`} 
                        onClick={() => handleLike && handleLike(post.id)}
                    >
                        {post?.isLiked ? '❤️ Liked' : '🤍 Like'}
                    </button>

                    {/* 3. Tombol Follow */}
                    <button 
                        className={`btn-follow ${post?.isFollowed ? 'followed' : ''}`} 
                        onClick={() => handleFollow && handleFollow(post.id)}
                    >
                        {post?.isFollowed ? 'Following' : 'Follow'}
                    </button>

                </div>
            </div>

        </div>
    );
}

export default Content;