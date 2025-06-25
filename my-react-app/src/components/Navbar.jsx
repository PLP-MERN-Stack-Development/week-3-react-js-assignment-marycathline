import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className="bg-[#800000] text-white py-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white text-lg font-bold">My React App</div>
                <div>
                    <Link to="/" className="text-white px-4">Home</Link>
                    <Link to="/about" className="text-white px-4">About</Link>
                    <Link to="/tasks" className="text-white px-4">Tasks</Link>
                    <Link to="/posts" className="text-white px-4">Posts</Link>
                    <ThemeToggle />

                </div>
            </div>
        </nav>
    );
};

export default Navbar;