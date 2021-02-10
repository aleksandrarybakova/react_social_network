import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <div>
                <NavLink to="/profile">profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs">messages</NavLink>
            </div>
            <div>
                <NavLink to="/news">news</NavLink>
            </div>
            <div>
                <NavLink to="/music">music</NavLink>
            </div>
            <div>
                <NavLink to="/settings">settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;