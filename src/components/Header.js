import React from "react";
import { Link } from 'react-router-dom';
import '../styles/header.css'


function Header() {
    return (
        <header className="header">
            <div className="logo">ShakerPedia</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/library">Library</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;