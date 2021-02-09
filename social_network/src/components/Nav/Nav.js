import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <div>
                <a href="/profile">profile</a>
            </div>
            <div>
                <a href="/dialogs">messages</a>
            </div>
            <div>
                <a href="/news">news</a>
            </div>
            <div>
                <a href="/music">music</a>
            </div>
            <div>
                <a href="/settings">settings</a>
            </div>
        </nav>
    )
}

export default Nav;