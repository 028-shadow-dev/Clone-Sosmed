import React, { useState } from "react";
import "../styles/Comment.css";

function Comment() {
    const [commentText, setCommentText] = useState("");

    return (
        <div className="comment-card">
            <div className="comment-header">
                <h3>Komentar</h3>
            </div>

            {/* Comment Input Area - Bisa ketik, tidak bisa kirim */}
            <div className="comment-input-area">
                <div className="comment-input-wrapper">
                    <input
                        type="text"
                        placeholder="Tulis komentar..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="comment-input"
                    />
                    <button className="comment-submit-btn" disabled>
                        Kirim
                    </button>
                </div>
            </div>

            {/* Comments List */}
            <div className="comments-list">
                <p className="no-comments">Belum ada komentar</p>
            </div>
        </div>
    );
}

export default Comment;
