import React, { useState } from 'react';
import './mobile-nav.css'; // Import CSS styles

const MobileNav = ({ isOpen }) => {

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul className="menu-items">
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default MobileNav;
