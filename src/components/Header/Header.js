import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar  bg-neutral text-primary-content">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
                    <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
                    <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;