import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../styles/Menu.css";

function Menu() {
    // Ambil state navigasi dari UserContext (UserProvider)
    const { activePage, setActivePage } = useContext(UserContext) || {};

    return (
        <aside className="sidebar">
            <nav className="menu-nav">
                <ul className="menu-list">
                    
                    {/* MENU HOME */}
                    <li 
                        className={`menu-item ${activePage === "home" ? "active" : ""}`}
                        onClick={() => setActivePage && setActivePage("home")}
                    >
                        <Link to="#" className="menu-link">
                            <span className="icon">
                                <svg fill="#507cf3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="-49.54 -49.54 594.48 594.48">
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path>
                                            <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            <span className="label">Home</span>
                        </Link>
                    </li>

                    {/* MENU FIND */}
                    <li 
                        className={`menu-item ${activePage === "find" ? "active" : ""}`}
                        onClick={() => setActivePage && setActivePage("find")}
                    >
                        <Link to="#" className="menu-link">
                            <span className="icon">
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" stroke="#507cf3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                            <span className="label">Find</span>
                        </Link>
                    </li>

                    {/* MENU FRIEND */}
                    <li 
                        className={`menu-item ${activePage === "friend" ? "active" : ""}`}
                        onClick={() => setActivePage && setActivePage("friend")}
                    >
                        <Link to="#" className="menu-link">
                            <span className="icon">👥</span>
                            <span className="label">Friend</span>
                        </Link>
                    </li>

                    {/* MENU SETTING */}
                    <li className="menu-item">
                        <Link to="#" className="menu-link">
                            <span className="icon">⚙️</span>
                            <span className="label">Setting</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </aside>
    );
}

export default Menu;