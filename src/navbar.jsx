import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
function Navbar(){
    const navigate = useNavigate();
    return (
        <nav id="navbar">
            <button id="button2" onClick={() => navigate('/signup')}>Sign Up</button>
        </nav>
    )
};
export default Navbar;