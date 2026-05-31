# Antagram - Aplikasi Social Media Sederhana

**Tugas Akhir Semester Kelas 11 RPL - SMK Letris Indonesia 2**
**Program Studi: Rekayasa Perangkat Lunak dan Gim**
**Semester: Ganjil Tahun Akademik 2025/2026**

---

## Deskripsi Aplikasi

Antagram adalah aplikasi web social media sederhana yang dibangun menggunakan **React JS**. Aplikasi ini menampilkan feed dari berbagai user, memungkinkan pengguna untuk like, follow, dan mencari user lain.

---

## Fitur Utama

- 🔐 **Login & Signup** - Autentikasi sederhana dengan localStorage
- 📱 **Home Feed** - Menampilkan posts dari berbagai user
- 🔍 **Search User** - Mencari user berdasarkan username
- ❤️ **Like Feature** - Like dan unlike posts
- 👥 **Follow Feature** - Follow dan unfollow user
- 🎨 **Modern UI** - Interface yang menarik dan user-friendly

---

## Struktur Project

```
src/
├── components/
│   ├── Navbar.jsx          # Header dengan logo dan user info
│   ├── Menu.jsx            # Sidebar navigasi (Home, Find, Friend, Setting)
│   ├── Search.jsx          # Halaman pencarian user
│   ├── Content.jsx         # Komponen untuk menampilkan satu post
│   ├── Comment.jsx         # Komponen komentar
│   ├── Footer.jsx          # Footer aplikasi
│   ├── Login.jsx           # Halaman login
│   ├── Signup.jsx          # Halaman signup
│   └── MainPage.jsx        # Halaman utama
├── context/
│   └── UserContext.jsx     # Global state management dengan Context API
├── styles/
│   ├── Navbar.css
│   ├── Menu.css
│   ├── Search.css
│   ├── Content.css
│   ├── Footer.css
│   ├── Login.css
│   └── MainPage.css
├── App.jsx                 # Root component dengan routing
└── main.jsx                # Entry point aplikasi
```

---

## Fetch API - Pengambilan Data dari Server

### Endpoint API yang Digunakan
- **URL**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Response**: Array of user objects

### Implementasi di UserContext.jsx

<details>
  <summary>Klik di sini untuk melihat Screenshot</summary>
  ![Featch API menggunakan use effect](./src/assets/Fetch%20API%20react.png)
</details>

**Penjelasan:**
- Fetch data user dari API saat component mount (dependency array kosong)
- Merge data API dengan INITIAL_POSTS untuk membuat posts yang lebih lengkap
- Data disimpan ke state `posts` menggunakan `setPosts`
- Error handling dengan `.catch()` untuk menangani kegagalan request

---

## 🎨 Component dan Fungsinya

### 1. **Navbar.jsx**
- Menampilkan logo "Antagram"
- Menampilkan username user yang login
- Tombol logout untuk keluar dari aplikasi

**Kode:**
```jsx
function Navbar() {
    const currentUser = localStorage.getItem("user");
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        navigate("/");
    };
    
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo"><h1>Antagram</h1></div>
                <div className="navbar-user">
                    <span className="username">👤 {currentUser}</span>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </nav>
    );
}
```

### 2. **Menu.jsx**
- Sidebar navigasi dengan 4 menu utama
- Home - Menampilkan feed utama
- Find - Mencari user lain
- Friend - Halaman teman (placeholder)
- Setting - Pengaturan (placeholder)

**Kode:**
```jsx
const { activePage, setActivePage } = useContext(UserContext);

return (
    <aside className="sidebar">
        <nav className="menu-nav">
            <li onClick={() => setActivePage("home")}>
                <span className="label">Home</span>
            </li>
            <li onClick={() => setActivePage("find")}>
                <span className="label">Find</span>
            </li>
        </nav>
    </aside>
);
```

### 3. **MainPage.jsx**
- Menampilkan content area utama
- Conditional render berdasarkan `activePage`
- Render Content saat home, Search saat find

