import React, { useContext } from "react";
import { UserContext } from "../context/UserContext"; 
import Navbar from "./Navbar";
import Menu from "./Menu";
import Search from "./Search";
import Content from "./Content";
import Footer from "./Footer";
import "../styles/MainPage.css";

function MainContent() {
    // Ambil data posts dan activePage dari UserContext
    const { posts, activePage } = useContext(UserContext);

    return (
        <div className="app-container">
            <Navbar />
            <div className="main-wrapper">
                <Menu />
                <div className="content-area">
                    {activePage === "home" && (
                        <div className="posts-vertical-wrapper" style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
                            {posts.map((post) => (
                                <Content key={post.id} post={post} />
                            ))}
                        </div>
                    )}
                    {activePage === "find" && (
                        <Search />
                    )}
                </div>
            </div>
                <Footer />
        </div>
    );
}

function MainPage() {
    return <MainContent />;
}

export default MainPage;