import React, { useContext, useRef, useEffect } from "react"; // Menghapus useRef yang tidak terpakai
import { UserContext } from "../context/UserContext";
import Content from "./Content";
import "../styles/Search.css";

function Search() {
    // Ambil data posts dan searchQuery dari context global
    const { posts, searchQuery, setSearchQuery } = useContext(UserContext) || {};
    
    const searchInputRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchInputRef.current) {
                searchInputRef.current.focus();
            }
        }, 100); // Memberikan jeda 100ms agar halaman selesai dimuat sempurna

        return () => clearTimeout(timer); // Membersihkan timer jika komponen ditutup
    }, []);


    // Filter postingan berdasarkan username yang diketik
    const filteredPosts = posts?.filter((post) =>
        post.username.toLowerCase().includes(searchQuery?.toLowerCase() || "")
    ) || [];


    return (
        <div className="search-page-container">
            <div className="search-header-zone">
                <h2>Search Username</h2>
                <p className="search-subtitle">Cari pengguna berdasarkan nama akun mereka</p>
                
                <div className="search-input-wrapper">
                    <span className="search-icon-inside">🔍</span>
                    <input
                        ref={searchInputRef} 
                        type="text"
                        placeholder="Ketik username..."
                        value={searchQuery || ""}
                        onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                        className="search-box-input"
                    />
                    {searchQuery && (
                        <button className="search-clear-btn" onClick={() => setSearchQuery && setSearchQuery("")}>✕</button>
                    )}
                </div>
            </div>

            {/* Area Hasil Pencarian */}
            <div className="search-results-wrapper">
                {filteredPosts.length > 0 ? (
                    <div className="posts-vertical-wrapper" style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
                        {filteredPosts.map((post) => (
                            // Memanggil komponen Content
                            <Content key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="search-no-results">
                        <div className="no-results-icon">Maaf Ga ada nama yg kamu cari</div>
                        <h3>Tidak ada hasil ditemukan</h3>
                        <p>Username dengan kata kunci "{searchQuery}" tidak terdaftar.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;