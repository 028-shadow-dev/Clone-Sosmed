import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import "../styles/MainPage.css";

function MainContent() {
    return (
        /* 1. Mengikuti CSS: Layout vertikal dari atas ke bawah */
        <div className="app-container">
            <Navbar />
            
            {/* 2. Mengikuti CSS: Layout horizontal untuk Sidebar + Konten */}
            <div className="main-wrapper">
                <Menu /> {/* Di dalam Menu.jsx pastikan elemen terluarnya punya class="sidebar" */}
                
                {/* 3. Mengikuti CSS: Tempat konten halaman Anda berada */}
                <div className="content-area">
                    {/* Taruh konten utama atau box Anda di sini */}
                </div>
            </div>
            
            {/* 4. Mengikuti CSS: Footer otomatis didorong ke paling bawah */}
            <Footer /> {/* Di dalam Footer.jsx pastikan elemen terluarnya punya class="footer" */}
        </div>
    );
}

function MainPage() {
    return <MainContent />;
}

export default MainPage;
