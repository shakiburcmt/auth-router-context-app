import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content justify-center">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;