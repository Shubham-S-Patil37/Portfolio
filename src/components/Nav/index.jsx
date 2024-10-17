import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNav from "./../Mobile-Nav/index"

import "./nav.css"
const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);


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
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className='mobile-menu-parent'>
                <FontAwesomeIcon icon={faBars} onClick={onClickMobileMenu} />
                <MobileNav isOpen={isOpen} />
            </div>
        </div>
    )
}

export default Nav;