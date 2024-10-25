import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNav from "./../Mobile-Nav/index"

import "./nav.css"
const Nav = ({ onClickMenu }) => {

    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ["Home", "About", "Work", "Service", "Contact"]

    const onClickMobileMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='nav-parent'>
            <div className='logo-parent'>
                <FontAwesomeIcon icon={faCode} size="2x" color='#022BF7' />
                <div>Developer</div>
            </div>

            <div className='menu-parent'>
                <ul className='menu-item'>

                    {
                        menuItems.map((ele) =>
                            <li onClick={() => onClickMenu(ele)} >{ele}</li>
                        )
                    }
                </ul>
            </div>

            <div className='mobile-menu-parent'>
                <FontAwesomeIcon icon={faBars} onClick={onClickMobileMenu} />
                <MobileNav isOpen={isOpen} menuItems={menuItems} onClickMenu={onClickMenu} />
            </div>
        </div>
    )
}

export default Nav;