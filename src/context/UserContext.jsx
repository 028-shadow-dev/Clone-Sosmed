import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const INITIAL_POSTS = [
    { id: 1, username: "Ryan aja", email: "@Ryan", deskripsi: "pembelanjaan kopdes merah purih coy, buat data server 😹", image: "Image-1.jpg" },
    { id: 2, username: "Shadow", email: "@apaya", deskripsi: "codingan siapa ya😂😂", image: "Image-2.jpg" },
    { id: 3, username: "Ga tau mau beli truk", email: "@DosaKangTimpa", deskripsi: "Keluarga cemara", image: "Image-3.jpg" },
    { id: 4, username: "Doksli", email: "@mie ayam", deskripsi: "Doksli", image: "Image-4.jpg" }
];

export function UserContextProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(INITIAL_POSTS);
    const [activePage, setActivePage] = useState("home");

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);


    // Ambil data dari API saat pertama kali aplikasi dimuat
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((apiUsers) => {
                const updatedPosts = INITIAL_POSTS.map((post, index) => {
                    if (apiUsers[index]) {
                        return {
                            ...post,
                            username: apiUsers[index].username,
                            email: apiUsers[index].email,
                            isLiked: false,
                            isFollowed: false
                        };
                    }
                    return { ...post, isLiked: false, isFollowed: false };
                });
                setPosts(updatedPosts);
            })
            .catch((error) => console.error("Gagal mengambil data user:", error));
    }, []);

    // Logika Like
    const handleLike = (id) => {
        setPosts(prevPosts => 
            prevPosts.map(post => 
                post.id === id ? { ...post, isLiked: !post.isLiked } : post
            )
        );
    };

    // Logika Follow
    const handleFollow = (id) => {
        setPosts(prevPosts => 
            prevPosts.map(post => 
                post.id === id ? { ...post, isFollowed: !post.isFollowed } : post
            )
        );
    };

    // Sebarkan state 'posts' dan fungsi triggernya agar bisa dipakai di komponen lain
    return (
        <>
            <UserContext.Provider value={{ user, setUser, posts, handleLike, handleFollow, searchQuery, setSearchQuery, activePage, setActivePage }}>
                {children}
            </UserContext.Provider>
        </>
    );
}