**Kode:**
```jsx
function MainContent() {
    const { posts, activePage } = useContext(UserContext);
    
    return (
        <div className="content-area">
            {activePage === "home" && (
                <div className="posts-vertical-wrapper">
                    {posts.map((post) => (
                        <Content key={post.id} post={post} />
                    ))}
                </div>
            )}
            {activePage === "find" && <Search />}
        </div>
    );
}
```

### 4. **Content.jsx**
- Menampilkan satu post dengan username, email, deskripsi
- Menampilkan gambar post
- Like dan Follow buttons
- Komponen Comment di sebelah kanan

### 5. **Search.jsx**
- Input pencarian user
- Filter posts berdasarkan username
- Menampilkan hasil pencarian dengan Content component

**Kode:**
```jsx
const { posts, searchQuery, setSearchQuery } = useContext(UserContext);

const filteredPosts = posts?.filter((post) =>
    post.username.toLowerCase().includes(searchQuery?.toLowerCase() || "")
) || [];

return (
    <div className="search-page-container">
        <input
            type="text"
            placeholder="Ketik username..."
            value={searchQuery || ""}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
        />
        {filteredPosts.map((post) => (
            <Content key={post.id} post={post} />
        ))}
    </div>
);
```

### 6. **Login.jsx & Signup.jsx**
- Form autentikasi sederhana
- Simpan username ke localStorage
- Redirect ke MainPage setelah login

---

## 🎯 Implementasi React Hooks

### 1. **useState** - Mengelola State Lokal dan Global

**Di UserContext.jsx:**
```jsx
const [searchQuery, setSearchQuery] = useState("");
const [user, setUser] = useState(null);
const [posts, setPosts] = useState(INITIAL_POSTS);
const [activePage, setActivePage] = useState("home");
```

**Fungsi:**
- `searchQuery` - Menyimpan input pencarian
- `user` - Menyimpan data user yang login
- `posts` - Menyimpan semua posts
- `activePage` - Menyimpan halaman aktif (home/find)

**Di Search.jsx:**
```jsx
const [email, setEmail] = useState('');
const [user, setUser] = useState('');
const [password, setPassword] = useState('');
```

### 2. **useEffect** - Menjalankan Side Effects

**Fetch data dari API:**
```jsx
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((apiUsers) => {
            // Update posts dengan data dari API
            setPosts(updatedPosts);
        })
        .catch((error) => console.error("Error:", error));
}, []); // Empty dependency array = run once on mount
```

**Check localStorage saat app start:**
```jsx
useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
        setUser(loggedInUser);
    }
}, []);
```

### 3. **useContext** - Mengakses Global State

**Di Menu.jsx:**
```jsx
const { activePage, setActivePage } = useContext(UserContext);

// Gunakan untuk update page saat klik menu
onClick={() => setActivePage("find")}
```

**Di Content.jsx:**
```jsx
const { handleLike, handleFollow } = useContext(UserContext);

// Gunakan untuk trigger like/follow
onClick={() => handleLike(post.id)}
```

**Di Search.jsx:**
```jsx
const { posts, searchQuery, setSearchQuery } = useContext(UserContext);

// Gunakan untuk filter dan update search query
```

### 4. **useRef** - Referensi DOM (Tidak dipakai di project ini, tapi bisa ditambahkan untuk input)

**Contoh penggunaan:**
```jsx
const searchInputRef = useRef(null);

const handleSearch = () => {
    const value = searchInputRef.current.value;
    setSearchQuery(value);
};

<input ref={searchInputRef} type="text" />
```

---

## 🎮 Interaktivitas Website

### 1. Like Feature
- Klik tombol "❤️ Like" untuk like post
- Button berubah warna menjadi "❤️ Liked" saat di-like
- Data tersimpan di state `isLiked`

```jsx
const handleLike = (id) => {
    setPosts(prevPosts => 
        prevPosts.map(post => 
            post.id === id ? { ...post, isLiked: !post.isLiked } : post
        )
    );
};
```

