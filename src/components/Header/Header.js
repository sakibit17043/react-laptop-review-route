import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <Link to='/' >HOME</Link>
            <Link to='/reviews' >REVIEWS</Link>
            <Link to='/dashboard' >DASHBOARD</Link>
            <Link to='/blogs' >BLOGS</Link>
            <Link to='/about' >ABOUT</Link>
        </div>
    );
};

export default Header;