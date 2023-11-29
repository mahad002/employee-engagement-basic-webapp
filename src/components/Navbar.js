
import React from 'react';
import '../style/Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                {/* <li className="nav-item"><a href="/profile">Profile</a></li> */}
                <li className="nav-item"><a href="/">Employees</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