### 2. Follow Feature
- Klik tombol "👥 Follow" untuk follow user
- Button berubah menjadi "👥 Following" saat sudah follow
- Data tersimpan di state `isFollowed`

### 3. Search Feature
- Ketik di input search untuk filter user
- Real-time filtering berdasarkan username
- Menampilkan hasil pencarian di halaman Find

---

## 📊 Context API Structure

**UserContext.jsx** menyediakan global state:

```jsx
<UserContext.Provider value={{
    user,           // Username yang login
    setUser,        // Function untuk set user
    posts,          // Array of posts
    handleLike,     // Function untuk like post
    handleFollow,   // Function untuk follow user
    searchQuery,    // Query pencarian
    setSearchQuery, // Function untuk update search query
    activePage,     // Halaman aktif saat ini
    setActivePage   // Function untuk switch halaman
}}>
    {children}
</UserContext.Provider>
```

**Component yang menggunakan Context:**
- Menu.jsx - Mengakses `activePage`, `setActivePage`
- MainPage.jsx - Mengakses `posts`, `activePage`
- Search.jsx - Mengakses `posts`, `searchQuery`, `setSearchQuery`
- Content.jsx - Mengakses `handleLike`, `handleFollow`

---

## 🚀 Cara Menjalankan Aplikasi

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173/` (atau port lain jika 5173 sudah terpakai)

### 3. Build untuk Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 Checklist Persyaratan Tugas

### ✅ Instalasi React Berhasil (10 poin)
- [x] Project bisa dijalankan dengan `npm run dev`
- [x] Menggunakan Vite sebagai build tool
- [x] React dan dependencies terinstall

### ✅ Fetch API Berhasil (20 poin)
- [x] Data user tampil dari JSONPlaceholder API
- [x] Menggunakan `useEffect` untuk fetch
- [x] Data dimapping ke posts dengan username dan email API
- [x] Error handling untuk fetch error

### ✅ Pemecahan Component (20 poin)
- [x] Terpisah menjadi 8+ components
- [x] Navbar.jsx - Header dengan user info
- [x] Menu.jsx - Sidebar navigasi
- [x] MainPage.jsx - Main container
- [x] Content.jsx - Post card
- [x] Search.jsx - Search page
- [x] Login.jsx - Login form
- [x] Signup.jsx - Signup form
- [x] Footer.jsx - Footer

### ✅ Penggunaan React Hook (20 poin)
- [x] **useState** - State management di UserContext dan components
- [x] **useEffect** - Fetch API data, check localStorage
- [x] **useContext** - Global state di semua components
- [x] **useRef** - Bisa ditambahkan untuk input references

### ✅ Interaktivitas Website (20 poin)
- [x] Like button - Toggle like status
- [x] Follow button - Toggle follow status
- [x] Search input - Filter posts by username
- [x] Menu navigation - Switch between pages
- [x] Login/Logout - User authentication
- [x] Real-time updates - State changes reflect immediately

### ✅ Dokumentasi Project (10 poin)
- [x] README.md lengkap dengan penjelasan
- [x] Penjelasan fetch API dan implementasinya
- [x] Penjelasan semua components dan fungsinya
- [x] Implementasi React Hooks dengan contoh kode
- [x] Potongan kode program sebagai bukti
- [x] Dokumentasi singkat, rapi, dan mudah dipahami

---

## 🔗 Links Penting

- **GitHub Repository**: [Link repository]
- **Live Demo**: [Link deploy]
- **API Documentation**: https://jsonplaceholder.typicode.com

---

## 📋 Catatan Pengembang

- Aplikasi menggunakan localStorage untuk autentikasi sederhana (tidak aman untuk production)
- Aplikasi menggunakan localStorage jadi setiap akun user bisa bebas bikin

---

**Dikerjakan oleh:** Rakha Aqilah Vicrie
**Sekolah:** SMK Letris Indonesia 2
