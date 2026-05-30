import React from "react";
import image1 from "../assets/Image-1.jpg";
import "../styles/UserCard.css";

function UserCard({ user }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(allUsers);
    }, []);
    
    return (
        <div className="user-card">
            {/* Header - Username */}
            <div className="card-header">
                <h3 className="username">{user.username}</h3>
                <p className="email">{user.email}</p>
            </div>

            {/* Content - Gambar */}
            <div className="card-content">
                {/* <img src={image1} alt={user.username} className="card-image" /> */}
            </div>

            <div className="card-footer">
                {/* Area untuk like dan follow - styling oleh user */}
            </div>
        </div>
    );
}

export default UserCard;