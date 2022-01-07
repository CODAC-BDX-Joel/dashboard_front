import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='navbar_container'>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/admin'>Admin</Link>
            <Link to='/login'>Login</Link>
            <Link to='/logout'>Logout</Link>
        </nav>
    );
};

export default NavBar;