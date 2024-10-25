import React, { useState } from 'react';
import './mobile-nav.css'; // Import CSS styles

const MobileNav = ({ isOpen, menuItems, onClickMenu }) => {

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul className="menu-items">
                {
                    menuItems.map((ele) =>
                        <li onClick={() => onClickMenu(ele)} >{ele}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default MobileNav;
